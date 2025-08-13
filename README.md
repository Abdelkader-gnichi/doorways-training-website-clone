# Doorways Training Website Clone

A modern, responsive clone of the [Doorways Training website](https://www.doorways-training.org/) built with Next.js, TypeScript, and Tailwind CSS. This project recreates the original website with enhanced features including an integrated AI chatbot powered by n8n.

## 🌟 Features

- **Responsive Design**: Fully responsive layout that works on all devices
- **Modern Tech Stack**: Built with Next.js 15, TypeScript, and Tailwind CSS
- **Component Library**: Uses Radix UI components with shadcn/ui styling
- **AI Chatbot Integration**: Custom-styled n8n chatbot for user assistance
- **Static Export**: Configured for static site generation
- **Performance Optimized**: Includes image optimization and modern web practices

## 🚀 Getting Started

### Prerequisites

- [Bun](https://bun.sh/) (recommended) or Node.js 18+
- Git

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd doorways-training-clone
```

2. Install dependencies:
```bash
bun install
```

3. Run the development server:
```bash
bun run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the website.

## 🛠️ Available Scripts

- `bun run dev` - Start the development server with Turbopack
- `bun run build` - Build the project for production
- `bun run start` - Start the production server
- `bun run lint` - Run TypeScript type checking and ESLint
- `bun run format` - Format code with Biome

## 📁 Project Structure

```
src/
├── app/
│   ├── globals.css          # Global styles
│   ├── layout.tsx           # Root layout component
│   └── page.tsx             # Main homepage component
├── components/
│   ├── ui/                  # Reusable UI components (shadcn/ui)
│   └── ChatBot.tsx          # n8n chatbot integration
└── lib/
    └── utils.ts             # Utility functions
```

## 🤖 Chatbot Integration

The website includes an AI-powered chatbot built with n8n that can help users learn about Doorways' training programs. The chatbot features:

- Custom styling to match the website's purple theme
- Responsive design that works on all devices
- Integration with n8n webhook for AI responses
- Contextual help about entrepreneurship training programs

### Chatbot Configuration

The chatbot is configured in `src/components/ChatBot.tsx` with custom styling that matches the Doorways brand:

- **Primary Color**: Purple (#9333ea)
- **Custom Styling**: Gradient backgrounds, rounded borders
- **Positioning**: Fixed bottom-right corner
- **Responsive**: Adapts to different screen sizes

## 🎨 Design System

The project uses a cohesive design system based on the original Doorways website:

- **Primary Color**: Purple (#9333ea)
- **Typography**: Clean, modern font stack
- **Components**: Consistent button styles, cards, and layouts
- **Spacing**: Systematic spacing using Tailwind CSS

## 📦 Key Dependencies

- **Next.js 15**: React framework with App Router
- **TypeScript**: Type-safe JavaScript
- **Tailwind CSS**: Utility-first CSS framework
- **Radix UI**: Headless UI components
- **Lucide React**: Modern icon library
- **Biome**: Fast linter and formatter

## 🌐 Deployment

The project is configured for static export and can be deployed to any static hosting service:

```bash
bun run build
```

The built files will be in the `out` directory, ready for deployment to:
- Vercel
- Netlify
- GitHub Pages
- Any static hosting provider

## 📧 Contact & Original Website

This is a clone of the original Doorways Training website:
- **Original**: [https://www.doorways-training.org/](https://www.doorways-training.org/)
- **Organization**: Doorways gGmbH
- **Focus**: Entrepreneurship education and training programs

## 🔧 Technical Notes

- Uses `output: 'export'` in `next.config.js` for static generation
- Images are unoptimized for static deployment compatibility
- Includes proper TypeScript configuration
- ESLint and Biome configured for code quality

## 📄 License

This project is for educational purposes. The original Doorways website and content belong to Doorways gGmbH.

---

Built with ❤️ using Next.js and modern web technologies.
