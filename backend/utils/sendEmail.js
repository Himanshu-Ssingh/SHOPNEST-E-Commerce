const axios = require('axios');

const sendEmail = async ({ email, subject, message }) => {
  try {
    const data = {
      sender: {
        name: 'ShopNest Support',
        email: process.env.BREVO_SENDER_EMAIL || process.env.GMAIL_USER,
      },
      to: [
        {
          email: email,
        },
      ],
      subject: subject,
      htmlContent: message,
    };

    const config = {
      headers: {
        'api-key': process.env.BREVO_API_KEY,
        'Content-Type': 'application/json',
      },
    };

    await axios.post('https://api.brevo.com/v3/smtp/email', data, config);
    console.log(`Email successfully sent to ${email} via Brevo API`);
  } catch (error) {
    console.error(
      `Failed to send email to ${email}:`,
      error.response ? error.response.data : error.message
    );
  }
};

module.exports = sendEmail;
