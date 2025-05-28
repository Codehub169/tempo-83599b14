const express = require('express');
const path = require('path');
const cors = require('cors');
const contactRoutes = require('./api/contactRoutes');
const { initDb } = require('./db/databaseService');

const app = express();
const PORT = process.env.PORT || 3001; // Backend port

// Middleware
app.use(cors()); // Enable CORS for all routes
app.use(express.json()); // Parses incoming requests with JSON payloads
app.use(express.urlencoded({ extended: true })); // Parses incoming requests with URL-encoded payloads

// Serve static files from the React app build directory
// The startup.sh script copies client/build to server/public
const staticFilesPath = path.join(__dirname, 'public');
app.use(express.static(staticFilesPath));

// API routes
app.use('/api', contactRoutes); // Mount the contact routes

// All other GET requests not handled by API routes or static files should serve the React app
app.get('*', (req, res) => {
  res.sendFile(path.join(staticFilesPath, 'index.html'));
});

// Initialize Database and Start Server
initDb()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server running on http://localhost:${PORT}`);
      console.log(`Frontend should be accessible via the port configured in startup.sh (e.g., 9000 if reverse proxy or direct serve after build)`);
      console.log(`Serving static files from: ${staticFilesPath}`);
    });
  })
  .catch(err => {
    console.error('Failed to initialize database:', err);
    process.exit(1); // Exit if DB initialization fails
  });
