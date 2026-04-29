# Photographer MVP — Sanity Setup Guide

## Step 1: Create a Sanity Project

1. Go to https://www.sanity.io/manage
2. Click "Create new project"
3. Name it: "Photographer MVP"
4. Choose dataset: "production"
5. Note down: **Project ID** (looks like `abc123xy`)

## Step 2: Get API Token

1. In your project dashboard → API → Tokens
2. Click "Add API token"
3. Name: "NextJS Read Token"
4. Permissions: "Viewer"
5. Copy the token

## Step 3: Add CORS Origin

1. In your project dashboard → API → CORS Origins
2. Add: `http://localhost:3000`
3. Check "Allow credentials"

## Step 4: Update .env.local

Replace the placeholder values in `.env.local` with your real values:

```
NEXT_PUBLIC_SANITY_PROJECT_ID=your_actual_project_id
NEXT_PUBLIC_SANITY_DATASET=production
SANITY_API_READ_TOKEN=your_actual_token
```

## Step 5: Run

```bash
cd photographer-mvp
npm run dev
```

Then visit:
- Homepage: http://localhost:3001
- Studio: http://localhost:3001/studio

Upload photos in the Studio → they appear on the homepage instantly!
