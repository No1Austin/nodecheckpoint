// email-sender.js
const nodemailer = require("nodemailer");

(async () => {
  const testAccount = await nodemailer.createTestAccount();

  const transporter = nodemailer.createTransport({
    host: "smtp.ethereal.email",
    port: 587,
    secure: false,
    auth: { user: testAccount.user, pass: testAccount.pass },
  });

  const info = await transporter.sendMail({
    from: '"Node Student" <node@example.com>',
    to: "your.name@example.com",
    subject: "Hello from Node + Nodemailer",
    text: "This is a test email.",
    html: "<p>This is a <b>test email</b>.</p>",
  });

  console.log("Message sent:", info.messageId);
  console.log("Preview URL:", nodemailer.getTestMessageUrl(info));
})().catch(console.error);
