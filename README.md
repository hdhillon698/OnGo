# OnGoPool - AI-Powered Carpool App 🚗🧠

> Share rides with intelligent matching, save money, and reduce your carbon footprint

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/hdhillon698/ongopool-c579d)
[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/hdhillon698/ongopool-c579d)

> **Note**: If you encounter "name already used" error on Vercel, use a unique project name like `ongopool-prod-2025` or `ongopool-final`

## 🌟 Features

### 🧠 AI-Powered Matching
- **TensorFlow.js Integration** - Browser-based AI for intelligent ride matching
- **Smart Scoring Algorithm** - AI analyzes distance, price, time, and user preferences
- **Real-time Recommendations** - Instant intelligent suggestions with match percentages
- **Learning System** - Adapts to user behavior over time

### 🚗 Core Functionality
- **Complete Carpool System** - Post rides, find rides, book seats
- **Real-time Chat** - Communicate with drivers and passengers
- **Payment Integration** - Secure Stripe payment processing
- **Live Location Tracking** - GPS tracking during rides
- **Push Notifications** - Stay updated on ride status

### 📱 Progressive Web App
- **Mobile-First Design** - Optimized for smartphones
- **Offline Support** - Works without internet connection
- **Install as App** - Add to home screen like native app
- **Fast Performance** - Advanced caching and optimization

## 🚀 Quick Start

### Local Development
```bash
# Clone the repository
git clone https://github.com/hdhillon698/ongopool.git
cd ongopool

# Serve locally (choose one)
python -m http.server 8000
# OR
npx serve .
# OR
php -S localhost:8000

# Open in browser
open http://localhost:8000
```

### Production Deployment

#### Vercel (Recommended)
1. Fork this repository
2. Connect to Vercel
3. Deploy automatically with zero configuration

#### Netlify
1. Fork this repository  
2. Connect to Netlify
3. Deploy with automatic builds

#### GitHub Pages
1. Fork this repository
2. Enable GitHub Pages in repository settings
3. Choose source as main branch

## ⚙️ Configuration

### Environment Setup
1. **Supabase** - Database is pre-configured (Project ID: `efjwsdxgelbgthcyltjr`)
2. **Stripe** - Currently in test mode (replace keys for production)
3. **Maps** - Uses free OpenStreetMap (no API keys needed)

### Production Configuration
```javascript
// Replace in index.html for live payments
const STRIPE_PUBLIC_KEY = 'pk_live_your_live_key_here';

// Configure push notifications (optional)
const VAPID_PUBLIC_KEY = 'your_vapid_public_key';
```

## 🏗️ Architecture

### Frontend Stack
- **HTML/CSS/JavaScript** - Vanilla implementation for maximum compatibility
- **TensorFlow.js** - AI-powered ride matching
- **Leaflet.js** - Interactive maps
- **Service Worker** - PWA functionality and caching

### Backend Services
- **Supabase** - Database, authentication, real-time features
- **Stripe** - Payment processing
- **OpenStreetMap** - Geocoding and mapping (free)

### Key Components
- **AI Matching Engine** (`index.html` lines 4900-5200) - TensorFlow.js implementation
- **Ride Management** (`index.html` lines 6000-7000) - Core booking logic  
- **Real-time Features** (`index.html` lines 8000-9000) - Chat and location tracking
- **Payment System** (`index.html` lines 7500-8000) - Stripe integration
- **Service Worker** (`sw.js`) - PWA and caching

## 📊 Database Schema

### Core Tables
- **users** - User profiles and verification
- **rides** - Ride offers with pricing and routes
- **ride_bookings** - Passenger booking requests
- **chat_messages** - Real-time messaging
- **payments** - Transaction records

### Admin Features
- **Daily ride limits** - Configurable posting restrictions
- **License verification** - Driver document upload
- **Revenue tracking** - Service fee calculations (12%)

## 🔒 Security

### Production Security
- **Content Security Policy** - XSS protection
- **HTTPS Enforcement** - Secure data transmission  
- **Input Sanitization** - SQL injection prevention
- **Rate Limiting** - API abuse protection

### Payment Security
- **Stripe Elements** - PCI-compliant card handling
- **No sensitive data storage** - Tokens only
- **Test mode by default** - Safe for development

## 📱 Mobile Features

### PWA Capabilities
- **Offline functionality** - Works without internet
- **Push notifications** - Ride reminders and updates
- **Add to home screen** - Native app experience
- **Background sync** - Data sync when online

### Mobile Optimization
- **Touch-friendly interface** - Optimized for mobile interaction
- **Responsive design** - Works on all screen sizes
- **Fast loading** - Optimized performance
- **GPS integration** - Location-based features

## 🧪 Testing

### Manual Testing
```bash
# Open test dashboard
open test.html

# Test sequence
1. User registration/login
2. Ride creation
3. Ride booking
4. Payment processing
5. Chat functionality
```

### Admin Testing
```bash
# Access admin dashboard
open index.html
# Login with: admin@ongopool.com / admin123
```

## 🚀 Deployment Checklist

### Pre-Production
- [ ] Replace Stripe test keys with live keys
- [ ] Configure custom domain
- [ ] Set up error monitoring (Sentry recommended)
- [ ] Configure analytics (Google Analytics)
- [ ] Set up backup strategy

### Go-Live
- [ ] Test all payment flows
- [ ] Verify mobile responsiveness
- [ ] Test offline functionality
- [ ] Confirm push notifications work
- [ ] Performance optimization check

## 📈 Analytics & Monitoring

### Built-in Analytics
- **User action tracking** - Interaction analytics
- **Performance monitoring** - Load time tracking
- **Error logging** - Automatic error capture
- **AI performance** - Matching algorithm metrics

### Production Monitoring
- **Error tracking** - Real-time error alerts
- **Performance metrics** - Core web vitals
- **User analytics** - Behavior insights
- **Revenue tracking** - Payment analytics

## 🤝 Contributing

1. Fork the repository
2. Create feature branch (`git checkout -b feature/amazing-feature`)
3. Commit changes (`git commit -m 'Add amazing feature'`)
4. Push to branch (`git push origin feature/amazing-feature`)
5. Open Pull Request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🆘 Support

- **Documentation** - See `YOUWARE.md` for technical details
- **Issues** - Report bugs via GitHub issues
- **Discussions** - Feature requests and general questions

---

**Built with ❤️ using AI-powered development**
