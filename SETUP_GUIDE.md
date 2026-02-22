# Excel Training Programme Website - Setup Guide

## Overview
This is a complete, professional marketing website for an Excel training programme focused on real estate financial modelling and IFRS reporting. The website includes lead capture functionality with backend integration.

---

## 🎯 Key Features

### 1. **Landing Page (Home)**
- Professional hero section with programme overview
- Trainer profile with photo and credentials (Crispus Kamau, AssocRICS)
- LinkedIn profile link
- Location and logistics information (Delta Corner, Westlands)
- Clear call-to-action button

### 2. **Programme Options Section**
Three training tiers displayed as pricing cards:
- **Beginner**: Financial Modelling Foundations (KES 20,000 / 25,000)
- **Intermediate**: IFRS Financial Modelling (KES 40,000 / 50,000)
- **Expert**: Fund, Valuation, Debt & Tax Modelling (KES 80,000 / 100,000)

Each card shows:
- Programme description
- Pricing (with and without certification)
- Schedule and duration
- Key highlights
- "View Details" button

### 3. **Programme Details Pages**
Each programme has a comprehensive details section with tabs:
- **Overview**: Who it's for, what you'll build
- **Topics**: Key modelling topics covered
- **Excel Skills**: Specific Excel functions and techniques
- **Content**: Financial statements and key content
- **Deliverables**: Final project deliverables

### 4. **Registration Form**
Professional contact form with:
- Full Name (required)
- Email Address (required)
- Phone Number (required)
- Programme Selection dropdown (required)
- Optional message/notes field
- Clear submission confirmation

### 5. **Admin Dashboard**
View all registrations in a clean table format:
- Access via `?admin=true` URL parameter
- Shows all registration data
- Sortable by date
- Refresh capability
- Professional table layout

---

## 🔧 Technical Implementation

### Frontend
- **Framework**: React 18.3.1
- **Styling**: Tailwind CSS 4.1.12
- **Components**: Shadcn/ui component library
- **Icons**: Lucide React
- **Notifications**: Sonner toast library

### Backend
- **Server**: Supabase Edge Functions with Hono
- **Database**: Supabase Key-Value Store
- **API Endpoints**:
  - `POST /make-server-1e3b0733/register` - Submit registration
  - `GET /make-server-1e3b0733/registrations` - Retrieve all registrations
  - `GET /make-server-1e3b0733/health` - Health check

### Data Storage
All registration submissions are stored with:
- Unique registration ID
- Full name, email, phone
- Programme selection
- Optional message
- Timestamp

---

## 📋 How to Use

### For Public Users

1. **Browse Homepage**
   - Read about the programme
   - View trainer credentials
   - Check location and logistics

2. **View Programme Options**
   - Click "View Programme Options" or scroll down
   - Compare all three programmes
   - Check pricing and schedules

3. **View Programme Details**
   - Click "View Details" on any programme card
   - Explore tabs for comprehensive information
   - Read through objectives, topics, and deliverables

4. **Register**
   - Fill out the registration form at the bottom
   - Select your preferred programme
   - Add any questions or notes
   - Submit the form
   - Receive confirmation message

### For Administrators

1. **Access Admin Dashboard**
   - Add `?admin=true` to your website URL
   - Example: `https://your-site.com/?admin=true`

2. **View Registrations**
   - See all submitted registrations in a table
   - Data is sorted by most recent first
   - Click "Refresh" to update the list

3. **Export Data**
   - Copy registration details manually
   - Or implement CSV export functionality (future enhancement)

---

## 📧 Email Notifications

### Current Implementation
The system logs email content to the console and stores registrations in the database. Email content is prepared for:
- Harietwambui@outlook.com
- bella.kamau@outlook.com

### Future Enhancement
To enable actual email sending:
1. Set up an SMTP service (e.g., SendGrid, AWS SES, Resend)
2. Add API key as environment variable
3. Update server code to send actual emails
4. Test email delivery

---

## 🎨 Customization

### Update Trainer Information
Edit `/src/app/components/Hero.tsx`:
- Change trainer name and credentials
- Update LinkedIn profile URL
- Modify bio text
- Replace trainer photo via Unsplash or upload

### Modify Programme Details
Edit `/src/app/components/ProgrammeDetails.tsx`:
- Update programme objectives
- Modify topics and Excel skills
- Change deliverables
- Adjust pricing in `/src/app/components/ProgrammeCards.tsx`

### Change Branding Colors
The site uses a blue/indigo color scheme. To modify:
- Update Tailwind classes in components
- Adjust theme colors in `/src/styles/theme.css`

---

## 🚀 Deployment Checklist

Before going live with real student data:

- [ ] Set up production email service
- [ ] Add email API key to environment variables
- [ ] Test email delivery thoroughly
- [ ] Implement admin authentication for dashboard
- [ ] Add SSL certificate (HTTPS)
- [ ] Set up proper backup procedures
- [ ] Add privacy policy and terms
- [ ] Implement GDPR compliance measures
- [ ] Test on multiple devices and browsers
- [ ] Set up error monitoring (e.g., Sentry)
- [ ] Configure analytics (optional)

---

## 🔒 Security Notes

### Important Warnings
1. **Admin Dashboard**: Currently accessible via URL parameter - add authentication before production
2. **Email Service**: Requires API key stored securely in environment variables
3. **Data Privacy**: This is a demonstration app - ensure proper data protection for production
4. **HTTPS**: Always use HTTPS in production for form submissions

### Recommended Security Measures
- Add password protection to admin dashboard
- Implement rate limiting on form submissions
- Add CAPTCHA to prevent spam
- Use environment variables for all sensitive keys
- Enable CORS restrictions for production
- Implement input validation and sanitization
- Add SQL injection protection (already included with KV store)

---

## 📞 Support & Contact

For technical support or questions about this implementation:
- Review the code comments in each component
- Check the README.md file
- Consult Supabase documentation for backend features

For programme enquiries:
- Email: Harietwambui@outlook.com
- Email: bella.kamau@outlook.com

---

## 📝 License & Attribution

This website was built using:
- React and modern web technologies
- Shadcn/ui components (MIT License)
- Tailwind CSS (MIT License)
- Lucide icons (ISC License)
- Unsplash photos (Unsplash License)

Built with Figma Make - a rapid prototyping tool for web applications.

---

## 🎓 Programme Information

**Trainer**: Crispus Kamau, AssocRICS

**Location**: Delta Corner, Westlands, Nairobi, Kenya

**Contact**: 
- Harietwambui@outlook.com
- bella.kamau@outlook.com

**Website Purpose**: Lead generation and programme information (not e-commerce)

---

*Last Updated: February 2026*
