import React, { useState } from "react";

import "./Checkout.css";
import { useDispatch, useSelector } from "react-redux";
import { getCompleteCheckout } from "../../../redux/features/cartSlice";
import { useNavigate } from "react-router-dom";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";

export default function FinalCheckout(props) {
  const [email, setEmail] = useState("");
  const [orderNotes, setOrderNotes] = useState("");

  const navigate = useNavigate();

  const dispatch = useDispatch();

  const handleEmailChange = (e) => {
    props.handleLocalChange(e.target.id, e.target.value);
    setEmail(e.target.value);
  };

  const handleOrderNotesChange = (e) => {
    props.handleLocalChange(e.target.id, e.target.value);
    setOrderNotes(e.target.value);
  };

  const myCart = useSelector((state) => {
    return state.cart.cart;
  });
  const calculateSubtotal = () => {
    return myCart.reduce((acc, item) => acc + item.price * item.count, 0);
  };
  const validateItemId = (id) => {
    // Ensure ID is a 24-character hex string
    return /^[0-9a-fA-F]{24}$/.test(id);
  };

  const cleanCart = (cart) => {
    return cart.map((item) => {
      // Keep only the valid part of the ID
      const validId = item.id.split("_")[0];
      if (validateItemId(validId)) {
        return { ...item, id: validId };
      } else {
        throw new Error(`Invalid item ID: ${item.id}`);
      }
    });
  };
  const subtotal = calculateSubtotal();
  const serviceCharge = subtotal * 0.02;
  const total = subtotal + serviceCharge;
  const callFunApi = () => {
    try {
      const cleanCartItems = cleanCart(myCart);
      let finalArr = {
        ...props.formData,
        subtotal: subtotal,
        serviceCharge: serviceCharge,
        total: total,
        myCart: cleanCartItems,
      };
      dispatch(
        getCompleteCheckout(finalArr, () => {
          navigate("/paymentProcessing");
        })
      );
    } catch (error) {
      console.error(error.message);
      // Show error to the user
    }
  };

  return (
    <>
      <div className="modal-content" id="modelContent">
        <form className="form-space">
          <div className="form-space">
            <label htmlFor="email" className="form-label text-white">
              Email Address <span className="text-red-500">*</span>
            </label>
            <FloatingLabel controlId="floatingInput" label="email">
              <Form.Control
                type="email"
                placeholder="email"
                id="email"
                className="form-input"
                value={email}
                onChange={handleEmailChange}
                required
              />
            </FloatingLabel>
          </div>
          <div className="form-space">
            <h2 className="section-header text-white">
              Additional Information
            </h2>
            <label htmlFor="order-notes" className="form-label text-white">
              Order Notes (Optional)
            </label>
            <textarea
              id="ordernotes"
              rows="4"
              className="form-textarea"
              value={orderNotes}
              onChange={handleOrderNotesChange}
              placeholder="Notes about your order, e.g. special notes for delivery"></textarea>
          </div>
        </form>
        <div>
          <hr className="divider" />
          <div>
            <h2 className="section-header text-white">YOUR ORDER</h2>
            <div className="mt-1">
              <div className="d-flex justify-content-between py-2  border-bottom border-danger text-white">
                <span>Service</span>
                <span>Subtotal</span>
              </div>
              {/* <div className="d-flex justify-content-between py-2 border-bottom border-danger text-white">
                <span>1 Hour - Manual 1x</span>
                <span>$100.00</span>
              </div> */}
              <div className="d-flex justify-content-between py-2 border-bottom border-danger text-white">
                <span>Subtotal</span>
                <span>£{subtotal}</span>
              </div>
              <div className="d-flex justify-content-between py-2 border-bottom border-danger text-white">
                <span>2% ONLINE SERVICE CHARGE</span>
                <span>£{serviceCharge}</span>
              </div>

              <div className="d-flex justify-content-between py-2 border-bottom border-danger text-white">
                <span>Total</span>
                <span>£{total}</span>
              </div>
            </div>
            <div className="text-center mt-3">
              <button
                className="btn-primary account-btn btn-lg"
                onClick={() => {
                  callFunApi();
                }}
                type="submit">
                checkout
              </button>
            </div>
          </div>
        </div>
        <div className="checkBoxContainer">
              <div>
                <Form>
                  <Form.Check // prettier-ignore
                    type="switch"
                    id="custom-switch"
                    label="I agree to the SmartLearner terms & conditions"
                  />
                  <Form.Check // prettier-ignore
                    type="switch"
                    label="I agree for Smartlearner to email my lessons plans, newsletters and special offers"
                    id="custom-switch"
                  />
                </Form>
              </div>
            </div>
      </div>
    </>
  );
}
