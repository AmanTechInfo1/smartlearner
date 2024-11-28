import React, { useState } from "react";
import "./Checkout.css"; // Ensure this CSS file contains your new styles
import { useSelector } from "react-redux";
import { PayPalButtons } from "@paypal/react-paypal-js";
export default function PaymentProcessing() {
  const [hashCode, setHashCode] = useState("");
  const [isHashGenerated, setIsHashGenerated] = useState(false);
  const [error, setError] = useState(null);
  const [paypalError, setPaypalError] = useState(null);

  const carting = useSelector((state) => {
    return state.cart.payment;
  });

  const hashKey = "4TZ5dm748Jq8hVzc";
  const generateHashCode = async (data, hashKey) => {
    // Prepare data string from the input fields
    const sortedData = Object.entries(data)
      .filter(([key, value]) => value !== null && value !== undefined) // Filter out null/undefined values
      .sort(([keyA], [keyB]) => keyA.localeCompare(keyB)); // Sort by key (alphabetical order)

    // Join the values into a single query string (like C# code)
    const hashData = sortedData.map(([key, value]) => value).join("&"); // Remove the trailing '&'

    // Convert the hashData string and hashKey to Uint8Arrays
    const encoder = new TextEncoder();
    const dataBuffer = encoder.encode(hashData);
    const keyBuffer = encoder.encode(hashKey);

    try {
      // Generate HMAC-SHA256 using the Web Crypto API
      const key = await crypto.subtle.importKey(
        "raw",
        keyBuffer,
        { name: "HMAC", hash: { name: "SHA-256" } },
        false,
        ["sign"]
      );
      const signature = await crypto.subtle.sign("HMAC", key, dataBuffer);
      // Convert the signature to a base64 string
      const base64Hash = btoa(
        String.fromCharCode.apply(null, new Uint8Array(signature))
      );
      console.log("Generated Hash Code:", base64Hash);
      return base64Hash;
    } catch (error) {
      console.error("Error generating hash:", error);
      setError("Failed to generate hash. Please try again.");
      return "";
    }
  };

  const handleGenerateHashCode = async () => {
    if (isHashGenerated) return;

    // Prepare form data (using the carting state to populate fields dynamically)
    const formData = {
      ekashu_3d_secure_verify: null,
      ekashu_amount: carting.total.toFixed(2),
      ekashu_amount_format: null,
      ekashu_auto_confirm: null,
      ekashu_callback_failure_url: null,
      ekashu_callback_success_url: null,
      ekashu_card_address_editable: null,
      ekashu_card_address_required: null,
      ekashu_card_address_verify: null,
      ekashu_card_email_address_mandatory: null,
      ekashu_card_phone_number_mandatory: null,
      ekashu_card_title_mandatory: null,
      ekashu_card_zip_code_verify: null,
      ekashu_currency: "GBP", // Use currency from carting
      ekashu_delivery_address_editable: null,
      ekashu_delivery_address_required: null,
      ekashu_description: null, // Dynamically from carting
      ekashu_device: null,
      ekashu_duplicate_check: null,
      ekashu_duplicate_minutes: null,
      ekashu_hash_code_format: "SHA256HMAC",
      ekashu_hash_code_type: "SHA256HMAC",
      ekashu_hash_code_version: "2.0.0",
      ekashu_invoice_address_editable: null,
      ekashu_invoice_address_required: null,
      ekashu_invoice_email_address_mandatory: null,
      ekashu_invoice_phone_number_mandatory: null,
      ekashu_invoice_title_mandatory: null,
      ekashu_locale: null,
      ekashu_payment_methods: null, // Dynamically from carting
      ekashu_reference: carting.ekashu_reference, // Dynamically from carting
      ekashu_request_type: null,
      ekashu_return_text: null,
      ekashu_seller_address: carting.streetAddress1,
      ekashu_seller_email_address: carting.email,
      ekashu_seller_id: carting.ekashu_seller_id,
      ekashu_seller_key: carting.ekashu_seller_key,
      ekashu_seller_name: carting.firstName,
      ekashu_shortcut_icon: null,
      ekashu_style_sheet: null,
      ekashu_success_url: null,
      ekashu_title: null,
      ekashu_verification_value_mask: null,
      ekashu_verification_value_verify: null,
      ekashu_viewport: null,
    };

    const generatedHashCode = await generateHashCode(formData, hashKey);
    if (generatedHashCode) {
      setHashCode(generatedHashCode);
      setIsHashGenerated(true); // Enable the submit button after hash is generated
      console.log("Hash Code Generated:", generatedHashCode); // Debugging
    } else {
      console.error("Hash code generation failed.");
    }
  };
  const handleFormSubmit = (e) => {
    e.preventDefault();

    if (!hashCode) {
      console.error("Hash code is missing!");
      return; // Prevent form submission if hash code is missing
    }
    // Set the generated hash code in the hidden input field
    document.getElementById("ekashu_hash_code").value = hashCode;

    // Submit the form
    document.getElementById("payment-form").submit();
    console.log("Form submitted with generated hash code:", hashCode);
  };
  // =====================================

  const handlePaypalSuccess = (details, data) => {
    console.log("Payment Success:", details);
    // Trigger backend API to send success email
    const orderDetails = {
      transactionId: details.id,
      amount: details.purchase_units[0].amount.value,
      cartItems: carting.myCart.map((item) => ({
        service: item.service,
        price: item.price,
        count: item.count,
        total: item.price * item.count,
      })),
      userEmail: carting.email,
      adminEmail: "admin@smartlearner.com", // Admin email
      orderNo: carting.orderNo,
      totalAmount: carting.total.toFixed(2),
      message: "Your payment was successful! Thank you for your purchase.",
    };

    sendPaymentEmail("success", orderDetails);
  };

  const handlePaymentFailure = (err) => {
    console.error("Payment Failed:", err);
    setPaypalError("Payment failed. Please try again.");
    // Trigger backend API to send failure email
    // Log more details for debugging:
    console.log("Error details:", err);

    const failureDetails = {
      message: "payment failed Please try again",
      payerEmail: carting.email, // Use the user email from carting
      cartItems: carting.myCart.map((item) => ({
        service: item.service,
        price: item.price,
        count: item.count,
        total: item.price * item.count,
      })),
    };
    sendPaymentEmail("failure", failureDetails);
  };

  const sendPaymentEmail = (status, details) => {
    fetch("/api/account/webhook", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        event_type: status === "success" ? "PAYMENT.SALE.COMPLETED" : "PAYMENT.SALE.DENIED",
        resource: details,
      }),
    })
      .then((response) => response.json())
      .then((data) =>
        console.log(
          status === "success" ? "Success email sent" : "Failure email sent",
          data
        )
      )
      .catch((error) => console.error("Error sending email:", error));
  };

  return (
    <div className="payment-container">
      <form
        className="payment-form"
        role="form"
        action="https://gateway.verofy.com"
        method="post"
        id="payment-form"
      >
        <h1>Amount to be paid: {carting.total}£</h1>
        <h3>Sub Total: {carting.subtotal}£</h3>
        <h3>Service Charge: {carting.serviceCharge}£</h3>
        <input
          type="hidden"
          name="ekashu_seller_id"
          value={carting.ekashu_seller_id}
        />
        <input
          type="hidden"
          name="ekashu_seller_key"
          value={carting.ekashu_seller_key}
        />
        <input
          type="hidden"
          name="ekashu_amount"
          id="ekashu_amount"
          value={carting.total.toFixed(2)}
          required
        />
        <input type="hidden" name="ekashu_currency" value="GBP" />
        <input type="hidden" name="ekashu_auto_confirm" value="true" />
        <input type="hidden" name="ekashu_duplicate_check" value="error" />
        <input
          type="hidden"
          name="ekashu_card_address_required"
          value="false"
        />
        <input type="hidden" name="ekashu_card_address_verify" value="check" />
        <input type="hidden" name="ekashu_card_zip_code_verify" value="check" />
        <input type="hidden" name="ekashu_card_title_mandatory" value="false" />
        <input
          type="hidden"
          name="ekashu_card_email_address_mandatory"
          value="false"
        />
        <input
          type="hidden"
          name="ekashu_hash_code"
          id="ekashu_hash_code"
          value={hashCode}
        />
        <input
          type="hidden"
          name="ekashu_hash_code_type"
          id="ekashu_hash_code_type"
          value="SHA256HMAC"
        />
        <input
          type="hidden"
          name="ekashu_hash_code_version"
          id="ekashu_hash_code_version"
          value="2.0.0"
        />
        <input
          type="hidden"
          name="ekashu_style_sheet"
          value="https://cloudfront.posinabox.eu/creditcall_gateway_branding_ecommerce/css/style_test.css"
        />
        <input
          type="hidden"
          name="ekashu_failure_url"
          value="https://help.posinabox.eu/docs/ecomm_verofy_guide"
        />
        <input
          type="hidden"
          name="ekashu_success_url"
          value="https://help.posinabox.eu/docs/ecomm_verofy_guide"
        />
        <input
          type="hidden"
          name="ekashu_viewport"
          value="device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
        />{" "}
        <button
          type="button"
          onClick={handleGenerateHashCode}
          disabled={isHashGenerated} // Disable the button once the hash is generated
          className="pay-button"
        >
          proceed
        </button>
        <button
          type="button"
          onClick={handleFormSubmit}
          disabled={!isHashGenerated} // Only enable after hash is generated
          className="pay-button"
        >
          Submit Payment
        </button>
        <PayPalButtons
          style={{ layout: "vertical" }} // Optional style for the button
          amount={carting.total.toFixed(2)} // Dynamically use the total from the cart
          currency="GBP" // Use the same currency as your cart
          onSuccess={handlePaypalSuccess}
          onError={handlePaymentFailure}
          createOrder={(data, actions) => {
            return actions.order.create({
              purchase_units: [
                {
                  amount: {
                    value: carting.total.toFixed(2), // Amount to be paid
                    currency_code: "GBP", // Currency (GBP in your case)
                  },
                },
              ],
            });
          }}
        />
      </form>
      {paypalError && <p className="error-message">{paypalError}</p>}
    </div>
  );
}
