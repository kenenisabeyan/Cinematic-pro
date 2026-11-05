# 🎬 Kenenisa Beyan — Cinematic Portfolio

<div align="center">

[![React](https://img.shields.io/badge/React-19.2-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-6.0-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-8.2-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
[![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-v4.3-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-13.1-black?style=for-the-badge&logo=framer&logoColor=white)](https://www.framer.com/motion/)
[![Lenis](https://img.shields.io/badge/Lenis_Scroll-1.3-D4AF37?style=for-the-badge)](https://lenis.darkroom.engineering/)

<br />

**A luxury, film-noir cinematic web portfolio engineered for performance, modularity, and immersive motion design.**

[Explore Live Demo](https://kenenisa-one.vercel.app/) • [Download Resume](https://kenenisa-one.vercel.app/Kenenisa_Beyan_CV.pdf) • [Connect on LinkedIn](https://www.linkedin.com/in/kenenisa/) • [Report Bug](https://github.com/kenenisabeyan/Cinematic-pro/issues)

</div>

---

## 🌟 Overview & Identity

Designed for **Kenenisa Beyan** — Full-Stack Software Engineer, Computer Science & Engineering student at Adama Science & Technology University (ASTU), Founder of the EDOT education platform, and MinT/KOICA Startup Innovation Fellow.

This portfolio merges **luxury editorial aesthetics** with **rigorous system architecture**, featuring real-time 3D physics, hardware-accelerated video layering, and an interactive stacking deck scroll engine.

```
       ✦  C I N E M A T I C   P R E C I S I O N  ✦
   ┌───────────────────────────────────────────────────┐
   │  Obsidian Black (#000000)  Brushed Gold (#D4AF37) │
   │  Warm Bronze    (#8C6D4F)  Cream Text   (#E8DFD8) │
   └───────────────────────────────────────────────────┘
```

---

## 🏛️ System Architecture & Data Flow

### 1. High-Level Full-Stack System Diagram

```mermaid
flowchart TD
    subgraph ClientTier ["1. CLIENT PRESENTATION TIER (React 19 & TypeScript)"]
        UI["Viewport & User Interaction"]
        Motion["Framer Motion 13 Physics Engine"]
        LenisScroll["Lenis 1.3 Inertial Scroll Controller"]
        TailwindCSS["Tailwind CSS v4 Reactive Styling Engine"]
        
        UI --> Motion
        UI --> LenisScroll
        Motion --> TailwindCSS
        LenisScroll --> TailwindCSS
    end

    subgraph ComponentTree ["2. MODULAR COMPONENT HIERARCHY"]
        App["App.tsx Shell"]
        Hero["HeroSection (Video Mask + Insignia)"]
        About["AboutSection (3D Gyro Tilt + Particles)"]
        Projects["ProjectsSection (ScrollStack Deck)"]
        Skills["SkillsSection (12-Col Bento Matrix)"]
        Experience["ExperienceSection (Scroll-Linked Timeline)"]
        Testimonials["TestimonialsSection (Feedback Matrix)"]
        Contact["ContactSection (Terminal Form)"]

        App --> Hero
        App --> About
        App --> Projects
        App --> Skills
        App --> Experience
        App --> Testimonials
        App --> Contact
    end

    subgraph ServiceTier ["3. BACKEND & SERVICE ARCHITECTURE"]
        API["RESTful API Endpoints (Node.js / Express / Django)"]
        Auth["Authentication & Granular RBAC (NextAuth / JWT)"]
        BusinessLogic["Business Logic & Multi-Role Workflows"]
        
        API --> Auth
        Auth --> BusinessLogic
    end

    subgraph DataTier ["4. DATA PERSISTENCE & OPTIMIZATION"]
        PG[("PostgreSQL (ACID Relational)")]
        Mongo[("MongoDB Atlas (Document Store)")]
        Prisma["Prisma ORM & Indexed Foreign Keys"]
        
        BusinessLogic --> Prisma
        Prisma --> PG
        Prisma --> Mongo
    end

    ClientTier <== "Standardized JSON Contracts (HTTPS / WSS)" ==> ServiceTier
```

---

### 2. Client-Side Rendering & 3D Motion Pipeline

```mermaid
sequenceDiagram
    autonumber
    actor User as User / Pointer
    participant Hero as Hero Stage (Video + Mask)
    participant Motion as Framer Motion Engine
    participant Card as 3D Holographic Card (useSpring)
    participant Deck as ScrollStack Engine (Lenis)
    participant GPU as GPU Compositor & Paint Layer

    User->>Hero: Cursor Move & Scroll Event
    Hero->>Motion: Dispatch raw coordinates (e.clientX, e.clientY)
    Motion->>Card: Compute 3D physics (rotateX, rotateY via useSpring)
    Motion->>Card: Compute dynamic radial gold spotlight sweep
    User->>Deck: Inertial Scroll Input (Lenis 60fps loop)
    Deck->>Deck: Measure initial top offsets & calculate runway
    Deck->>Deck: Compute progressive scale(0.88 + i*0.035) & translateY
    Deck->>GPU: Apply translate3d(0, y, 0) scale(s) (Hardware Accelerated)
    GPU-->>User: Seamless 60fps cinematic frame rendering
```

---

### 3. Multi-Role RBAC & Security Workflow

```mermaid
flowchart LR
    A["Client Request"] --> B{"Authentication Gate (JWT / NextAuth)"}
    B -- "Unauthenticated" --> C["401 Unauthorized / Redirect"]
    B -- "Valid Token" --> D{"Role-Based Access Policy (RBAC)"}
    
    D -- "Role: Admin" --> E["Admin Dashboard & Evaluation Audit"]
    D -- "Role: Staff / Instructor" --> F["Workflows, Progress Tracking & Reviews"]
    D -- "Role: Student / User" --> G["Course Portal & Profile Workspace"]

    E & F & G --> H["Sanitized Data Layer & Sub-50ms DB Queries"]
```

---

## ⚡ Architectural Rigor & Quality Standards

| Engineering Pillar | Architectural Standard | Implementation Details |
| :--- | :--- | :--- |
| **Clean Architecture & SOLID** | Strict Separation of Concerns | Distinct separation between UI layout, reactive state, business logic, and data schema representations. |
| **Security & Granular RBAC** | Zero-Trust Role Isolation | Multi-role dashboards, hashed credential storage, JWT tokens, and sanitized inputs mitigating injection attacks. |
| **Database Optimization** | Sub-50ms Query Performance | Schema normalization in PostgreSQL and MongoDB, indexed foreign keys, optimized joins, and persistent connection pooling. |
| **Predictable APIs** | RESTful HTTP Contracts | Standardized HTTP status codes, structured JSON responses, input boundary validation, and centralized error handling. |
| **Component Modularity** | Reusable Component Systems | Type-safe React components powered by TypeScript interfaces, reusable contexts, and decoupled animation controllers. |
| **Production Readiness** | Enterprise Delivery Standards | Strict environment variable isolation, automated Vite bundler optimization, CORS safety, and minimal bundle footprint. |

---

## ⚡ Key Feature Implementations

### 1. 🎥 Cinematic Video Stage (`HeroSection.tsx`)
- **Atmospheric Background Canvas**: Fixed-position, muted looping hero video (`/videos/hero.mp4`) blended using directional gradient masks (`from-black via-black/85 to-transparent`).
- **Harmonic Oscillating Insignia**: Ambient breathing emblem animation (`y: [-3, 3, -3]`, `scale: [1, 1.03, 1]`) with dynamic gold drop shadow.
- **Sculpted Typography**: Headline using `Bebas Neue` condensed type with multi-stop metallic gold text clips (`from-[#F7E7C4] via-[#C99E5D] to-[#543B1A]`).

### 2. 🎴 3D Holographic Card & Physics (`AboutSection.tsx`)
- **Real-Time Gyro Tilt**: Utilizes Framer Motion's `useMotionValue` and `useSpring` (`stiffness: 220, damping: 18`) to calculate realistic 3D perspective tilts based on mouse cursor coordinates.
- **Dynamic Laser Border & Spotlight**: Mouse-following radial spotlight sweep and glowing corner accent brackets.
- **Verified Metrics**: Live numerical badges highlighting project deployments, fellowships, and academic excellence.

### 3. 🃏 Interactive ScrollStack Engine (`ProjectsSection.tsx` & `ScrollStack.tsx`)
- **Editorial Card Stacking**: Cards dynamically lock and stack atop one another using computed vertical translations (`translateY`) and progressive geometric scaling (`scale(0.88 + i * 0.035)`).
- **Lenis Smooth Scroll Pipeline**: Butter-smooth 60fps scroll hijacking with cubic-bezier easing (`duration: 1.2`), creating a tactile editorial deck.

### 4. 🍱 Architectural Bento Grid (`SkillsSection.tsx`)
- **Asymmetric 12-Column Matrix**: Structured layout categorized into Frontend Architecture, Distributed Backend, Data Platforms, and System Design.
- **Interactive Badges**: Real-time hover triggers with brushed-gold glow flares and monospace latency metrics.

### 5. 📍 Scroll-Linked Route Timeline (`ExperienceSection.tsx`)
- **Animated SVG Track Line**: Scroll progress dynamically drives the height of an illuminated gold track (`useTransform(scrollYProgress, [0, 1], ['0%', '100%'])`).
- **Interactive Nodes**: Chronological milestones spanning software engineering roles, startup fellowships, and university education.

### 6. 💬 Client Endorsements Matrix (`TestimonialsSection.tsx`)
- **Real-World Impact**: Dynamic showcase featuring client testimonials and project outcomes.
- **Aesthetic Cards**: Featuring custom initial monogram badges, gold quotation marks, and responsive grid alignment.

### 7. 🛰️ Mission-Control Terminal (`ContactSection.tsx`)
- **Monolith Command Palette**: Terminal-styled direct contact form with monospaced metadata prefixes (`// SENDER`, `// CHANNEL`, `// PAYLOAD`).
- **Direct Dispatch Feedback**: Interactive state machine transitioning from input capture to packet confirmation.

---

## 🛠️ Technology Matrix

| Layer | Technologies |
| :--- | :--- |
| **Runtime & Core** | [React 19](https://react.dev/), [TypeScript 6](https://www.typescriptlang.org/), [Vite 8](https://vitejs.dev/) |
| **Styling & Theme** | [Tailwind CSS v4](https://tailwindcss.com/) (Oxidized CSS Engine), `@tailwindcss/vite` |
| **Motion & Physics** | [Framer Motion 13](https://www.framer.com/motion/) (Spring physics, transforms) |
| **Smooth Scrolling** | [Lenis 1.3](https://lenis.darkroom.engineering/) (Inertial scroll physics) |
| **Typography** | `Bebas Neue`, `Montserrat`, `Herr Von Muellerhoff`, `Cinzel` |
| **Quality & Linting** | [Oxlint](https://oxc.rs/docs/guide/usage/linter) (High-performance Rust-based linter) |

---

## 📁 Project Architecture

```bash
cinematic-pro/
├── public/
│   ├── favicon.svg             # Minimalist luxury tab icon
│   ├── icons.svg               # SVG sprite definitions
│   └── videos/
│       └── hero.mp4            # Cinematic background loop
├── src/
│   ├── assets/                 # Optimized branding & portrait assets
│   │   ├── about.png           # Monolith card portrait
│   │   ├── hero.png            # Video poster fallback
│   │   └── watermark.png       # Oscillating brand insignia
│   ├── components/             # Modular section components
│   │   ├── HeroSection.tsx     # Stage, video canvas & typography
│   │   ├── AboutSection.tsx    # 3D tilt card & bio matrix
│   │   ├── ProjectsSection.tsx # Featured project data
│   │   ├── ScrollStack.tsx     # Custom stacking deck engine
│   │   ├── ScrollStack.css     # Runway & 3D transform layers
│   │   ├── SkillsSection.tsx   # 12-col bento grid
│   │   ├── ExperienceSection.tsx # Scroll-driven timeline
│   │   ├── TestimonialsSection.tsx # Client feedback grid
│   │   └── ContactSection.tsx  # Terminal dispatch form
│   ├── App.tsx                 # Master view shell
│   ├── main.tsx                # React 19 entry point
│   └── index.css               # Tailwind v4 import & font definitions
├── index.html                  # HTML5 shell & Google Fonts preconnect
├── package.json                # Dependencies & scripts
├── tsconfig.json               # TypeScript compiler config
└── vite.config.ts              # Vite 8 + Tailwind v4 plugin pipeline
```

---

## 🚀 Getting Started

### Prerequisites

Ensure you have the following installed:
- [Node.js](https://nodejs.org/) (`v20.0.0` or higher recommended; tested on `v22.18.0`)
- [npm](https://www.npmjs.com/) or [pnpm](https://pnpm.io/)

### 1. Clone the Repository

```bash
git clone https://github.com/kenenisabeyan/Cinematic-pro.git
cd Cinematic-pro
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Launch Development Server

```bash
npm run dev
```

Open your browser and navigate to **`http://localhost:5173`** (or the port indicated in your console).

### 4. Build for Production

```bash
npm run build
```

This compiles optimized chunks into the `/dist` directory in under **600ms**.

### 5. Preview Production Build

```bash
npm run preview
```

---

## 🎨 Flexibility & Customization Guide

This project is built from the ground up to be **modular and easily customizable**:

### Modifying Content
- **Bio & Highlight Stats**: Update text and metrics directly in [`src/components/AboutSection.tsx`](src/components/AboutSection.tsx).
- **Featured Projects**: Edit the `projects` array in [`src/components/ProjectsSection.tsx`](src/components/ProjectsSection.tsx) to add or change project titles, tech tags, and GitHub URLs.
- **Skills Matrix**: Modify `bentoCategories` in [`src/components/SkillsSection.tsx`](src/components/SkillsSection.tsx).
- **Career Timeline**: Update the `journey` array in [`src/components/ExperienceSection.tsx`](src/components/ExperienceSection.tsx).
- **Client Reviews**: Edit `testimonials` in [`src/components/TestimonialsSection.tsx`](src/components/TestimonialsSection.tsx).

### Tuning the Card Deck Animation
In [`src/components/ProjectsSection.tsx`](src/components/ProjectsSection.tsx), adjust the `<ScrollStack>` props:
```tsx
<ScrollStack
  itemDistance={20}         // Distance between cards before stacking
  itemScale={0.035}         // Scale reduction factor per stacked card
  itemStackDistance={28}    // Visual offset of stacked cards at the top
  stackPosition="15%"       // Viewport percentage where stacking locks
  baseScale={0.88}          // Scale of the base card
>
```

---

## 📬 Contact & Connect

**Kenenisa Beyan**  
Full-Stack Software Engineer • Adama, Ethiopia  

- 🌐 **Portfolio**: [kenenisa-one.vercel.app](https://kenenisa-one.vercel.app/)
- 💻 **GitHub**: [@kenenisabeyan](https://github.com/kenenisabeyan)
- 💼 **LinkedIn**: [linkedin.com/in/kenenisa](https://www.linkedin.com/in/kenenisa/)
- 🐦 **Twitter/X**: [@kenenisa94931](https://twitter.com/kenenisa94931)
- 📧 **Email**: [kenenisab05@gmail.com](mailto:kenenisab05@gmail.com)

---

<div align="center">
  <sub>© 2026 Kenenisa Beyan. Engineered with precision, clean architecture, and passion.</sub>
</div>
