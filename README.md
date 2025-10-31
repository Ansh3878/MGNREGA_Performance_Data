# Awaaz Disha Connect

A modern React-based web application built with Vite, TypeScript, and Shadcn UI components for connecting and managing district-level data.

## 🚀 Features

- Modern React (v18.3) with TypeScript support
- Fast development and build with Vite
- Beautiful UI components from Shadcn UI
- District-wise data visualization with Recharts
- Responsive design with Tailwind CSS
- Form handling with React Hook Form and Zod validation
- Advanced UI components from Radix UI
- Toast notifications with Sonner
- Audio playback capabilities
- Language toggle support
- District selection and dashboard views

## Project Info

**Live Demo**: https://lovable.dev/projects/24d652b5-347d-463c-a998-efb62a368085

## How can I edit this code?

There are several ways of editing your application.

**Use Lovable**

Simply visit the [Lovable Project](https://lovable.dev/projects/24d652b5-347d-463c-a998-efb62a368085) and start prompting.

Changes made via Lovable will be committed automatically to this repo.

**Use your preferred IDE**

If you want to work locally using your own IDE, you can clone this repo and push changes. Pushed changes will also be reflected in Lovable.

The only requirement is having Node.js & npm installed - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)

Follow these steps:

```sh
# Step 1: Clone the repository using the project's Git URL.
git clone <repository-url>
cd awaaz-disha-connect

# Step 2: Install dependencies using npm or bun
# Using npm
npm install

# Using bun
bun install

# Step 3: Start the development server
# Using npm
npm run dev

# Using bun
bun dev
```

**Edit a file directly in GitHub**

- Navigate to the desired file(s).
- Click the "Edit" button (pencil icon) at the top right of the file view.
- Make your changes and commit the changes.

**Use GitHub Codespaces**

- Navigate to the main page of your repository.
- Click on the "Code" button (green button) near the top right.
- Select the "Codespaces" tab.
- Click on "New codespace" to launch a new Codespace environment.
- Edit files directly within the Codespace and commit and push your changes once you're done.

## 🛠️ Tech Stack

### Frontend
- **Framework:** React 18.3
- **Build Tool:** Vite
- **Language:** TypeScript
- **Styling:**
  - Tailwind CSS
  - Shadcn UI Components
  - Radix UI Primitives
- **State Management:**
  - React Query (Tanstack Query)
  - React Hook Form
- **Data Visualization:** Recharts
- **Routing:** React Router DOM
- **Form Validation:** Zod

### Development Tools
- ESLint for code linting
- TypeScript for type safety
- SWC for fast compilation
- Autoprefixer for CSS compatibility
- PostCSS for CSS processing

## 📦 Project Structure

```
src/
├── components/         # Reusable UI components
│   ├── ui/            # Shadcn UI components
│   ├── AudioButton    # Audio playback component
│   ├── DataMetricCard # Data visualization card
│   ├── DistrictCard   # District information card
│   └── LanguageToggle # Language switcher
├── data/              # Data files and mock data
├── hooks/             # Custom React hooks
├── lib/               # Utility functions
└── pages/             # Application pages/routes
    ├── DistrictDashboard
    ├── DistrictSelector
    ├── Index
    └── NotFound
```

## 🔧 Configuration

### Vite Configuration
The project uses Vite with the following configuration:
- Host: `::`
- Port: 8080
- React SWC plugin for fast refresh
- Path aliases (@/ points to src/)

### TypeScript Configuration
- Target: ES2020
- React JSX support
- Path aliases configured
- Strict type checking

### Environment Variables

Create a `.env` file in the root directory:

```env
VITE_API_URL=your_api_url_here
```

## How can I deploy this project?

Simply open [Lovable](https://lovable.dev/projects/24d652b5-347d-463c-a998-efb62a368085) and click on Share -> Publish.

## Can I connect a custom domain to my Lovable project?

Yes, you can!

To connect a domain, navigate to Project > Settings > Domains and click Connect Domain.

Read more here: [Setting up a custom domain](https://docs.lovable.dev/features/custom-domain#custom-domain)
