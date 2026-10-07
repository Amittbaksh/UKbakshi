/*
# Create contact_submissions table (single-tenant, no auth)

1. New Tables
- `contact_submissions`
- `id` (uuid, primary key, auto-generated)
- `name` (text, not null) — the full name of the person submitting the form
- `email` (text, not null) — the email address for replies
- `company` (text, nullable) — the company name (optional)
- `phone` (text, nullable) — phone number (optional)
- `service` (text, nullable) — which service they are interested in
- `message` (text, not null) — the body of their enquiry
- `created_at` (timestamptz, defaults to now) — when the submission was made
2. Security
- Enable RLS on `contact_submissions`.
- Allow anon + authenticated INSERT only (anyone visiting the site can submit the form).
- No SELECT, UPDATE, or DELETE policies — submissions can only be read/managed from the Supabase dashboard, not from the frontend.
*/

CREATE TABLE IF NOT EXISTS contact_submissions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  company text,
  phone text,
  service text,
  message text NOT NULL,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE contact_submissions ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "anon_insert_contact_submissions" ON contact_submissions;
CREATE POLICY "anon_insert_contact_submissions"
ON contact_submissions FOR INSERT
TO anon, authenticated
WITH CHECK (true);
