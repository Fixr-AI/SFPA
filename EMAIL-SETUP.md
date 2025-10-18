# Email Notifications Setup Guide

## Overview

Lead form submissions will be sent to: **mszwed9696@gmail.com**

The site uses Web3Forms (free service) to send email notifications without requiring a backend email server.

---

## Setup Instructions (5 minutes)

### Step 1: Get Your Web3Forms Access Key

1. Go to https://web3forms.com/
2. Enter your email: **mszwed9696@gmail.com**
3. Click **"Create Access Key"**
4. Copy the access key (looks like: `a1b2c3d4-5678-90ab-cdef-1234567890ab`)

### Step 2: Add Access Key to Vercel

1. Go to: https://vercel.com/fixr-ai/sfnj/settings/environment-variables
2. Click **"Add New"**
3. Enter:
   - **Name**: `WEB3FORMS_ACCESS_KEY`
   - **Value**: (paste your access key from Step 1)
   - **Environment**: Select all (Production, Preview, Development)
4. Click **"Save"**

### Step 3: Redeploy

1. Go to: https://vercel.com/fixr-ai/sfnj
2. Click **"Deployments"** tab
3. Find the latest deployment
4. Click **"..."** menu → **"Redeploy"**
5. Wait ~30 seconds for deployment to complete

---

## How It Works

When someone fills out a lead form on your site:

1. **User submits form** with property address, phone, email, situation
2. **API route** (`/app/api/submit-lead/route.ts`) receives the data
3. **Web3Forms** sends an email to **mszwed9696@gmail.com** with:
   - Property address
   - Phone number
   - Email (if provided)
   - Situation (foreclosure, divorce, etc.)
   - Timestamp
4. **You receive email** within seconds in your Gmail inbox

---

## Email Format

Subject: `New Lead: [Property Address]`

Body:
```
New Lead Submission from Stop Foreclosures NJ

Property Address: 123 Main St, Vineland, NJ
Phone Number: (555) 123-4567
Email: john@example.com
Situation: Facing Foreclosure

Submitted at: 10/17/2025, 2:30:45 PM
```

---

## Testing the Form

After setup, test that emails are working:

1. Visit: https://sfnj-legf3yg63-fixr-ai.vercel.app
2. Scroll to the lead form
3. Fill out:
   - **Address**: Test Property, 123 Main St, Vineland, NJ
   - **Phone**: Your phone number
   - **Email**: Your email (optional)
   - **Situation**: Facing Foreclosure
4. Click **"Get My Cash Offer Now"**
5. You should receive an email at **mszwed9696@gmail.com** within 30 seconds

---

## Troubleshooting

### Not Receiving Emails?

1. **Check Spam/Junk Folder**: Web3Forms emails might be filtered
2. **Verify Access Key**: Go to Vercel environment variables and confirm the key is set
3. **Check Web3Forms Dashboard**: Visit https://web3forms.com/dashboard to see submission logs
4. **Redeploy**: Sometimes Vercel needs a fresh deployment after adding environment variables

### Form Shows Error?

- If form submission fails, users will see an alert: "Please call us at (856) 879-1492"
- Check browser console (F12) for error messages
- Submissions are also logged to server console for debugging

---

## Alternative Email Services (If Needed)

If you prefer a different email service:

### Option 1: Gmail SMTP (Requires Google App Password)
- Update `/app/api/submit-lead/route.ts` to use `nodemailer`
- More complex setup but more control

### Option 2: SendGrid (Free tier: 100 emails/day)
- Sign up at sendgrid.com
- Get API key
- Update API route to use SendGrid SDK

### Option 3: Resend (Modern alternative)
- Sign up at resend.com
- Get API key
- Update API route to use Resend SDK

---

## Cost

**Web3Forms**: FREE
- Unlimited form submissions
- No monthly fees
- No credit card required
- Perfect for small businesses

---

## Support

If you have issues setting this up:

1. Check Web3Forms docs: https://docs.web3forms.com/
2. Review the API route code: `/app/api/submit-lead/route.ts`
3. Check Vercel deployment logs: https://vercel.com/fixr-ai/sfnj/logs

---

## What's Already Done

✅ API route created (`/app/api/submit-lead/route.ts`)
✅ LeadForm component updated to use API
✅ Email recipient set to `mszwed9696@gmail.com`
✅ Form includes all necessary fields
✅ Error handling and fallbacks in place

**You just need to add the Web3Forms access key to Vercel!**
