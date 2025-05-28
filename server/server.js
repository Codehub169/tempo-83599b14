const express = require('express');
const path = require('path');
const cors = require('cors');
const contactRoutes = require('./api/contactRoutes'); // Assuming api/contactRoutes.js is relative to this file
const { initDb } = require('./db/databaseService'); // Assuming db/databaseService.js is relative to this file

const app = express();

// Define a port, using environment variable if available, otherwise default to 3001
const PORT = process.env.PORT || 3001;

// Middleware
// Enable CORS for all routes - essential for cross-origin requests from client
app.use(cors()); 
// Parse incoming requests with JSON payloads - e.g., for API requests like contact form
app.use(express.json()); 
// Parse incoming requests with URL-encoded payloads
app.use(express.urlencoded({ extended: true }));

// Serve static files from the 'public' directory inside the 'server' directory
// This is where startup.sh copies the client build files
const staticFilesPath = path.join(__dirname, 'public');
app.use(express.static(staticFilesPath));

// API routes
// Mount the contact routes under the /api path
app.use('/api', contactRoutes);

// Fallback: For Single Page Applications, send all other requests to index.html
// This ensures client-side routing works correctly
app.get('*', (req, res) => {
  const indexPath = path.join(staticFilesPath, 'index.html');
  res.sendFile(indexPath, (err) => {
    if (err) {
      // If index.html is not found, or another error occurs sending it
      console.error('Error sending index.html:', err);
      // Avoid sending HTML in an error message for an API-like path or if client expects JSON
      // However, for a generic fallback, this is acceptable.
      if (!res.headersSent) {
        res.status(500).send('Error serving the application. index.html not found or unreadable.');
      }
    }
  });
});

// Initialize Database and Start Server
initDb()
  .then(() => {
    const server = app.listen(PORT, () => {
      console.log(`Server is listening on port ${PORT}`);
      console.log(`Access your application at http://localhost:${PORT}`);
      console.log(`Serving static files from: ${staticFilesPath}`);
    });

    server.on('error', (err) => {
      console.error('Failed to start server or server runtime error:');
      if (err.code === 'EADDRINUSE') {
        console.error(`Port ${PORT} is already in use. Please use a different port or stop the application using it.`);
      } else {
        console.error(err);
      }
      process.exit(1); // Exit the process with an error code if the server can't start or crashes
    });
  })
  .catch(err => {
    console.error('Failed to initialize database:', err);
    process.exit(1); // Exit if DB initialization fails
  });

// Graceful shutdown handlers
const gracefulShutdown = (signal) => {
  console.log(`\n${signal} received. Server shutting down gracefully...`);
  // Add any cleanup logic here if needed (e.g., closing database connections if not handled by initDb module)
  // Note: app.listen() returns a server instance that can be closed.
  // However, for simplicity and common use cases, process.exit() is often sufficient here.
  // For more complex scenarios, you might do: server.close(() => process.exit(0));
  process.exit(0);
};

process.on('SIGINT', () => gracefulShutdown('SIGINT'));
process.on('SIGTERM', () => gracefulShutdown('SIGTERM'));
