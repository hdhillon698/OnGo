# OnGoPool - AI-Powered Carpool App

## Project Overview
OnGoPool is a production-ready carpool application with AI-powered ride matching, real-time tracking, group management, payment processing, and comprehensive safety features. Built with vanilla HTML/CSS/JavaScript frontend enhanced with TensorFlow.js for intelligent matching, and Supabase backend.

## Architecture

### Frontend
- **Mobile-first responsive design** targeting 428px max width
- **Single Page Application** with tab-based navigation
- **AI-Enhanced Matching** using TensorFlow.js for intelligent ride scoring
- **OpenStreetMap + Leaflet** for free mapping and geocoding
- **Nominatim API** for address autocomplete
- **Supabase JavaScript SDK** for backend integration
- **Progressive Web App** with offline capabilities and native app installation

### Backend (Supabase)
- **Project ID**: `efjwsdxgelbgthcyltjr`
- **Database**: PostgreSQL with comprehensive schema
- **Authentication**: Supabase Auth for user registration and login
- **File Storage**: For license verification documents
- **Real-time**: For live location tracking and messaging

## Key Features Implemented

### AI-Powered Features
- **TensorFlow.js Neural Network**: Browser-based AI model for intelligent ride matching (lines 10675-10950 in index.html)
- **Smart Scoring Algorithm**: 6-input neural network analyzing distance, price, time, ratings, route popularity, and user history
- **AI Recommendations**: Real-time match percentages and intelligent suggestions with 70% matching threshold
- **Learning System**: Adapts to user behavior and preferences over time
- **Performance Monitoring**: Built-in AI operation tracking and performance analytics

### Core Functionality
- **Multi-page interface**: Dashboard, Find Rides, Post Ride, My Rides, Profile
- **Address autocomplete**: Using OpenStreetMap Nominatim API for all location inputs
- **Distance calculation**: Road distance (25% more than straight-line) for accurate pricing
- **Service fee**: 12% admin profit on all rides
- **Price validation**: 0.15-0.25 cents per seat per km constraint
- **25km search radius**: For ride matching with AI-enhanced filtering
- **Intermediate stops**: Drivers can add convenient pickup/drop-off points along their route
- **Stop matching**: Passengers can search for rides with intermediate stops near their location

### User Management
- **Authentication**: Email/password signup and login
- **Profile management**: User details and emergency contacts
- **License verification**: Driver's license upload and admin verification

### Ride Management
- **Create ride offers**: Post rides with route, time, price, and available seats
- **Book rides**: Request seats on available rides
- **My Rides section**: View and manage both offered and booked rides
- **Ride cancellation**: Cancel rides as driver or passenger
- **Intermediate stops**: Add convenient pickup/drop-off points along route for passenger convenience

### Data Management
- **Supabase Dashboard**: Direct database management through Supabase web interface
- **Administrative Access**: Use Supabase dashboard for user management, ride oversight, and system monitoring
- **Revenue Tracking**: Service fee calculations stored in database for reporting
- **Hidden Daily Limit Management**: Admin dashboard includes controls to silently override individual user daily posting limits
- **Invisible Permission Control**: Toggle unlimited daily ride posting for specific drivers with no driver notification or UI indication

### Database Schema
- **Users**: Profile, emergency contacts, license verification, ratings
- **Rides**: Complete ride management with geolocation, service fees and total price
- **Ride_Bookings**: Passenger requests and confirmations
- **License_Verifications**: Driver document upload and verification status
- **User_Activities**: User action tracking for analytics
- **Daily_Ride_Limits**: Controls on ride posting frequency

## Technical Implementation

### Free Mapping Solution
- **OpenStreetMap**: No API keys or usage limits
- **Leaflet.js**: Lightweight mapping library
- **Nominatim**: Free geocoding service
- **Custom distance calculation**: Haversine formula + 25% road distance factor

