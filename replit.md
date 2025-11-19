# DAIX - Intelligent Automation Platform

## Overview

DAIX is a modern web application focused on AI-powered automation solutions for businesses. The platform provides intelligent automation services including conversational AI, data analysis, process automation, and custom intelligent systems. Built with a tech-forward design philosophy inspired by platforms like Linear, Vercel, and OpenAI, it emphasizes clean aesthetics with dynamic visual elements.

The application is a full-stack TypeScript solution using React for the frontend and Express for the backend, with a focus on showcasing automation capabilities through an elegant, responsive landing page experience.

## Recent Changes (November 19, 2025)

### Brand Identity Update
- Implemented new DAIX color palette:
  - **DAIX Core Blue** (#1A47FF) - Primary brand color
  - **DAIX Quantum Purple** (#9F3BFF) - Secondary accent for the "X" brand element
  - **DAIX Signal Yellow** (#F5C400) - Highlights and metrics
  - **DAIX Deep Night** (#0A0A12) - Premium dark backgrounds
  - **DAIX Neo Grey** (#B8BCCD) - Secondary text and subtle elements
- Updated both light and dark mode color schemes in `index.css`
- Modern fintech-inspired aesthetic with strong contrast and professional appearance

### UX Improvements
- Fixed demo modal positioning and scroll issues
- Improved modal responsiveness with `max-h-[90vh]` and proper overflow handling
- Enhanced animation timing for more natural conversation flow
- Better visual hierarchy with consistent spacing

### Data Integration
- Added Supabase integration for storing demo requests
- Created `demo_requests` table schema with name, whatsapp, needs, and timestamp
- Implemented client-side Supabase connection in `client/src/lib/supabase.ts`
- Added error handling and loading states for data persistence
- Demo form now saves user information to Supabase with proper validation

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture

**Framework & Build System**
- **React 18** with TypeScript as the primary UI framework
- **Vite** as the build tool and development server, providing fast HMR and optimized production builds
- **Wouter** for lightweight client-side routing (single-page application)
- **TanStack Query (React Query)** for server state management and data fetching

**Rationale**: React with Vite offers excellent developer experience and performance. Wouter provides routing without the overhead of React Router, suitable for a simpler site structure. React Query handles API interactions elegantly with built-in caching and state management.

**UI Component System**
- **shadcn/ui** component library built on Radix UI primitives
- **Tailwind CSS** for utility-first styling with custom design tokens
- **Class Variance Authority (CVA)** for component variant management
- Custom design system defined in `tailwind.config.ts` with specific color variables and spacing primitives

**Rationale**: shadcn/ui provides accessible, customizable components without vendor lock-in since components are copied into the project. Tailwind enables rapid UI development while maintaining consistency through the design token system. Radix UI ensures accessibility compliance.

**Design System**
- DAIX brand color palette:
  - Core Blue (#1A47FF) - Primary actions and brand elements
  - Quantum Purple (#9F3BFF) - Secondary highlights and "X" branding
  - Signal Yellow (#F5C400) - Metrics, alerts, and key highlights
  - Deep Night (#0A0A12) - Dark mode backgrounds
  - Neo Grey (#B8BCCD) - Secondary text and subtle UI elements
- Typography using Inter font family
- Sophisticated gradient animations and micro-interactions
- Responsive spacing system based on Tailwind units (4, 6, 8, 12, 16, 20, 24)

**Component Structure**
- Page-level components in `client/src/pages/`
- Reusable section components in `client/src/components/` (Header, Hero, Solutions, Benefits, Process, CTA, Footer)
- UI primitives in `client/src/components/ui/`
- Interactive modal system (DemoModal) for lead capture

### Backend Architecture

**Server Framework**
- **Express.js** as the HTTP server framework
- **TypeScript** for type safety across the stack
- Custom logging middleware for API request tracking
- Raw body parsing support for webhook integrations

**Rationale**: Express provides a minimal, flexible foundation. TypeScript ensures type safety between frontend and backend through shared schemas. The architecture is prepared for easy API expansion.

**Current State**
- Minimal route structure in `server/routes.ts` (currently placeholder)
- Pluggable storage interface defined in `server/storage.ts`
- In-memory storage implementation (MemStorage) for development
- User schema defined but not actively used in current implementation

**Development Setup**
- Vite middleware integration in development mode
- Hot module replacement (HMR) enabled
- Custom error overlay plugin (@replit/vite-plugin-runtime-error-modal)
- Replit-specific plugins for development banner and cartographer

### Data Storage Solutions

**Database Technology**
- **PostgreSQL** via Neon serverless driver (@neondatabase/serverless)
- **Drizzle ORM** for type-safe database operations and migrations
- Schema definition in `shared/schema.ts` with Zod validation

**Current Schema**
- Users table with UUID primary keys, username, and password fields
- Demo Requests table for storing lead information:
  - ID (UUID primary key)
  - Name, WhatsApp, and needs description
  - Created timestamp
- Drizzle-Zod integration for runtime validation
- Supabase integration for cloud data persistence

**Rationale**: PostgreSQL provides robust relational data storage. Neon's serverless driver enables connection pooling and edge deployment. Drizzle offers excellent TypeScript integration and migration tooling. The storage interface abstraction allows swapping implementations without changing business logic.

**Migration Strategy**
- Drizzle Kit for schema management
- Migrations stored in `/migrations` directory
- `db:push` command for schema synchronization

### Authentication & Authorization

**Current State**
- User schema defined with username/password fields
- No active authentication implementation in current codebase
- Infrastructure prepared for session-based or token-based auth

**Prepared Dependencies**
- `connect-pg-simple` for PostgreSQL session storage (installed but not configured)
- Storage interface includes user lookup methods

**Future Considerations**: The architecture supports adding Express sessions with PostgreSQL backing or JWT tokens. The shared schema approach ensures type safety for auth-related data.

### Build & Deployment

**Production Build**
- Frontend: Vite builds static assets to `dist/public`
- Backend: esbuild bundles server code to `dist/index.js` as ESM
- Single-command build script compiles both layers

**Development Workflow**
- `npm run dev`: Starts Express with Vite middleware for HMR
- `npm run build`: Production build of frontend and backend
- `npm start`: Runs production server from compiled artifacts

**Rationale**: Separating build tools (Vite for frontend, esbuild for backend) optimizes each layer independently. ESM format ensures modern JavaScript practices throughout.

## External Dependencies

### Third-Party UI Libraries
- **Radix UI** (@radix-ui/*): Headless component primitives for accessibility
- **Lucide React**: Icon library for consistent iconography
- **Embla Carousel**: Carousel/slider functionality
- **date-fns**: Date manipulation and formatting

### State Management & Data Fetching
- **@tanstack/react-query**: Server state management, caching, and synchronization
- **React Hook Form** (@hookform/resolvers): Form state management with Zod validation

### Styling & UI Utilities
- **Tailwind CSS**: Utility-first CSS framework
- **class-variance-authority**: Type-safe component variant management
- **clsx** & **tailwind-merge**: Class name utilities
- **cmdk**: Command palette component

### Development Tools
- **@replit/vite-plugin-runtime-error-modal**: Development error overlay
- **@replit/vite-plugin-cartographer**: Replit-specific development features
- **@replit/vite-plugin-dev-banner**: Development environment banner

### Database & Validation
- **Drizzle ORM** (drizzle-orm, drizzle-kit): Type-safe database toolkit
- **Zod** (via drizzle-zod): Runtime schema validation
- **@neondatabase/serverless**: Serverless PostgreSQL driver
- **Supabase** (@supabase/supabase-js): Cloud database and authentication platform

### Backend Utilities
- **nanoid**: Unique ID generation
- **tsx**: TypeScript execution for development

### Font Integration
- **Google Fonts**: Inter and Poppins font families loaded via CDN in index.html

**Note**: While PostgreSQL/Drizzle infrastructure is configured, the application currently uses in-memory storage. Database integration is prepared but not actively utilized in the current implementation.