const express = require('express');
const app = express();
const port = 8080;

app.use(express.static('public'));

app.get('/', (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>DevOps Engineer</title>
      <style>
        body {
          margin: 0;
          padding: 0;
          font-family: Arial, sans-serif;
          background: linear-gradient(135deg, #0f2027, #203a43, #2c5364);
          color: #fff;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          height: 100vh;
          text-align: center;
        }
        h1 {
          font-size: 3rem;
          margin-bottom: 0.5rem;
        }
        p {
          font-size: 1.2rem;
          margin-bottom: 1.5rem;
        }
        .btn {
          background: #ff9800;
          color: #fff;
          border: none;
          padding: 12px 24px;
          border-radius: 25px;
          font-size: 1rem;
          cursor: pointer;
          transition: background 0.3s ease;
        }
        .btn:hover {
          background: #e68900;
        }
        footer {
          position: absolute;
          bottom: 10px;
          font-size: 0.8rem;
          color: #bbb;
        }
      </style>
    </head>
    <body>
      <h1>Hello, I am a DevOps Engineer 🚀</h1>
      <p>Welcome to my Express-powered webpage!</p>
      <button class="btn" onclick="alert('Let’s build something awesome!')">
        Click Me
      </button>
      <footer>© ${new Date().getFullYear()} My Portfolio</footer>
    </body>
    </html>
  `);
});

app.listen(port, () => {
  console.log(`App running on http://localhost:${port}`);
});
