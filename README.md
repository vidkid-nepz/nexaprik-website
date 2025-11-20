# Nepal Adventure Trekking Website

A production-ready, modern adventure tourism website built with Next.js, TypeScript, and Tailwind CSS featuring a complete admin panel for content management.

## 🎯 Features

### Frontend
- ✅ **Responsive Design** - Mobile-first approach with breakpoints for all devices
- ✅ **Modern UI/UX** - Premium design with smooth animations and micro-interactions
- ✅ **SEO Optimized** - Meta tags, Open Graph, structured data
- ✅ **Performance** - Image optimization, lazy loading, code splitting

### Pages
- **Homepage** - Hero slider, featured treks, testimonials, trust bar
- **Trek Listing** - Grid view of all treks with filtering
- **Trek Detail** - Comprehensive trek information, itinerary, booking
- **About Us** - Company story, team, mission & values
- **Contact** - Contact form, office info, Google Maps
- **Blog** - Travel guides and tips
- **Testimonials** - Customer reviews archive

### Admin Panel
- **Dashboard** - Statistics, recent bookings, quick actions
- **Trek Management** - Add, edit, manage trekking packages
- **Bookings** - View and manage customer inquiries
- **Testimonials** - Approve and manage reviews
- **Blog** - Create and publish blog posts
- **Media Library** - Image management
- **Settings** - Site configuration

### Tech Stack
- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: Custom component library
- **Icons**: Lucide React
- **Fonts**: Inter, Poppins (Google Fonts)

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. **Install dependencies**
   ```bash
   npm install
   ```

2. **Run development server**
   ```bash
   npm run dev
   ```

3. **Open browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

### Build for Production

```bash
npm run build
npm start
```

## 📁 Project Structure

```
nexaprik/
├── app/                    # Next.js app router pages
│   ├── page.tsx           # Homepage
│   ├── treks/             # Trek pages
│   ├── about/             # About page
│   ├── contact/           # Contact page
│   ├── blog/              # Blog pages
│   ├── testimonials/      # Testimonials page
│   ├── admin/             # Admin panel
│   ├── layout.tsx         # Root layout
│   └── globals.css        # Global styles
├── components/            # React components
│   ├── ui/               # Reusable UI components
│   └── layout/           # Layout components
├── lib/                  # Utilities and types
│   ├── types/           # TypeScript interfaces
│   └── utils.ts         # Helper functions
├── data/                # JSON data files
│   ├── treks.json
│   ├── testimonials.json
│   └── blogs.json
├── public/              # Static assets
│   └── images/         # Image files
└── tailwind.config.ts   # Tailwind configuration
```

## 🎨 Design System

### Colors
- **Primary** (Mountain Blue): #1e3a8a, #2563eb
- **Secondary** (Sunrise Orange): #f59e0b, #ea580c  
- **Accent** (Fresh Green): #10b981

### Typography
- **Headings**: Poppins (Bold, 600-800)
- **Body**: Inter (Regular, 400-500)

### Components
All components support:
- Multiple variants
- Size options
- Hover states
- Loading states
- Error states

## 📊 Data Management

Currently using JSON files for data storage (`/data`):
- `treks.json` - Trek packages
- `testimonials.json` - Customer reviews
- `blogs.json` - Blog posts

### Migrating to Database

To integrate with a real database:
1. Set up your database (MongoDB, PostgreSQL, etc.)
2. Create API routes in `/app/api`
3. Update data fetching in pages
4. Implement authentication for admin panel

## 🔧 Configuration

### Environment Variables

Create `.env.local`:

```env
# Site Configuration
NEXT_PUBLIC_SITE_URL=https://yourdomain.com
NEXT_PUBLIC_SITE_NAME=Nepal Adventure Trekking

# Email (for contact forms)
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your-email@gmail.com
SMTP_PASSWORD=your-app-password

# Google Analytics
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
```

### Email Integration

Recommended services:
- **SendGrid** - Reliable email delivery
- **Resend** - Modern developer-first email
- **Nodemailer** - Self-hosted SMTP

### Analytics

Add to `app/layout.tsx`:
```typescript
// Google Analytics
{process.env.NEXT_PUBLIC_GA_ID && (
  <Script
    src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}
    strategy="afterInteractive"
  />
)}
```

## 🔐 Admin Authentication

Current implementation uses basic structure. For production:

1. **Implement NextAuth.js**
   ```bash
   npm install next-auth
   ```

2. **Add authentication routes**
   - `/app/api/auth/[...nextauth]/route.ts`
   - Use providers (Google, GitHub,credentials)

3. **Protect admin routes**
   - Add middleware to check authentication
   - Redirect unauthorized users

## 📱 Deployment

### Vercel (Recommended)

1. **Push to GitHub**
2. **Import to Vercel**
   - Connect repository
   - Configure environment variables
   - Deploy

### Other Platforms
- **Netlify** - Similar to Vercel
- **AWS Amplify** - Amazon's hosting
- **DigitalOcean** - VPS deployment

## 🎯 Next Steps

### Essential Integrations
1. **Email Service** - Configure contact form submissions
2. **Payment Gateway** - Stripe/PayPal for bookings
3. **Database** - MongoDB/PostgresQL for scalability
4. **Authentication** - Secure admin panel
5. **Live Chat** - Tawk.to or Intercom
6. **WhatsApp** - Business API integration

### Enhancements
- [ ] Add multi-language support (i18n)
- [ ] Implement full-text search
- [ ] Add user accounts for bookings
- [ ] Create mobile app (React Native)
- [ ] Add photo galleries with lightbox
- [ ] Implement booking calendar with availability
- [ ] Add weather information API
- [ ] Create downloadable trek PDFs

## 📝 Content Management

### Adding a New Trek

1. **Via Admin Panel** (once auth is implemented)
   - Navigate to `/admin/treks/new`
   - Fill in trek details
   - Upload images
   - Publish

2. **Manually** (current)
   - Edit `data/treks.json`
   - Add trek object with all fields
   - Add images to `/public/images`

### Adding Testimonials

Edit `data/testimonials.json`:
```json
{
  "id": "unique-id",
  "customerName": "Customer Name",
  "country": "Country",
  "trekName": "Trek Name",
  "rating": 5,
  "reviewText": "Review text...",
  "status": "approved"
}
```

## 🐛 Troubleshooting

### Build Errors
- Clear `.next` folder: `rm -rf .next`
- Reinstall dependencies: `rm -rf node_modules && npm install`

### Image Issues
- Ensure images are in `/public/images`
- Check file paths are correct
- Verify image formats (jpg, png, webp)

### Styling Issues
- Check Tailwind config
- Verify global CSS imports
- Clear browser cache

## 📄 License

This project is proprietary software for Nepal Adventure Trekking.

## 🤝 Support

For technical support:
- Email: dev@nepaladventure.com
- Documentation: See `/docs` folder

## 👥 Credits

Developed by: [Your Name/Company]
Design inspiration: Modern adventure tourism websites
Images: AI-generated placeholders (replace with real photos)
