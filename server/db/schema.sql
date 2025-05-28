-- Defines the schema for the contacts table.
-- This table will store submissions from the contact form.

CREATE TABLE IF NOT EXISTS contacts (
  id INTEGER PRIMARY KEY AUTOINCREMENT, -- Unique identifier for each submission
  name TEXT NOT NULL,                   -- Name of the person submitting the form
  email TEXT NOT NULL,                  -- Email of the person
  message TEXT NOT NULL,                -- Message content
  submitted_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP -- Timestamp of when the form was submitted
);
