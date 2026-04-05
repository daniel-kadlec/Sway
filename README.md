# Lead Tracker

A simple and efficient web application for managing client outreach and tracking leads in one place.

> ⚠️ This project is currently under active development. Some features may be incomplete or subject to change.

---

## Overview

Lead Tracker is designed to help users organize their outreach efforts. It provides a structured way to store, manage, and update leads without unnecessary complexity.

Instead of juggling spreadsheets or notes, users can maintain a clear overview of their outreach pipeline, including contact details, status, and notes.

---

## Features

- Create and manage leads
- Store contact information (name, email, etc.)
- Add custom notes for each lead
- Track outreach progress
- Clean and minimal UI focused on usability
- Authentication (single admin account)
- Lead status pipeline (e.g. contacted, replied, closed)
- Filtering and search

---

## Tech Stack

- **Frontend:** React, Tailwind CSS  
- **Backend:** Node.js (API routes)  
- **Database:** PostgreSQL (Supabase)  
- **ORM:** Prisma  

---

## Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/daniel-kadlec/Lead-tracker.git
cd lead-tracker
```

### 2. Install dependencies

```bash
npm install
```

### 3. Setup environment variables

Create a `.env` file and configure:

```
APP_PASSWORD_HASH=bcrypt_hash
JWT_SECRET=your_long_string
DATABASE_URL=your_database_url
```

### 4. Run the development server

```bash
npm run dev
```

---

## Database

The project uses PostgreSQL via Supabase, with Prisma as the ORM.

To apply schema changes:

```bash
npx prisma migrate dev
```

---

## Purpose

This project was built as a practical tool for managing real outreach workflows, while also serving as a learning project for full-stack development using modern technologies.

---

## Author

Daniel Kadlec  
Frontend developer focused on UI/UX and modern web applications.
