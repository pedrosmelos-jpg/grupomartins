CREATE TABLE IF NOT EXISTS public.transactions (
  id text PRIMARY KEY,
  date text,
  month text,
  type text,
  category text,
  entity text,
  "contractId" text,
  description text,
  "paymentMethod" text,
  status text,
  amount numeric
);

CREATE TABLE IF NOT EXISTS public.contracts (
  id text PRIMARY KEY,
  client text,
  service text,
  agency text,
  "startDate" text,
  deadline text,
  status text,
  "contractValue" numeric,
  "receivedValue" numeric,
  "directCosts" numeric,
  "installmentsCount" text,
  "installmentDates" jsonb
);

CREATE TABLE IF NOT EXISTS public.clients (
  id text PRIMARY KEY,
  name text,
  document text,
  registration text,
  segment text,
  city text,
  "contactName" text,
  phone text,
  email text,
  "mainProgram" text,
  status text
);

ALTER TABLE public.transactions DISABLE ROW LEVEL SECURITY;
ALTER TABLE public.contracts DISABLE ROW LEVEL SECURITY;
ALTER TABLE public.clients DISABLE ROW LEVEL SECURITY;
