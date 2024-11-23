import React, { useState } from "react";
import "./Checkout.css"; // Ensure this CSS file contains your new styles
import {  useSelector } from "react-redux";


export default function PaymentProcessing() {
  
  const [hashCode, setHashCode] = useState('');
  const [isHashGenerated, setIsHashGenerated] = useState(false);

 
  const carting = useSelector((state) => {
    return state.cart.payment;
  });
  

  const hashKey = '4TZ5dm748Jq8hVzc'; 
  const generateHashCode = async (data, hashKey) => {
    // Prepare data string from the input fields
    let hashData = '';
    for (const [key, value] of Object.entries(data)) {
      if (value && key !== 'ekashu_hash_code' && key !== 'ekashu_hash_code_type' && key !== 'ekashu_hash_code_version') {
        hashData += value + '&';
      }
    }
    hashData = hashData.slice(0, -1); // Remove the trailing '&'

    // Convert the hashData string and hashKey to Uint8Arrays
    const encoder = new TextEncoder();
    const dataBuffer = encoder.encode(hashData);
    const keyBuffer = encoder.encode(hashKey);


    try {
    // Generate HMAC-SHA256 using the Web Crypto API
    const key = await crypto.subtle.importKey(
      'raw',
      keyBuffer,
      { name: 'HMAC', hash: { name: 'SHA-256' } },
      false,
      ['sign']
    );
    const signature = await crypto.subtle.sign('HMAC', key, dataBuffer);
    // Convert the signature to a base64 string
    const base64Hash = btoa(String.fromCharCode.apply(null, new Uint8Array(signature)));
    console.log('Generated Hash Code:', base64Hash); 
    return base64Hash;
  } catch (error) {
    console.error('Error generating hash:', error);
    return '';
  }};

  const handleGenerateHashCode = async () => {
   

    if (isHashGenerated) return;
    // Prepare form data (using the carting state to populate fields dynamically)
    const formData = {
      'ekashu_3d_secure_verify': 'some_value',
      'ekashu_amount': carting.total.toFixed(2),  
      'ekashu_amount_format': 'GBP',
      'ekashu_auto_confirm': 'true',
      'ekashu_callback_failure_url': 'https://smartlearner.com/thanks',
      'ekashu_callback_success_url': 'https://smartlearner.com/thanks',
      'ekashu_card_address_editable': 'false',
      'ekashu_card_address_required': 'false',
      'ekashu_card_address_verify': 'check',
      'ekashu_card_email_address_mandatory': 'false',
      'ekashu_card_phone_number_mandatory': 'false',
      'ekashu_card_title_mandatory': 'false',
      'ekashu_card_zip_code_verify': 'check',
      'ekashu_currency':'GBP', // Use currency from carting
      'ekashu_delivery_address_editable': 'false',
      'ekashu_delivery_address_required': 'false',
      'ekashu_description': 'Product description', // Dynamically from carting
      'ekashu_device': 'desktop',
      'ekashu_duplicate_check': 'error',
      'ekashu_duplicate_minutes': '10',
      'ekashu_hash_code_format': 'SHA256HMAC',
      'ekashu_hash_code_type': 'SHA256HMAC',
      'ekashu_hash_code_version': '2.0.0',
      'ekashu_invoice_address_editable': 'false',
      'ekashu_invoice_address_required': 'false',
      'ekashu_invoice_email_address_mandatory': 'false',
      'ekashu_invoice_phone_number_mandatory': 'false',
      'ekashu_invoice_title_mandatory': 'false',
      'ekashu_locale': 'en',
      'ekashu_payment_methods': 'visa', // Dynamically from carting
      'ekashu_reference': carting.ekashu_reference, // Dynamically from carting
      'ekashu_request_type': 'purchase',
      'ekashu_return_text': 'Thank you!',
      'ekashu_seller_address': carting.streetAddress1,
      'ekashu_seller_email_address': carting.email,
      'ekashu_seller_id': carting.ekashu_seller_id,
      'ekashu_seller_key': carting.ekashu_seller_key,
      'ekashu_seller_name': carting.firstName,
      'ekashu_shortcut_icon': 'icon.png',
      'ekashu_style_sheet': "https://cloudfront.posinabox.eu/creditcall_gateway_branding_ecommerce/css/style_test.css",
      'ekashu_success_url': 'https://smartlearner.com/thanks',
      'ekashu_title': 'Payment',
      'ekashu_verification_value_mask': '****',
      'ekashu_verification_value_verify': 'check',
      'ekashu_viewport': 'device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no'
    };

    const generatedHashCode = await generateHashCode(formData, hashKey);
    if (generatedHashCode) {
      setHashCode(generatedHashCode);
      setIsHashGenerated(true); // Enable the submit button after hash is generated
      console.log('Hash Code Generated:', generatedHashCode); // Debugging
    } else {
      console.error('Hash code generation failed.');
    }
  };
  const handleFormSubmit = (e) => {
    e.preventDefault();

    if (!hashCode) {
      console.error('Hash code is missing!');
      return; // Prevent form submission if hash code is missing
    }
    // Set the generated hash code in the hidden input field
    document.getElementById('ekashu_hash_code').value = hashCode;

    // Submit the form
    document.getElementById('payment-form').submit();
    console.log('Form submitted with generated hash code:', hashCode);
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
          
          name="ekashu_seller_id"
          value={carting.ekashu_seller_id}
        />
        <input
          
          name="ekashu_seller_key"
          value={carting.ekashu_seller_key}
        />
        <input
          
          name="ekashu_amount"
          id="ekashu_amount"
          value={carting.total.toFixed(2)}
          
          required
        />
        <input  name="ekashu_currency" value="GBP" />
        <input  name="ekashu_auto_confirm" value="true" />
        <input  name="ekashu_duplicate_check" value="error" />
        <input  name="ekashu_card_address_required" value="false" />
        <input  name="ekashu_card_address_verify" value="check" />
        <input  name="ekashu_card_zip_code_verify" value="check" />
        <input  name="ekashu_card_title_mandatory" value="false" />
        <input  name="ekashu_card_email_address_mandatory" value="false" />
        <input  name="ekashu_hash_code" id="ekashu_hash_code" value={hashCode} />
        <input  name="ekashu_hash_code_type" id="ekashu_hash_code_type" value="SHA256HMAC" />
        <input  name="ekashu_hash_code_version" id="ekashu_hash_code_version" value="2.0.0" />
        <input  name="ekashu_style_sheet" value="https://cloudfront.posinabox.eu/creditcall_gateway_branding_ecommerce/css/style_test.css" />
        <input  name="ekashu_failure_url" value='https://smartlearner.com/thanks' />
        <input  name="ekashu_success_url" value='https://smartlearner.com/thanks'/>
        <input  name="ekashu_viewport" value="device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
        <button
          type="button"
          onClick={handleGenerateHashCode}
          disabled={isHashGenerated}  // Disable the button once the hash is generated
          className="pay-button">
          proceed
        </button>

        <button
          type="button"
          onClick={handleFormSubmit}
          disabled={!isHashGenerated} // Only enable after hash is generated
          className="pay-button">
          Submit Payment
        </button>
      </form>
    </div>
  );
}
