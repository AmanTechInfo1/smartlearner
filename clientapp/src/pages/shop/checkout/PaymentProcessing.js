import React, { useState, useEffect } from "react";
import "./Checkout.css";
import { useDispatch, useSelector } from "react-redux";
import { PayPalButtons } from "@paypal/react-paypal-js";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";

import httpHandler from "../../../utils/httpHandler";
import LoadingWeb from "../../../components/loader/LoadingWeb";
import { useNavigate } from "react-router-dom";
import { emptyCart } from "../../../redux/features/cartSlice";
import toast from "react-hot-toast";

export default function PaymentProcessing() {
  const [hashCode, setHashCode] = useState("");
  const [isHashGenerated, setIsHashGenerated] = useState(false);
  const [paymentId, setPaymentId] = useState(null);
  const [error, setError] = useState(null);
  const [paypalError, setPaypalError] = useState(null);
  const [stripeError, setStripeError] = useState(null);
  const [isPaymentCreated, setIsPaymentCreated] = useState(false);
  const [orderId, setOrderId] = useState(null);
  const [loading, setLoading] = useState(false);
  const [webloading, setWebLoading] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const carting = useSelector((state) => state.cart.payment);

  const createPayment = async () => {
    setLoading(true);
    try {
      const response = await httpHandler.post("/api/order/create", {
        order: {
          firstName: carting.firstName,
          lastName: carting.lastName,
          city: carting.city,

          email: carting.email,
          myCart: carting.myCart,
          ordernotes: carting.ordernotes,
          phoneNumber: carting.phoneNumber,
          postcode: carting.postcode,
          serviceCharge: carting.serviceCharge,
          streetAddress1: carting.streetAddress1,
          streetAddress2: carting.streetAddress2,
          subtotal: carting.subtotal,
          total: carting.total.toFixed(2),
        },
      });

      if (response.data.success) {
        setPaymentId(response.data.paymentId);
        setOrderId(response.data.orderId);
        setIsPaymentCreated(true);
      } else {
        setError("Failed to create payment.");
      }
    } catch (err) {
      setError("Payment creation failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  // Stripe Payment Handler
  const stripe = useStripe();
  const elements = useElements();

  const handleStripePayment = async (e) => {
    e.preventDefault();
    if (!stripe || !elements) {
      setError("Stripe not initialized. Please try again.");
      return;
    }

    const cardElement = elements.getElement(CardElement);
    const { token, error } = await stripe.createToken(cardElement);

    if (error) {
      setError(error.message);
      return;
    }

    try {
      setWebLoading(true);
      const response = await httpHandler.post("/api/order/stripe-charge", {
        paymentMethodData: {
          type: "card",
          card: {
            token: token.id, // Pass the token here
          },
        },
        orderId,
        amount: carting.total.toFixed(2),
      });

      if (response.data.requiresAction) {
        // Confirm the payment with the client secret from backend
        const { error: confirmationError, paymentIntent } =
          await stripe.confirmCardPayment(
            response.data.paymentIntentClientSecret
          );

        if (confirmationError) {
          setError(
            "Payment authentication failed: " + confirmationError.message
          );
        } else if (paymentIntent.status === "succeeded") {
          dispatch(emptyCart());
          navigate("/payment-completed");
          toast.success(response.data.message);
        } else {
          setError("Payment failed. Please try again.");
          toast.error(response.data.message);
        }
      } else if (response.data.success) {
        // Payment was successful
        dispatch(emptyCart());
        navigate("/payment-completed");
      } else {
        setError("Stripe payment failed. Please try again.");
      }
    } catch (err) {
      setError("Stripe payment failed. Please try again.");
    } finally {
      setWebLoading(false);
    }
  };

  // PayPal Payment Execution
  const executePayment = async (paymentId, payerId, orderId) => {
    setWebLoading(true);
    try {
      const response = await httpHandler.post("/api/order/execute", {
        paymentId,
        payerId,
        orderId,
      });

      if (response.data.success) {
        dispatch(emptyCart());
        navigate("/payment-completed");
      } else {
        setError("Payment execution failed. Please try again.");
      }
    } catch (err) {
      setError("Payment execution failed. Please try again.");
    } finally {
      setWebLoading(false);
    }
  };

  const handleApprove = (data, actions) => {
    const payerId = data.payerID;
    const paymentId = data.orderID;
    executePayment(paymentId, payerId, orderId);
  };

  const handleError = (error) => {
    setPaypalError("Payment failed: " + error.message);
  };

  useEffect(() => {
    createPayment();
  }, []);

  return (
    <div className="payment-container">
      {webloading && <LoadingWeb />}

      <h1>Amount to be paid: £{carting.total}</h1>
      <h3>Sub Total: £{carting.subtotal}</h3>
      <h3>Service Charge: £{carting.serviceCharge}</h3>

      {isPaymentCreated && !loading && (
        <div>
          <PayPalButtons
            style={{ layout: "vertical" }}
            createOrder={(data, actions) => {
              return actions.order.create({
                purchase_units: [
                  {
                    amount: {
                      value: carting.total.toFixed(2),
                      currency_code: "GBP",
                    },
                  },
                ],
              });
            }}
            onApprove={handleApprove}
            onError={handleError}
            fundingSource="paypal"
          />

          {/* Stripe Payment */}

          <form onSubmit={handleStripePayment}>
            <CardElement className="stripe-card-input" />
            <button className="payment-button" type="submit" disabled={!stripe}>
              Pay with Stripe
            </button>
          </form>

          {stripeError && <div className="error-message">{stripeError}</div>}
        </div>
      )}

      {loading && !isPaymentCreated && <div>Loading... Please wait.</div>}
    </div>
  );
}
