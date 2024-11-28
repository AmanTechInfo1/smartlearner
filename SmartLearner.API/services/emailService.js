const nodemailer = require("nodemailer");

// Send Email function
const sendEmail = async (subject, message) => {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "Smartlearnerdrivingschool@gmail.com", // Your email
    pass: "cbsb ueih dxqm zdhd", // Your email password or app password
    },
  });

  const mailOptions = {
    from: "Smartlearnerdrivingschool@gmail.com", // Sender's email
    to: to, // Admin's email
    subject,
    html: message, // Send HTML formatted message
  };

  try {
    await transporter.sendMail(mailOptions);
    return { success: true };
  } catch (error) {
    console.error("Error sending email:", error);
    return { success: false, error: error.message };
  }
};

// Handle Contact Us Form
const handleContactForm = (formData) => {
  return `
    <html>
      <head>
        <style>
          body { font-family: Arial, sans-serif; color: #333; }
          .container { width: 100%; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f9f9f9; border: 1px solid #ddd; }
          .header { text-align: center; }
          .header img { width: 150px; }
          .body { padding: 10px 0; }
          .body h2 { color: #444; }
          .body p { margin: 5px 0; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <img src="https://smartlearner.com/static/media/White-Logo-Fixed-1024x174.36cf39f0d189481b24c1.png" alt="Company Logo" />
          </div>
          <div class="body">
            <h2>New Contact Us Form Submission</h2>
            <p><strong>First Name:</strong> ${formData.firstName}</p>
            <p><strong>Last Name:</strong> ${formData.lastName}</p>
            <p><strong>Email:</strong> ${formData.email}</p>
            <p><strong>Address:</strong> ${formData.address}</p>
            <p><strong>Postcode:</strong> ${formData.postcode}</p>
            <p><strong>Phone:</strong> ${formData.phoneNumber}</p>
            <p><strong>Instructor Type:</strong> ${formData.instructorType}</p>
            <p><strong>Tuition Type:</strong> ${formData.tutionType}</p>
            <p><strong>Message:</strong> ${formData.message}</p>
          </div>
        </div>
      </body>
    </html>
  `;
};

// Handle Callback Form
const handleCallbackForm = (formData) => {
  return `
    <html>
      <head>
        <style>
          body { font-family: Arial, sans-serif; color: #333; }
          .container { width: 100%; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f9f9f9; border: 1px solid #ddd; }
          .header { text-align: center; }
          .header img { width: 150px; }
          .body { padding: 10px 0; }
          .body h2 { color: #444; }
          .body p { margin: 5px 0; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <img src="https://smartlearner.com/static/media/White-Logo-Fixed-1024x174.36cf39f0d189481b24c1.png" alt="Company Logo" />
          </div>
          <div class="body">
            <h2>New Callback Form Submission</h2>
            <p><strong>Name:</strong> ${formData.name}</p>
            <p><strong>Email:</strong> ${formData.email}</p>
            <p><strong>Phone:</strong> ${formData.phoneNumber}</p>
            <p><strong>Message:</strong> ${formData.message}</p>
          </div>
        </div>
      </body>
    </html>
  `;
};

// Handle Driven Form
const handleDrivenForm = (formData) => {
  return `
    <html>
      <head>
        <style>
          body { font-family: Arial, sans-serif; color: #333; }
          .container { width: 100%; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f9f9f9; border: 1px solid #ddd; }
          .header { text-align: center; }
          .header img { width: 150px; }
          .body { padding: 10px 0; }
          .body h2 { color: #444; }
          .body p { margin: 5px 0; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <img src="https://smartlearner.com/static/media/White-Logo-Fixed-1024x174.36cf39f0d189481b24c1.png" alt="Company Logo" />
          </div>
          <div class="body">
            <h2>New Driven Form Submission</h2>
            <p><strong>Driven Before:</strong> ${formData.drivenBefore}</p>
            <p><strong>Preferred Type:</strong> ${formData.preferredType}</p>
            <p><strong>Postcode:</strong> ${formData.postcode}</p>
          </div>
        </div>
      </body>
    </html>
  `;
};

// Handle Enquiry Form
const handleEnquiryForm = (formData) => {
  return `
    <html>
      <head>
        <style>
          body { font-family: Arial, sans-serif; color: #333; }
          .container { width: 100%; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f9f9f9; border: 1px solid #ddd; }
          .header { text-align: center; }
          .header img { width: 150px; }
          .body { padding: 10px 0; }
          .body h2 { color: #444; }
          .body p { margin: 5px 0; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <img src="https://smartlearner.com/static/media/White-Logo-Fixed-1024x174.36cf39f0d189481b24c1.png" alt="Company Logo" />
          </div>
          <div class="body">
            <h2>New Enquiry Form Submission</h2>
            <p><strong>Name:</strong> ${formData.name}</p>
            <p><strong>Email:</strong> ${formData.email}</p>
            <p><strong>Phone:</strong> ${formData.phoneNumber}</p>
            <p><strong>Message:</strong> ${formData.message}</p>
          </div>
        </div>
      </body>
    </html>
  `;
};

