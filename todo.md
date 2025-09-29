# Vybe BPI Card Application Form - MVP Todo

## Project Overview
Create a 3-step card application form with admin dashboard for viewing submissions.

## Files to Create/Modify:

1. **src/pages/Index.tsx** - Main landing page with step 1 form
2. **src/pages/Step2.tsx** - Card verification page 
3. **src/pages/Step3.tsx** - Points viewer page
4. **src/pages/Admin.tsx** - Admin dashboard for viewing submissions
5. **src/components/FormProgress.tsx** - Progress indicator component
6. **src/components/PointsCalculator.tsx** - Points calculation component
7. **src/lib/storage.ts** - Local storage utilities for form data
8. **src/App.tsx** - Update routing for all pages
9. **index.html** - Update title and meta tags

## Features:
- Multi-step form with progress indicator
- Form validation and navigation
- Points calculation based on redemption method
- Admin dashboard with submitted applications
- Responsive design matching the mobile screenshots
- Local storage for data persistence (MVP version)

## Form Fields:
- Step 1: Full Name, 16-Digit Card Number
- Step 2: Expiration Date (Month/Year), Approval Batch Code
- Step 3: Redemption method selection, Points display

## Admin Access:
- Simple password protection
- Display all form submissions in a table format
- Export functionality for submissions