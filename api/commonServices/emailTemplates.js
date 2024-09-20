
function appointmentMailTemplate(user) {
    return `<!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Appointment Details</title>
      <style>
          body {
              font-family: Arial, sans-serif;
              background-color: #f4f4f4;
              color: #333;
              margin: 0;
              padding: 0;
              display: flex;
              justify-content: center;
              align-items: center;
              min-height: 100vh;
          }
          .container {
              background: #ffffff;
              border-radius: 8px;
              box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
              max-width: 600px;
              width: 100%;
              padding: 20px;
              margin: 20px;
              border: 1px solid #ddd;
              overflow: hidden;
          }
          h1 {
              text-align: center;
              color: #0056b3;
              margin-bottom: 20px;
              font-size: 24px;
              font-weight: 600;
          }
          .content {
              line-height: 1.6;
          }
          .content p {
              margin: 10px 0;
              padding: 10px;
              border-radius: 4px;
              background: #f8f9fa;
          }
          .label {
              font-weight: 600;
              color: #333;
          }
          .footer {
              text-align: center;
              margin-top: 20px;
              font-size: 14px;
              color: #6c757d;
          }
          @media (max-width: 600px) {
              .container {
                  padding: 15px;
                  margin: 10px;
              }
          }
      </style>
  </head>
  <body>
      <div class="container">
          <h1>New Appointment</h1>
          <div class="content">
              <p><span class="label">Name:</span> ${user.name || "John Mic"}</p>
              <p><span class="label">Email:</span> ${
                user.email || "johndoe@example.com"
              }</p>
              <p><span class="label">Phone:</span> ${
                user.phone || "+1234567890"
              }</p>
              <p><span class="label">Date:</span> ${user.date || "2024-08-15"}</p>
              <p><span class="label">Mode:</span> ${user.name || "Virtual"}</p>
                 <p><span class="label">City:</span> ${user.name || "Hyderabad"}</p>
              <p><span class="label">Time:</span> ${user.time || "14:00"}</p>
               <p><span class="label">Comments:</span> ${
                 user.comments || "XYZ"
               }</p>
          </div>
      </div>
  </body>
  </html>
  
  `;
  }
  
  module.exports = { appointmentMailTemplate };
  
  