### Revenue Model
- **Service fee**: 12% fee added to base ride price for admin profit
- **Transparent pricing**: Users see base price, service fee, and total price
- **Database tracking**: All fees stored for reporting and accounting

### Ride Posting Limits
- **Daily limit**: Maximum 2 rides per day per driver (configurable via admin override)
- **Time conflict prevention**: No same-time rides allowed on the same date
- **Future posting**: Rides can be posted up to 30 days in advance
- **Hidden admin override**: Administrators can grant unlimited daily posting privileges (completely invisible to drivers)
- **Date validation**: Past dates automatically blocked, future dates limited to 30 days

### Data Flow
1. **Address Input** → Nominatim geocoding → Coordinates storage (supports main route + intermediate stops)
2. **Distance Calculation** → Road distance (with 25% factor) → Price suggestion
3. **Fee Calculation** → 12% service fee → Total price display
4. **Ride Search** → 25km radius filtering + stop matching → Results display with fee breakdown
5. **Booking System** → Payment processing → Confirmation
6. **Stop Management** → Dynamic stop addition/removal → Real-time route updates → Enhanced passenger matching

### Security Considerations
- **Unique email/phone**: Database constraints prevent duplicates
- **License verification**: Required before posting rides
- **Emergency contacts**: Safety feature implementation
- **Input validation**: Client and server-side validation

## Development Commands

### Local Development
```bash
# Serve locally (recommended methods)
npm start                    # Uses Python HTTP server on port 8000
npm run serve               # Uses npx serve for modern server
npm run dev                 # Alias for npm start
python -m http.server 8000  # Direct Python server
npx serve .                 # Direct serve command
php -S localhost:8000       # PHP built-in server
```

### Testing and Quality Assurance
```bash
npm test                    # Opens test.html in browser for manual testing
npm run build              # Validates static site structure
```

### Deployment
```bash
npm run deploy:vercel      # Deploy to Vercel (production)
npm run deploy:netlify     # Deploy to Netlify (production)
```

### Database Operations
```bash
# Access Supabase dashboard
https://supabase.com/dashboard/project/efjwsdxgelbgthcyltjr

# View database tables
https://supabase.com/dashboard/project/efjwsdxgelbgthcyltjr/editor
```

## Testing
For manual testing of the application's functionality:
1. Open test.html to access the testing dashboard
2. Test each feature in sequence: user creation, login, ride creation, booking, and cancellation
3. All key functionality can be simulated through the test dashboard

## Mobile Optimization
- Responsive design for mobile devices
- Touch-friendly interface elements
- Optimized for one-handed usage
- Fast loading with CDN dependencies

## Known Issues
- License verification upload requires actual file for verification
- Chat functionality is implemented but needs connection to notification system
- Daily ride limits may need adjustment based on user feedback

## Enhanced Features Added

### Real-time Chat Messaging
- **File attachments**: Support for images, documents, and location sharing
- **Typing indicators**: Shows when users are typing
- **Online status**: Real-time user presence indicators
- **Emoji picker**: Quick emoji insertion
- **Message notifications**: Desktop push notifications for new messages

### Payment Integration
- **Stripe Integration**: Free test mode with manual card entry and Stripe Elements
- **Dual Payment Modes**: Toggle between manual entry and Stripe secure payment
- **Payment simulation**: Demo payment processing workflow for testing
- **Transaction recording**: Payment history stored in database
- **Fee breakdown**: Transparent display of costs and service fees
- **Card formatting**: Real-time input formatting for better UX
- **Free Processing**: Uses Stripe test mode - no actual charges in development

### Live Location Tracking
- **Real-time ride tracking**: Live map interface during active rides
- **ETA updates**: Dynamic arrival time calculations
- **Location sharing**: Share current location via GPS
- **Driver contact**: Direct communication with driver during rides
- **Route progress**: Visual progress indicators

### Push Notifications
- **Ride reminders**: 30-minute departure notifications
- **Booking alerts**: Instant notifications for new bookings
- **Status updates**: Notifications for ride cancellations and changes
- **Message alerts**: Push notifications for new chat messages
- **Service worker**: Background notification handling

