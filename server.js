const express = require('express');
const path = require('path');
const app = express();

// Middleware to redirect root domain to www
app.use((req, res, next) => {
  const host = req.headers.host;
  const isHttps = req.headers['x-forwarded-proto'] === 'https';
  console.log('req headers host = ', req.headers.host)
  console.log(' is it https? ', req.headers['x-forwarded-proto'])
  console.log('host = ', host)
  console.log('is https ', isHttps)
  // Redirect root domain to www
  if (host === 'ds-outdoorliving.com') {
    return res.redirect(301, `https://www.ds-outdoorliving.com${req.url}`);
  }

  // Redirect HTTP to HTTPS
  if (!isHttps) {
    return res.redirect(301, `https://${host}${req.url}`);
  }

  next();
});

// Serve static files (React build)
app.use(express.static(path.join(__dirname, 'build')));

// Handle React routing (SPA fallback)
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Frontend server is running on port ${PORT}`);
});

