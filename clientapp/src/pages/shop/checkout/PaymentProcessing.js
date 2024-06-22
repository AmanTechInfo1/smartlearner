import React, { useState } from "react";
import "./Checkout.css";
import FinalCheckout from "./FinalCheckout";
import { useDispatch, useSelector } from "react-redux";
import { generateHashcodeCheckout, getCompleteCheckout } from "../../../redux/features/cartSlice";

export default function PaymentProcessing() {

  const [amount, setAmount] = useState('');
  const [hashCode, setHashCode] = useState('');

  const dispatch = useDispatch()

  const carting = useSelector((state) => {
    return state.cart.payment
  })

  const hashcoding = useSelector((state) => {
    return state.cart.hashcode
  })


  const [formData, setFormData] = useState({
    ekashu_seller_id: carting.seller_id,
    ekashu_seller_key: carting.seller_key,
    ekashu_amount: carting.total,
    orderId: carting._id,
    ekashu_currency: 'GBP',
    ekashu_auto_confirm: 'true',
    ekashu_duplicate_check: 'error',
    ekashu_card_address_required: 'false',
    ekashu_card_address_verify: 'check',
    ekashu_card_zip_code_verify: 'check',
    ekashu_card_title_mandatory: 'false',
    ekashu_card_email_address_mandatory: 'false',
    ekashu_hash_code_type: "SHA256HMAC",
    ekashu_hash_code_version: "2.0.0",
    ekashu_style_sheet: "https://cloudfront.posinabox.eu/creditcall_gateway_branding_ecommerce/css/style_test.css",
    ekashu_failure_url: carting.ekashu_failure_url,
    ekashu_success_url: carting.ekashu_success_url,
    ekashu_reference: carting.ekashu_reference,
    ekashu_return_url: carting.ekashu_return_url,
    ekashu_viewport: "device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   try {
  //     const response = await axios.post('http://localhost:5000/generate_hash', formData);
  //     setHashCode(response.data.hash_code);

  //     const form = e.target;
  //     const additionalData = document.createElement('input');
  //     additionalData.type = 'hidden';
  //     additionalData.name = 'ekashu_hash_code';
  //     additionalData.value = response.data.hash_code;
  //     form.appendChild(additionalData);

  //     // Submit the form
  //     form.submit();
  //     // Automatically submit the form after setting the hash code
  //     document.getElementById('payment-form').submit();
  //   } catch (error) {
  //     console.error('Error generating hash:', error);
  //   }
  // };



  const callFunApi = async (e) => {

    const form = e.target;
    const additionalData = document.createElement('input');
    additionalData.type = 'hidden';
    additionalData.name = 'ekashu_hash_code';
    additionalData.value = hashcoding;
    form.appendChild(additionalData);
    form.submit();
    
    e.preventDefault();
    dispatch(generateHashcodeCheckout(formData, () => {
     
      // e.preventDefault();
    },form,additionalData))

  }

  console.log(hashCode, "dhasjkdkasjdas")


  // useEffect(()=>{

  // },[hashCode])

  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      {/* {hashCode && (
        <div>
          <small>Generated hash code: <strong>{hashCode}</strong></small>
          <br /><br />
        </div>
      )} */}

      <form style={{ textAlign: "center" }} className="form-horizontal" role="form" action="https://test-gateway.verofy.com" method="post" id="payment-form" onSubmit={callFunApi}>
        <input type="hidden" name="ekashu_seller_id" value={carting.seller_id} />
        <input type="hidden" name="ekashu_seller_key" value={carting.seller_key} />

        <h1>Amount to be paid : {carting.total}</h1>
        <h3>Sub Total : {carting.subtotal}</h3>
        <h3>Total Amount : {carting.serviceCharge}</h3>


        <input type="hidden" name="ekashu_amount" id="ekashu_amount" value={formData.ekashu_amount} onChange={handleInputChange} required />
        <input type="hidden" name="ekashu_currency" value="GBP" />
        <input type="hidden" name="ekashu_auto_confirm" value="true" />
        <input type="hidden" name="ekashu_duplicate_check" value="error" />
        <input type="hidden" name="ekashu_card_address_required" value="false" />
        <input type="hidden" name="ekashu_card_address_verify" value="check" />
        <input type="hidden" name="ekashu_card_zip_code_verify" value="check" />
        <input type="hidden" name="ekashu_card_title_mandatory" value="false" />
        <input type="hidden" name="ekashu_card_email_address_mandatory" value="false" />

        {hashCode && (
          <input type="text" name="ekashu_hash_code" id="ekashu_hash_code" value={carting.hashCode} />
        )}
        <input type="hidden" name="ekashu_hash_code_type" id="ekashu_hash_code_type" value="SHA256HMAC" />
        <input type="hidden" name="ekashu_hash_code_version" id="ekashu_hash_code_version" value="2.0.0" />
        <input type="hidden" name="ekashu_hash_code_version" id="ekashu_hash_code_version" value="2.0.0" />
        <input type="hidden" name="ekashu_return_url" value={carting.ekashu_return_url} />
        <input type="hidden" name="ekashu_reference" value={carting.ekashu_reference} />
        <input type="hidden" name="ekashu_style_sheet" value="https://cloudfront.posinabox.eu/creditcall_gateway_branding_ecommerce/css/style_test.css" />
        <input type="hidden" name="ekashu_failure_url" value={carting.ekashu_failure_url} />
        <input type="hidden" name="ekashu_success_url" value={carting.ekashu_success_url} />
        <input type="hidden" name="ekashu_viewport" value="device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />

        <button style={{ padding: "10px 40px", backgroundColor: "red", color: "white" }} type="submit">Pay</button>



      </form>
    </div>
  );
}
