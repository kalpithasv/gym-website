# Nexus Gym Website

A modern, responsive fitness website for Nexus Gym in Tirupur, built with Next.js 14, React 18, and Tailwind CSS.

## Features

- 🎨 **Modern Design**: Clean, black-white-yellow theme with fitness imagery
- 📱 **Fully Responsive**: Optimized for all device sizes
- ⚡ **Fast Performance**: Built with Next.js 14 for optimal performance
- 🎭 **Smooth Animations**: Framer Motion animations for enhanced user experience
- 🎯 **Interactive Components**: Hover effects and smooth transitions

## Tech Stack

- **Frontend**: Next.js 14 with App Router
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **TypeScript**: Full type safety
- **Responsive Design**: Mobile-first approach

## Sections

1. **Navigation Bar**: Sticky navigation with mobile menu
2. **Hero Section**: Video background with call-to-action
3. **Membership Plans**: Four different cultpass tiers
4. **Features Section**: Transform, health, gear, and Sugar.fit
5. **Wellness Hub**: Comprehensive wellness offerings
6. **App Download**: Mobile app promotion with mockups
7. **Footer**: Complete footer with links and contact info

## Getting Started

1. **Install Dependencies**:
   ```bash
   npm install
   ```

2. **Run Development Server**:
   ```bash
   npm run dev
   ```

3. **Open in Browser**:
   Navigate to [http://localhost:3000](http://localhost:3000)

## Project Structure

```
├── app/
│   ├── globals.css          # Global styles and Tailwind imports
│   ├── layout.tsx           # Root layout component
│   └── page.tsx             # Main page component
├── components/
│   ├── Navigation.tsx       # Navigation bar
│   ├── HeroSection.tsx      # Hero section with video
│   ├── MembershipSection.tsx # Cultpass membership plans
│   ├── FeaturesSection.tsx  # Features showcase
│   ├── WellnessHub.tsx      # Wellness hub section
│   ├── AppDownload.tsx      # App download section
│   └── Footer.tsx           # Footer component
├── tailwind.config.js       # Tailwind configuration
├── next.config.js           # Next.js configuration
└── package.json             # Dependencies and scripts
```

## Customization

### Colors
The project uses custom colors defined in `tailwind.config.js`:
- `cult-yellow`: #FFD700
- `cult-dark-yellow`: #FFA500
- `cult-black`: #000000
- `cult-white`: #FFFFFF
- `cult-gray`: #1F2937
- `cult-light-gray`: #F3F4F6
- `cult-dark`: #111827

### Animations
Framer Motion is used for smooth animations. You can customize animations in each component.

## Features Implemented

- ✅ Responsive navigation with mobile menu
- ✅ Hero section with fitness image grid background
- ✅ Membership cards with hover effects
- ✅ Feature showcase with icons
- ✅ Wellness hub with real fitness product images
- ✅ App download section with phone mockup
- ✅ Comprehensive footer
- ✅ Smooth scroll animations
- ✅ Mobile-first responsive design
- ✅ Black, white, and yellow color theme
- ✅ Real fitness and gym images from Unsplash
- ✅ Nexus Gym branding and Tirupur location

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This project is for Nexus Gym in Tirupur. All rights reserved.