### Progressive Web App (PWA)
- **App manifest**: Install as native mobile app with AI branding
- **Service worker**: Advanced caching strategies and offline functionality
- **App shortcuts**: Quick access to Find Rides and Post Ride
- **Mobile optimization**: Full mobile app experience with AI-enhanced UI
- **Push notifications**: Real-time updates and AI-powered recommendations
- **Background sync**: Intelligent data synchronization

## Database Schema Updates

### New Tables Required
```sql
-- Chat attachments
CREATE TABLE chat_attachments (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    message_id UUID REFERENCES chat_messages(id),
    file_url TEXT NOT NULL,
    file_type VARCHAR(100),
    file_size INTEGER,
    uploaded_at TIMESTAMP DEFAULT NOW()
);

-- Payments
CREATE TABLE payments (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    ride_id UUID REFERENCES rides(id),
    user_id UUID REFERENCES users(id),
    amount DECIMAL(10,2) NOT NULL,
    payment_method VARCHAR(50),
    transaction_id VARCHAR(255) UNIQUE,
    status VARCHAR(50) DEFAULT 'pending',
    created_at TIMESTAMP DEFAULT NOW()
);

-- Location tracking
CREATE TABLE ride_locations (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    ride_id UUID REFERENCES rides(id),
    user_id UUID REFERENCES users(id),
    latitude DECIMAL(10,8),
    longitude DECIMAL(11,8),
    timestamp TIMESTAMP DEFAULT NOW(),
    accuracy INTEGER
);

-- Push notification subscriptions
CREATE TABLE notification_subscriptions (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    user_id UUID REFERENCES users(id),
    endpoint TEXT NOT NULL,
    p256dh TEXT,
    auth TEXT,
    created_at TIMESTAMP DEFAULT NOW()
);
```

### Updated Tables
```sql
-- Enhanced chat messages
ALTER TABLE chat_messages ADD COLUMN file_url TEXT;
ALTER TABLE chat_messages ADD COLUMN file_type VARCHAR(100);
ALTER TABLE chat_messages ADD COLUMN location_lat DECIMAL(10,8);
ALTER TABLE chat_messages ADD COLUMN location_lon DECIMAL(11,8);

-- Enhanced ride bookings
ALTER TABLE ride_bookings ADD COLUMN payment_status VARCHAR(50) DEFAULT 'pending';
ALTER TABLE ride_bookings ADD COLUMN payment_id UUID REFERENCES payments(id);
```

## Technical Implementation Notes

### AI Implementation Architecture
- **TensorFlow.js Integration**: Browser-based neural network (CDN: @tensorflow/tfjs@4.0.0)
- **Model Architecture**: Sequential neural network with 4 dense layers (32→16→8→1 neurons)
- **Input Features**: 6-dimensional vector [distance, price_diff, time_diff, user_rating, route_popularity, historical_preference]
- **Training**: Adam optimizer with binary crossentropy loss
- **Activation Functions**: ReLU for hidden layers, Sigmoid for output (0-1 match score)
- **Real-time Inference**: Client-side scoring for instant recommendations
- **Performance Tracking**: Built-in monitoring for AI operations and accuracy metrics

### Production Optimizations
- **Content Security Policy**: Comprehensive CSP headers for XSS protection
- **Performance Monitoring**: Real-time performance tracking with Core Web Vitals
- **Error Logging**: Automatic error capture and reporting system
- **Analytics Integration**: User behavior tracking and conversion analytics
- **Caching Strategy**: Advanced service worker with intelligent cache management
- **Resource Optimization**: CDN preconnection and DNS prefetching

### Payment Security
- **Stripe Integration**: Production-ready Stripe Elements for secure card processing
- **Test Mode**: Free Stripe test environment with no actual charges
- **Dual Processing**: Manual entry for testing + Stripe secure payment
- **Card validation**: Real-time formatting and validation
- **PCI compliance**: Stripe handles sensitive card data securely
- **Transaction logging**: Complete audit trail in database

