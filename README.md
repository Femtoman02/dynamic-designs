# Dynamic Designs — Corporate Website

> **"Turning Ideas into Masterpieces"**  
> A full corporate website for Dynamic Designs — a creative studio specialising in art, education, video editing, and graphic design.

---

##  Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Styling:** Tailwind CSS
- **Email:** EmailJS (no backend required)
- **Animations:** CSS + Intersection Observer API
- **Fonts:** Playfair Display + DM Sans + DM Mono
- **Deployment:** Vercel

---

## Pages

| Page | Route |
|------|-------|
| Home | `/` |
| About Us | `/about` |
| Services | `/services` |
| Projects / Portfolio | `/projects` |
| Team / Management | `/team` |
| Blog / News | `/blog` |
| Careers | `/careers` |
| Contact Us | `/contact` |
| FAQs | `/faq` |
| Testimonials | `/testimonials` |
| Privacy Policy | `/privacy` |
| Terms & Conditions | `/terms` |

---

##  Local Setup

### 1. Install dependencies

```bash
npm install
```

### 2. Configure environment variables

Copy the example env file:

```bash
cp .env.local.example .env.local
```

Then fill in your EmailJS credentials (see EmailJS Setup below).

### 3. Run the development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

---

##  EmailJS Setup (Contact Form)

The contact form uses **EmailJS** — free, no backend required.

### Steps:

1. **Create an account** at [https://www.emailjs.com/](https://www.emailjs.com/) (free)

2. **Add an Email Service:**
   - Go to Email Services → Add New Service
   - Connect Gmail (or any SMTP)
   - Note your **Service ID**

3. **Create an Email Template:**
   - Go to Email Templates → Create New Template
   - Use these template variables:
     ```
     From: {{from_name}} <{{from_email}}>
     Subject: New Project Enquiry from {{from_name}}
     
     Name: {{from_name}}
     Email: {{from_email}}
     Phone: {{phone}}
     Service: {{service}}
     Budget: {{budget}}
     
     Message:
     {{message}}
     ```
   - Note your **Template ID**

4. **Get your Public Key:**
   - Go to Account → General → Public Key
   - Note your **Public Key**

5. **Update `.env.local`:**
   ```env
   NEXT_PUBLIC_EMAILJS_SERVICE_ID=service_xxxxxxx
   NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=template_xxxxxxx
   NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=xxxxxxxxxxxxxxxxxxxx
   ```

---

## 🚢 Deployment on Vercel

### Option A — Vercel CLI

```bash
npm install -g vercel
vercel
```

Follow the prompts, then add environment variables in the Vercel dashboard.

### Option B — GitHub → Vercel

1. Pushing this repo to GitHub
2. Go to [vercel.com](https://vercel.com) → New Project → Import from GitHub
3. Select your repo
4. Add environment variables:
   - `NEXT_PUBLIC_EMAILJS_SERVICE_ID`
   - `NEXT_PUBLIC_EMAILJS_TEMPLATE_ID`
   - `NEXT_PUBLIC_EMAILJS_PUBLIC_KEY`
5. Click **Deploy**

---

## 🚢 Deployment on Netlify

1. Pushing this repo to GitHub
2. Go to [netlify.com](https://netlify.com) → Add New Site → Import from GitHub
3. Build settings:
   - Build command: `npm run build`
   - Publish directory: `.next`
4. Add environment variables in Site Settings → Environment Variables
5. Deploy

---

##  Project Structure

```
dynamic-designs/
├── app/
│   ├── about/page.tsx
│   ├── blog/page.tsx
│   ├── careers/page.tsx
│   ├── contact/page.tsx        ← EmailJS form
│   ├── faq/page.tsx
│   ├── privacy/page.tsx
│   ├── projects/page.tsx
│   ├── services/page.tsx
│   ├── team/page.tsx
│   ├── terms/page.tsx
│   ├── testimonials/page.tsx
│   ├── globals.css
│   ├── layout.tsx
│   ├── not-found.tsx
│   └── page.tsx                ← Home
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx
│   │   └── Footer.tsx
│   └── ui/
│       ├── AnimatedSection.tsx
│       └── SectionHeader.tsx
├── .env.local.example
├── next.config.js
├── tailwind.config.js
└── package.json
```

---

## Brand

| Element | Value |
|---------|-------|
| Primary Black | `#0A0A0A` |
| Off-White | `#F5F5F0` |
| Brand Green | `#1DB954` |
| Green Light | `#4ADE80` |
| Display Font | Playfair Display |
| Body Font | DM Sans |
| Mono Font | DM Mono |