// Process the form based on formType
const processForm = async (formType, formData) => {
  let message;

  if (formType === "drivenForm") {
    message = handleDrivenForm(formData);
  } else if (formType === "EnquiryForm") {
    message = handleEnquiryForm(formData);
  } else if (formType === "callbackForm") {
    message = handleCallbackForm(formData);
  } else if (formType === "contactUsForm") {
    message = handleContactForm(formData);
  } else {
    return { success: false, error: "Invalid form type" };
  }

  // Send email with the appropriate message
  const emailResult = await sendEmail(`New ${formType} Submission`, message);
  return emailResult;
};
////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////
// Configure the transport for email sending
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "Smartlearnerdrivingschool@gmail.com", // Your email
    pass: "cbsb ueih dxqm zdhd", // Use an app password or OAuth2 for production
  },
});

// Function to send email
const sendRegisterEmail = async (to, subject, htmlContent) => {
  const mailOptions = {
    from: "Smartlearnerdrivingschool@gmail.com",
    to: to,
    subject: subject,
    html: htmlContent, // Send HTML content for rich formatting
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log("Email sent successfully");
  } catch (error) {
    console.error("Error sending email:", error);
  }
};

// Send welcome email to the user
const sendWelcomeEmail = async (userData) => {
  const { email, username } = userData;
  const subject = "Welcome to SmartLearner";
  const htmlContent = `
  <html>
      <head>
        <style>
          body { font-family: Arial, sans-serif; color: #333; }
          .container { width: 100%; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f9f9f9; border: 1px solid #ddd; }
          .header { text-align: center; }
          .header img { width: 150px; }
          .body { padding: 10px 0; }
          .body h2 { color: #444; }
          .body p { margin: 5px 0; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <img src="https://smartlearner.com/static/media/White-Logo-Fixed-1024x174.36cf39f0d189481b24c1.png" alt="Company Logo" />
          </div>
          <div class="body">
           <h1>Welcome, ${username}!</h1>
    <p>Thank you for registering with SmartLearner. We're excited to have you on board!</p>
    <p>If you need any assistance, feel free to reach out to our support team at admin@smartlearner.com</p>
          </div>
        </div>
      </body>
    </html>
  
  `;

  await sendRegisterEmail(email, subject, htmlContent);
};

// Send registration details to the admin
const sendAdminNotification = async (userData) => {
  const { username, email, phoneNumber,roleName } = userData;
  const subject = "New User Registration";
  const htmlContent = `
   <html>
      <head>
        <style>
          body { font-family: Arial, sans-serif; color: #333; }
          .container { width: 100%; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f9f9f9; border: 1px solid #ddd; }
          .header { text-align: center; }
          .header img { width: 150px; }
          .body { padding: 10px 0; }
          .body h2 { color: #444; }
          .body p { margin: 5px 0; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <img src="https://smartlearner.com/static/media/White-Logo-Fixed-1024x174.36cf39f0d189481b24c1.png" alt="Company Logo" />
          </div>
          <div class="body">
           <h1>New User Registered</h1>
    <p><strong>Username:</strong> ${username}</p>
    <p><strong>Email:</strong> ${email}</p>
    <p><strong>Phone Number:</strong> ${phoneNumber}</p>
    <p><strong>Role Selected</strong> ${roleName}</p>
    <p>Welcome to SmartLearner!</p>
          </div>
        </div>
      </body>
    </html>
  `;

  // Send email to the admin
  await sendRegisterEmail("Smartlearnerdrivingschool@gmail.com", subject, htmlContent); // Replace with actual admin email
};


function sendPaymentEmail(orderDetails, status, emailType) {
  console.log('Sending email...');
  const { payer, transaction_id, amount, currency, create_time } = orderDetails;

  let subject = '';
  let body = '';

  // Prepare email content based on status
  if (status === 'Payment Successful') {
    subject = `Order ${transaction_id} - Payment Successful`;
    body = `
      Your payment was successful!
      Order ID: ${transaction_id}
      Amount: ${amount.total} ${currency}
      Status: ${status}
      Payment Date: ${create_time}

      Thank you for your order. If you have any questions, feel free to contact us.
    `;
  } else if (status === 'Payment Failed') {
    subject = `Order ${transaction_id} - Payment Failed`;
    body = `
      Unfortunately, your payment could not be processed.
      Order ID: ${transaction_id}
      Amount: ${amount.total} ${currency}
      Status: ${status}
      Payment Date: ${create_time}

      Please try again later or contact support.
    `;
  }

  // Send email to the user
  const mailOptionsUser = {
    from: 'Smartlearnerdrivingschool@gmail.com',
    to: payer.email_address, // User's email
    subject: subject,
    text: body,
  };

  transporter.sendMail(mailOptionsUser, (error, info) => {
    if (error) {
      console.log('Error sending email to user:', error);
    } else {
      console.log('Email sent to user: ' + info.response);
    }
  });

  // Send success email to admin (if required)
  const mailOptionsAdmin = {
    from: 'Smartlearnerdrivingschool@gmail.com',
    to: 'admin@yourdomain.com', // Admin's email
    subject: `New Order: ${transaction_id}`,
    text: `
      New order received.
      Order ID: ${transaction_id}
      Amount: ${amount.total} ${currency}
      Status: ${status}
      Payment Date: ${create_time}
    `,
  };

  transporter.sendMail(mailOptionsAdmin, (error, info) => {
    if (error) {
      console.log('Error sending email to admin:', error);
    } else {
      console.log('Email sent to admin: ' + info.response);
    }
  });
}




module.exports = {
  processForm,
  sendWelcomeEmail,
  sendAdminNotification,
  sendPaymentEmail,
};
