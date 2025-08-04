# Top 100 Aircraft - Aviation Excellence

A modern, responsive website showcasing the world's most iconic aircraft with detailed specifications, interactive features, and fascinating aviation history.

## ✈️ Features

### 🏠 Homepage
- **Aviation-themed hero section** with bold title and intro
- **Dynamic search bar** for finding aircraft quickly
- **Category filters** (commercial, military, private jets, helicopters)
- **Featured aircraft showcase** with smooth animations
- **Responsive design** optimized for all devices

### 🛩️ Aircraft Database
- **Comprehensive aircraft listings** with detailed information
- **Advanced search functionality** by name, manufacturer, category, or country
- **Category filtering** for easy navigation
- **Responsive grid layout** with hover effects
- **Quick stats preview** on each aircraft card

### 📊 Aircraft Detail Pages
- **High-quality images** and detailed specifications
- **Comprehensive history** and achievements sections
- **Fun facts** and trivia for each aircraft
- **Technical specifications** including performance, dimensions, and power
- **Variants and operators** information
- **Smooth animations** and modern UI design

### 🔄 Compare Tool
- **Side-by-side comparison** of two aircraft
- **Interactive selection** with search functionality
- **Performance metrics** comparison with visual indicators
- **Detailed specifications** comparison
- **Winner highlighting** for better analysis

### 🌍 Interactive World Map
- **Global aircraft origins** visualization
- **Interactive markers** with aircraft information
- **Category filtering** on the map
- **Custom markers** with type-based colors
- **Detailed popups** with aircraft specifications
- **Statistics dashboard** showing global distribution

### 💡 Fun Facts Section
- **Categorized aviation trivia** (speed, size, history, technology, etc.)
- **Interactive filtering** by category
- **Amazing statistics** about aviation
- **Educational content** about aircraft and aviation history
- **Responsive design** with smooth animations

## 🎨 Design Features

- **Dark theme** with blue, red, and white accents
- **Modern UI/UX** with smooth animations using Framer Motion
- **Responsive design** optimized for mobile, tablet, and desktop
- **Aviation-themed typography** using Orbitron font
- **Custom animations** and hover effects
- **Professional color scheme** with gradient text effects

## 🚀 Technology Stack

- **React 18** with TypeScript
- **Vite** for fast development and building
- **Tailwind CSS** for styling
- **Framer Motion** for animations
- **React Router** for navigation
- **React Leaflet** for interactive maps
- **Lucide React** for icons

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd top-100-aircraft
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:3000`

## 🛠️ Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint
- `npm run lint:fix` - Fix ESLint errors

## 📱 Responsive Design

The website is fully responsive and optimized for:
- **Mobile devices** (320px and up)
- **Tablets** (768px and up)
- **Desktop** (1024px and up)
- **Large screens** (1280px and up)

## 🎯 Key Features

### Search & Filter
- Real-time search functionality
- Category-based filtering
- URL-based state management
- Responsive search interface

### Interactive Elements
- Hover effects on cards and buttons
- Smooth page transitions
- Loading animations
- Interactive map markers

### Performance
- Fast loading times
- Optimized images
- Efficient state management
- Lazy loading where appropriate

## 🌟 Aircraft Categories

1. **Commercial Aircraft**
   - Wide-body airliners
   - Narrow-body airliners
   - Regional jets
   - Cargo aircraft

2. **Military Aircraft**
   - Fighter jets
   - Bombers
   - Transport aircraft
   - Reconnaissance aircraft

3. **Private Jets**
   - Business jets
   - Executive aircraft
   - VIP transport
   - Luxury aircraft

4. **Helicopters**
   - Attack helicopters
   - Transport helicopters
   - Utility helicopters
   - Civil helicopters

## 📊 Data Structure

Each aircraft includes:
- Basic information (name, manufacturer, type, year)
- Detailed specifications (speed, range, dimensions, weight)
- Historical information and achievements
- Fun facts and trivia
- Geographic coordinates for mapping
- Variants and operators

## 🎨 Customization

### Colors
The theme uses a custom color palette:
- **Primary**: Blue shades (#3b82f6)
- **Accent**: Red shades (#ef4444)
- **Dark**: Dark gray shades (#0f172a)
- **Gradients**: Blue to red gradient text effects

### Typography
- **Aviation font**: Orbitron for headings
- **Body font**: Inter for content
- **Responsive font sizes** for all screen sizes

## 🔧 Development

### Project Structure
```
src/
├── components/     # Reusable components
├── pages/         # Page components
├── data/          # Aircraft data and utilities
├── App.tsx        # Main app component
├── main.tsx       # Entry point
└── index.css      # Global styles
```

### Adding New Aircraft
1. Add aircraft data to `src/data/aircraft.ts`
2. Include all required fields (specs, history, achievements, etc.)
3. Add appropriate coordinates for map display
4. Test the new aircraft in all views


---

**Built with ❤️ for aviation enthusiasts worldwide**
