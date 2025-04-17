# HealthCare Clinic Website

A responsive, full-stack web application for HealthCare Clinic, providing information about the clinic, its team, and contact options. The website features a home page with a welcome video, an about page with team details, a contact page with a functional form, and Google Maps embedded on all pages.

## Features
- **Responsive Design**: Optimized for desktop and mobile devices using CSS and media queries.
- **Home Page**: Hero section with a call-to-action, embedded YouTube video, and Google Map.
- **About Page**: Details about the clinic’s mission and team, with a Google Map.
- **Contact Page**: Form to send messages via email (SendGrid or Gmail), with a Google Map.
- **Google Maps**: Embedded maps showing the clinic’s location (no API key required).
- **Email Functionality**: Backend handles contact form submissions, sending emails to the clinic’s admin.

## Technologies
- **Frontend**:
  - HTML5, CSS3, JavaScript
  - Roboto font (Google Fonts)
  - Font Awesome icons
- **Backend**:
  - Node.js
  - Express.js
  - SendGrid or Nodemailer (Gmail) for email sending
- **Environment**:
  - dotenv for environment variables
  - npm for package management

## Project Structure
```
clinic-website/
├── src/
│   ├── about.html       # About Us page
│   ├── contact.html     # Contact page with form
│   ├── index.html       # Home page with video
├── .env                 # Environment variables (not in Git)
├── .gitignore           # Git ignore file
├── package.json         # npm dependencies and scripts
├── package-lock.json    # Dependency lock file
├── server.js            # Express server
├── node_modules/        # npm packages (not in Git)
├── README.md            # Project documentation
```

## Prerequisites
- [Node.js](https://nodejs.org/) (v16 or later)
- npm (comes with Node.js)
- A SendGrid account (for SendGrid) or Gmail account (for Nodemailer)
- A YouTube video URL (for the home page)
- A Google Maps embed URL (for all pages)

## Setup Instructions

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/AkashMaurya2004/clinic-website.git
   cd clinic-website
   ```

2. **Install Dependencies**:
   ```bash
   npm install
   ```

3. **Configure Environment Variables**:
   - Create a `.env` file in the root directory.
   - Add the following, depending on your email service:
     - **SendGrid**:
       ```env
       SENDGRID_API_KEY=your_sendgrid_api_key
       RECIPIENT_EMAIL=your_clinic_email@example.com
       ```
     - **Gmail (Nodemailer)**:
       ```env
       GMAIL_USER=your_gmail_address@gmail.com
       GMAIL_PASS=your_gmail_app_password
       RECIPIENT_EMAIL=your_clinic_email@example.com
       ```
   - Obtain a SendGrid API key from [SendGrid](https://sendgrid.com/) or a Gmail App Password from [Google Account Settings](https://myaccount.google.com/security).
   - Ensure `.env` is listed in `.gitignore`.

4. **Customize Google Map**:
   - The default map shows a placeholder location (San Francisco, CA). To use your clinic’s address:
     - Go to [Google Maps](https://www.google.com/maps).
     - Search for your address (e.g., “123 Health St, Wellness City”).
     - Click “Share” > “Embed a map” > Copy the `<iframe>` `src` URL.
     - Update the `<iframe>` `src` in `src/index.html`, `src/about.html`, and `src/contact.html`:
       ```html
       <iframe src="your_new_map_url" allowfullscreen="" loading="lazy"></iframe>
       ```

5. **Customize YouTube Video**:
   - The home page includes a placeholder YouTube video. To use your own:
     - Go to YouTube, find or upload your video.
     - Click “Share” > “Embed” > Copy the `<iframe>` `src` URL.
     - Update the `<iframe>` `src` in `src/index.html`:
       ```html
       <iframe src="your_new_youtube_url" title="Your Video Title" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
       ```

6. **Run the Application**:
   ```bash
   npm start
   ```
   - The server runs on `http://localhost:3000`.
   - Access pages:
     - Home: `http://localhost:3000/index.html`
     - About: `http://localhost:3000/about.html`
     - Contact: `http://localhost:3000/contact.html`

## Deployment (Optional)
To deploy to a free hosting platform like Render:
1. Push the project to a GitHub repository (exclude `.env` and `node_modules`).
2. Sign up at [Render](https://render.com/) and create a new Web Service.
3. Connect your GitHub repository and configure:
   - **Build Command**: `npm install`
   - **Start Command**: `npm start`
   - **Environment Variables**: Add `SENDGRID_API_KEY` or `GMAIL_USER`, `GMAIL_PASS`, and `RECIPIENT_EMAIL`.
4. Deploy and access the site at the provided URL (e.g., `https://your-app.onrender.com`).
5. Update the contact form’s Fetch URL in `src/contact.html`:
   ```javascript
   const response = await fetch('https://your-app.onrender.com/send-email', { ... });
   ```

## Troubleshooting
- **Map Not Loading**:
  - Verify the `<iframe>` `src` URL is valid (test in a browser).
  - Check for ad-blockers or browser restrictions.
  - Generate a new Google Maps share link if needed.
- **Video Not Playing**:
  - Ensure the YouTube `<iframe>` `src` is correct.
  - Check browser console for errors (e.g., CORS issues).
  - Replace with a Vimeo or self-hosted video if needed.
- **Contact Form Errors**:
  - Confirm `.env` variables are set correctly.
  - For SendGrid, verify the API key is active.
  - For Gmail, ensure the App Password is used (not regular password).
  - Check server logs (`console.error` in `server.js`).
- **Server Not Starting**:
  - Run `npm install` to ensure dependencies are installed.
  - Check for port conflicts (default: 3000) and update `server.js` if needed.
- **Layout Issues**:
  - Test on multiple devices to ensure responsiveness.
  - Adjust CSS heights (e.g., `.video iframe`, `.map iframe`) in HTML files if needed.

## Contributing
Contributions are welcome! Please fork the repository, create a new branch, and submit a pull request with your changes.

## License
This project is licensed under the [MIT License](LICENSE).