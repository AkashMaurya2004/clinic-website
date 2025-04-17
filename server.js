const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
require('dotenv').config();
const app = express();
const port = 3000;


app.use(cors());
app.use(express.json());
app.use(express.static(__dirname)); 



const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_PASS
    }
});


app.post('/send-email', async (req, res) => {
    const { name, email, message } = req.body;

    
    if (!name || !email || !message || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        console.error('Invalid input:', { name, email, message });
        return res.status(400).json({ error: 'Invalid input' });
    }

    const mailOptions = {
        from: process.env.GMAIL_USER, 
        to: process.env.RECIPIENT_EMAIL, 
        subject: `New Contact Form Submission from ${name}`,
        text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`
    };

    try {
        await transporter.sendMail(mailOptions);
        console.log('Email sent successfully to', mailOptions.to);
        res.status(200).json({ message: 'Email sent successfully' });
    } catch (error) {
        console.error('Error sending email:', error);
        res.status(500).json({ error: 'Failed to send email' });
    }
});


app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});