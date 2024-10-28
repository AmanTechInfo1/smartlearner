import React, { useState } from "react";
import "./Checkout.css"; // Ensure this CSS file contains your new styles
import { useDispatch, useSelector } from "react-redux";
import { generateHashcodeCheckout } from "../../../redux/features/cartSlice";

export default function PaymentProcessing() {
  const dispatch = useDispatch();
  const carting = useSelector((state) => state.cart.payment);
  const hashcoding = useSelector((state) => state.cart.hashcode);

  const [formData, setFormData] = useState({
    ekashu_seller_id: carting.seller_id,
    ekashu_seller_key: carting.seller_key,
    ekashu_amount: carting.total.toFixed(0),
    orderId: carting._id,
    ekashu_currency: 'GBP',
    ekashu_auto_confirm: 'true',
    ekashu_hash_code_type: "SHA256HMAC",
    ekashu_hash_code_version: "2.0.0",
    ekashu_failure_url: carting.ekashu_failure_url,
    ekashu_success_url: carting.ekashu_success_url,
    ekashu_reference: carting.ekashu_reference,
    ekashu_return_url: carting.ekashu_return_url,
  });

  const callFunApi = async (e) => {
    e.preventDefault();
    const form = e.target;
    const additionalData = document.createElement('input');
    additionalData.type = 'hidden';
    
    additionalData.value = hashcoding;
    form.appendChild(additionalData);
    form.submit();

    dispatch(generateHashcodeCheckout(formData, () => {}, form, additionalData));
  };

  return (
    <div className="payment-container">
      <form className="payment-form" action="https://test-gateway.verofy.com" method="post" onSubmit={callFunApi}>
        <h1>Amount to be paid: {carting.total}</h1>
        <h3>Sub Total: {carting.subtotal}</h3>
        <h3>Total Amount: {carting.serviceCharge}</h3>

        <input type="hidden" name="ekashu_seller_id" value={carting.seller_id} />
        <input type="hidden" name="ekashu_seller_key" value={carting.seller_key} />
        <input type="hidden" name="ekashu_amount" value={formData.ekashu_amount} />
        <input type="hidden" name="ekashu_currency" value="GBP" />
        <input type="hidden" name="ekashu_auto_confirm" value="true" />
        <input type="hidden" name="ekashu_hash_code_type" value="SHA256HMAC" />
        <input type="hidden" name="ekashu_hash_code_version" value="2.0.0" />
        <input type="hidden" name="ekashu_return_url" value={carting.ekashu_return_url} />
        <input type="hidden" name="ekashu_reference" value={carting.ekashu_reference} />
        <input type="hidden" name="ekashu_failure_url" value={carting.ekashu_failure_url} />
        <input type="hidden" name="ekashu_success_url" value={carting.ekashu_success_url} />

        <button className="pay-button" type="submit">Pay</button>
      </form>
    </div>
  );
}
