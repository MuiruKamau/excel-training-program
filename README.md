# Excel Training Programme Website

A professional marketing website for an Excel training programme focused on real estate financial modelling and IFRS reporting.

## Features

### Public Website
- **Landing Page**: Programme overview, trainer profile, and location details
- **Programme Options**: Three training tiers (Beginner, Intermediate, Expert) with pricing
- **Programme Details**: Comprehensive information about each programme including objectives, topics, Excel skills, and deliverables
- **Registration Form**: Capture student registrations and enquiries

### Admin Dashboard
- **View Registrations**: Access all submitted registrations
- **Export Data**: View registration details including contact information and programme selection

## How to Use

### Public Website
Visit the website homepage to:
1. Learn about the Excel training programme
2. View trainer credentials (Crispus Kamau, AssocRICS)
3. Compare three programme tiers
4. View detailed programme information
5. Submit registration or enquiry

### Admin Dashboard
To access the admin dashboard for viewing registrations:

Add `?admin=true` to the URL:
```
https://your-website-url.com/?admin=true
```

This will display all submitted registrations including:
- Name
- Email
- Phone
- Programme selected
- Message/notes
- Submission timestamp

## Programme Details

### Training Location
- **Venue**: Delta Corner, Westlands, Nairobi, Kenya
- **Refreshments**: Light refreshments included; lunch break provided

### Programmes

#### 1. Beginner – Financial Modelling Foundations
- **Price**: KES 20,000 (KES 25,000 with certification)
- **Schedule**: 1st Saturday of the month
- **Duration**: 7 hours (09:00 – 13:00, 14:00 – 17:00)

#### 2. Intermediate – IFRS Financial Modelling
- **Price**: KES 40,000 (KES 50,000 with certification)
- **Schedule**: 2nd Saturday of the month
- **Duration**: 8 hours (08:30 – 13:00, 14:00 – 17:30)

#### 3. Expert – Fund, Valuation, Debt & Tax Modelling
- **Price**: KES 80,000 (KES 100,000 with certification)
- **Schedule**: 3rd and 4th Saturday of the month
- **Duration**: 7 hours each day (09:00 – 13:00, 14:00 – 17:00)

## Contact

For enquiries about the programme:
- **Email**: crispusmk@outlook.com
- **Email**: bella.kamau@outlook.com

## Technical Notes

### Form Submissions
All registration form submissions are:
- Stored in the Supabase database
- Logged for email notification (notifications would be sent to crispusmk@outlook.com and bella.kamau@outlook.com)

### Backend
The website uses:
- **Frontend**: React with Tailwind CSS
- **Backend**: Supabase Edge Functions with Hono web server
- **Database**: Supabase Key-Value store
- **Hosting**: Configurable deployment

## Important Notice

This is a demonstration/prototype application built with Figma Make. For production use with real student data:
1. Ensure proper email service integration for notifications
2. Implement appropriate security measures
3. Add data privacy compliance (GDPR, etc.)
4. Consider adding authentication for the admin dashboard
5. Set up proper data backup procedures

## Development

Built with:
- React 18.3.1
- Tailwind CSS 4.1.12
- Shadcn/ui components
- Supabase
- TypeScript
