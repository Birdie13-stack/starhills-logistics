# Starhills Logistics Website

A modern, responsive logistics and shipping website built with Next.js 16, TypeScript, and Tailwind CSS.

## 🚀 Live Site

- **Production URL:** https://starhillslogistics.com
- **Vercel Dashboard:** [Your Vercel Project](https://vercel.com/dashboard)

## 📋 Table of Contents

- [Tech Stack](#tech-stack)
- [Features](#features)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [Environment Variables](#environment-variables)
- [Deployment](#deployment)
- [Key Pages](#key-pages)
- [API Integration](#api-integration)
- [Contact Information](#contact-information)

---

## 🛠 Tech Stack

- **Framework:** Next.js 16.0.3 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS 4.1.17
- **Animations:** Framer Motion 12.23.24
- **Icons:** Lucide React 0.554.0, React Icons 5.5.0
- **Deployment:** Vercel
- **Form Handling:** FormSubmit

---

## ✨ Features

### Core Features
- ✅ **Responsive Design** - Mobile, tablet, and desktop optimized
- ✅ **Real-time Package Tracking** - Track shipments via API integration
- ✅ **Contact Form** - FormSubmit integration for inquiries
- ✅ **Privacy & Legal Pages** - GDPR-compliant privacy policy and data deletion policy
- ✅ **Modern UI/UX** - Smooth animations with Framer Motion
- ✅ **Accessibility** - WCAG compliant with proper ARIA labels
- ✅ **SEO Optimized** - Meta tags and semantic HTML

### Pages
1. **Home** (`/`) - Landing page with service overview
2. **Tracking** (`/track`) - Real-time shipment tracking
3. **Contact** (`/contact`) - Multiple contact options + form
4. **Privacy Policy** (`/privacy-policy`) - GDPR-compliant privacy information
5. **Delete Account** (`/delete-account`) - Data deletion policy

---

## 📁 Project Structure

```
starhillslogistics/
├── app/
│   ├── layout.tsx              # Root layout
│   ├── page.tsx                # Homepage
│   ├── track/
│   │   └── page.tsx            # Tracking page
│   ├── contact/
│   │   └── page.tsx            # Contact page
│   ├── privacy-policy/
│   │   └── page.tsx            # Privacy policy
│   └── delete-account/
│       └── page.tsx            # Data deletion policy
├── components/
│   ├── ui/                     # Reusable UI components
│   ├── Footer.tsx              # Site footer
│   └── Navigation.tsx          # Site navigation
├── public/
│   └── images/                 # Static images
├── .env.local                  # Local environment variables (not in git)
├── package.json                # Dependencies
└── tailwind.config.js          # Tailwind configuration
```

---

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ installed
- npm or yarn package manager
- Git

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/starhillslogistics.git
   cd starhillslogistics
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Create environment variables**
   
   Create a `.env.local` file in the root directory:
   ```env
   NEXT_PUBLIC_API_URL=https://starhills-logistcis-be-avbmfugsewgbcvg7.canadacentral-01.azurewebsites.net
   ```

4. **Run development server**
   ```bash
   npm run dev
   ```

5. **Open in browser**
   
   Navigate to `http://localhost:3000`

---

## 🔐 Environment Variables

### Required Variables

| Variable | Description | Example |
|----------|-------------|---------|
| `NEXT_PUBLIC_API_URL` | Backend API base URL | `https://starhills-logistcis-be-...` |

### Setting up in Vercel

1. Go to Vercel Dashboard → Your Project
2. Click **Settings** → **Environment Variables**
3. Add `NEXT_PUBLIC_API_URL` with the backend URL
4. Select all environments (Production, Preview, Development)
5. Redeploy the project

---

## 🚢 Deployment

The site is automatically deployed to Vercel via GitHub integration.

### Automatic Deployment

Every push to the `main` branch triggers a production deployment:
1. Push changes to GitHub
   ```bash
   git add .
   git commit -m "Your commit message"
   git push
   ```
2. Vercel automatically builds and deploys
3. Changes are live in 1-3 minutes

### Manual Deployment

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel --prod
```

---

## 📄 Key Pages

### 1. Tracking Page (`/track`)

**Features:**
- Real-time package tracking via backend API
- Timeline visualization of shipment status
- Download waybill (PDF)
- Share tracking information
- Contact support

**API Endpoint:**
```
GET /api/v1/tracking/{trackingNumber}
```

**Example tracking numbers:**
- `SB-34C391B4826F` (test shipment)

### 2. Contact Page (`/contact`)

**Features:**
- WhatsApp quick link
- Direct email link
- Instagram link
- Contact form (via FormSubmit)

**Form submits to:** `starhillslogistics@gmail.com`

### 3. Privacy Policy (`/privacy-policy`)

GDPR-compliant privacy policy covering:
- Information collection
- Data usage
- Data sharing
- User rights
- Cookies
- Contact information

### 4. Delete Account (`/delete-account`)

Data deletion policy covering:
- Right to deletion (GDPR Article 17)
- Deletion process
- Data retention requirements
- Timeline for deletion

---

## 🔌 API Integration

### Backend API

**Base URL:** `https://starhills-logistcis-be-avbmfugsewgbcvg7.canadacentral-01.azurewebsites.net`

### Tracking Endpoint

**Endpoint:** `GET /api/v1/tracking/{trackingNumber}`

**Response Structure:**
```json
{
  "success": true,
  "message": "Shipment found successfully",
  "data": {
    "order_id": "SB-34C391B4826F",
    "status": "pending",
    "courier": {
      "name": "Errandlr",
      "tracking_code": "XTA5RA5TEAEOGCZ",
      "phone": "+2348039172280",
      "email": "support@errandlr.com"
    },
    "ship_from": { ... },
    "ship_to": { ... },
    "delivery_eta": "Within 2 - 3 working days",
    "package_status": [
      {
        "status": "Pending",
        "datetime": "2025-12-30T14:33:51.000Z"
      }
    ],
    "tracking_url": "https://trackshipment.shipbubble.com/...",
    "waybill_document": "https://files.shipbubble.com/orders/..."
  }
}
```

### Error Handling

The frontend handles:
- 404 - Tracking number not found
- 500 - Server error
- Network errors
- Invalid data formats

---

## 📞 Contact Information

### Website
- **Email:** starhillslogistics@gmail.com
- **Phone:** +234 816 012 0876
- **WhatsApp:** +234 816 012 0876
- **Instagram:** [@starhillslogistics](https://instagram.com/starhillslogistics)

### Domain
- **Registrar:** GoDaddy
- **Domain:** starhillslogistics.com
- **DNS:** Managed via GoDaddy, pointing to Vercel

### Hosting
- **Frontend:** Vercel (automatic deployment from GitHub)
- **Backend:** Azure Web Apps (Canada Central)

---

## 🛠 Development Commands

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Type checking
npm run type-check

# Linting
npm run lint
```

---

## 📝 Important Notes

### Environment Variables
- `.env.local` is in `.gitignore` and NOT pushed to GitHub
- Environment variables must be set in Vercel dashboard separately
- Changes to env vars require redeployment

### Deployment Flow
1. Code pushed to GitHub
2. Vercel detects changes
3. Builds Next.js app
4. Deploys to production
5. Live in 1-3 minutes

### DNS Configuration
- Domain managed in GoDaddy
- A records point to Vercel
- SSL certificate auto-managed by Vercel

### Backend Dependencies
- Backend API must be running for tracking to work
- Contact backend team if tracking fails
- Backend URL contains intentional typo: "logist**cis**" (not "logistics")

---

## 🐛 Troubleshooting

### Tracking not working on live site
- Check environment variables in Vercel
- Verify backend API is running
- Check browser console for errors
- Test API endpoint directly in browser

### Changes not appearing after deployment
- Clear browser cache
- Check Vercel deployment logs
- Verify push was successful to GitHub
- Wait 2-3 minutes for propagation

### Form submissions not received
- Check spam folder
- Verify FormSubmit email is correct
- Test form locally first

---

## 📚 Additional Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Vercel Documentation](https://vercel.com/docs)
- [FormSubmit Documentation](https://formsubmit.co)

---


**Last Updated:** January 3, 2026  
**Version:** 1.0.0  
