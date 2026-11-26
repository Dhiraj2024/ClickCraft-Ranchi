/*
# Create enquiries table for website project requests

1. New Tables
- `enquiries`
  - `id` (uuid, primary key)
  - `name` (text, not null) - customer's full name
  - `email` (text, not null) - customer's email address
  - `project_type` (text, not null) - what kind of website they want (dropdown)
  - `features` (text, not null) - features the customer wants in the project
  - `description` (text) - detailed query/description from the customer
  - `budget` (text, not null) - customer's budget
  - `created_at` (timestamp, defaults to now)

2. Security
- Enable RLS on `enquiries`.
- No anon/authenticated policies: enquiries are written ONLY by the
  `send-enquiry` edge function using the service role, and read by the owner.
  This is deny-by-default so anonymous visitors cannot read or spam the table.
- Grant SELECT, INSERT on `enquiries` to `service_role` only.

3. Notes
- Single-tenant lead capture; no user_id column since there is no sign-in.
*/

CREATE TABLE IF NOT EXISTS enquiries (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  project_type text NOT NULL,
  features text NOT NULL,
  description text,
  budget text NOT NULL,
  created_at timestamptz NOT NULL DEFAULT now()
);

ALTER TABLE enquiries ENABLE ROW LEVEL SECURITY;

GRANT SELECT, INSERT ON enquiries TO service_role;