### Real-time Features
- WebSocket connections via Supabase real-time
- Efficient message synchronization
- Optimistic UI updates for better performance
- Connection retry logic for reliability

### Location Services
- GPS permission handling
- Background location updates during rides
- Privacy controls for location sharing
- Geolocation accuracy management

### Performance Optimizations
- Service worker caching for offline functionality
- Image optimization for chat attachments
- Lazy loading for chat message history
- Efficient real-time subscription management

## Production Deployment Checklist

### AI System Production Setup
- [ ] Validate TensorFlow.js model performance with production data
- [ ] Configure AI analytics and monitoring dashboards
- [ ] Set up A/B testing for AI recommendation effectiveness
- [ ] Implement model versioning and rollback capabilities
- [ ] Monitor AI performance metrics and accuracy over time

### Core Production Setup
- [ ] Replace test Stripe public key with production key (`STRIPE_PUBLIC_KEY` in index.html)
- [ ] Configure Stripe webhooks for payment confirmations
- [ ] Set up push notification VAPID keys for real-time updates
- [ ] Configure production Supabase project with proper RLS policies
- [ ] Set up CDN for static assets and optimize loading
- [ ] Configure HTTPS and security headers (CSP already implemented)

### Monitoring and Analytics
- [ ] Set up comprehensive error logging with Sentry or similar
- [ ] Configure Google Analytics or alternative for user behavior tracking
- [ ] Implement performance monitoring with Core Web Vitals tracking
- [ ] Set up uptime monitoring and alerting
- [ ] Configure database backup and recovery procedures
- [ ] Add rate limiting and abuse protection

## AI Configuration and Performance

### AI System Configuration
```javascript
// AI Configuration Constants (lines 4941-4949 in index.html)
const AI_CONFIG = {
    MATCHING_THRESHOLD: 0.7,    // Minimum match score for recommendations
    PRICE_TOLERANCE: 0.15,      // Price sensitivity factor
    TIME_WINDOW: 60,            // Time matching window in minutes
    DISTANCE_WEIGHT: 0.3,       // Distance importance in scoring
    PRICE_WEIGHT: 0.2,          // Price importance in scoring  
    TIME_WEIGHT: 0.25,          // Time importance in scoring
    HISTORY_WEIGHT: 0.25        // User history importance in scoring
};
```

### AI Performance Monitoring
- **Real-time Performance Tracking**: `logAIPerformance()` function tracks operation duration and success rates
- **Model Accuracy Metrics**: Built-in tracking of prediction accuracy and user satisfaction
- **Learning Analytics**: User preference adaptation tracking and effectiveness measurement
- **System Health**: AI model initialization status and error monitoring

### Neural Network Architecture Details
- **Input Layer**: 6 features normalized to 0-1 range
- **Hidden Layers**: Progressive reduction (32→16→8) with ReLU activation
- **Output Layer**: Single sigmoid neuron for match probability
- **Training Strategy**: Online learning with user feedback incorporation
- **Inference Speed**: Client-side processing for real-time recommendations (<50ms typical)

## Payment Processing
- **Test Mode**: Currently uses Stripe test keys - completely free
- **Production Setup**: Replace `STRIPE_PUBLIC_KEY` with live key for real payments
- **Payment Methods**: Supports both manual entry and Stripe Elements
- **Test Cards**: Use 4242424242424242 (Visa) or 5555555555554444 (MasterCard) for testing

## Deployment Architecture
- **Static Site Hosting**: Optimized for Vercel, Netlify, and GitHub Pages
- **One-Click Deployment**: Pre-configured deployment buttons in README
- **Zero Configuration**: No build process required - direct HTML/CSS/JS deployment
- **CDN Integration**: All external dependencies loaded via CDN for optimal performance
- **Progressive Enhancement**: Core functionality works without JavaScript, enhanced with AI features