# The Burujan

![Stars](https://img.shields.io/github/stars/huzaifayasin681/The-Burujan?style=social) ![License](https://img.shields.io/github/license/huzaifayasin681/The-Burujan) ![Last commit](https://img.shields.io/github/last-commit/huzaifayasin681/The-Burujan) ![Next.js](https://img.shields.io/badge/Next.js-14-black) ![Three.js](https://img.shields.io/badge/3D-Three.js-black)

> The official website of The Burujan digital agency, built with Next.js, Tailwind, Framer Motion and Three.js, including a project estimator and client portal.

**Live demo:** https://theburujan.tech

If you find this useful, please give it a ⭐ so more people can discover it.

![The Burujan](https://via.placeholder.com/1200x630/050505/D4AF37?text=THE+BURUJAN)

**The Burujan** is a monolithic technology firm specializing in high-performance web architecture, mobile ecosystems, and enterprise DevOps. This repository hosts the official corporate website, designed to serve as a "Digital Fortress" that establishes trust, authority, and engineering precision.

## 🏛 Core Philosophy

We reject the "freelancer" mindset of ephemeral code. We build systems that last. Our digital presence reflects this through a "Dark Luxury" aesthetic, rigorous architectural planning ("The Blueprint"), and interactive lead qualification tools.

## 🛠 Tech Stack

Built on an immutable foundation of modern web technologies:

*   **Framework**: [Next.js 14+](https://nextjs.org/) (App Router, Server Actions)
*   **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
*   **Animation**: [Framer Motion](https://www.framer.com/motion/) (Orchestrated reveals, micro-interactions)
*   **3D Graphics**: [Three.js](https://threejs.org/) & [React Three Fiber](https://docs.pmnd.rs/react-three-fiber) (Particle fields, morphing shapes)
*   **Database**: [Prisma ORM](https://www.prisma.io/) (MySQL/SQLite)
*   **Deployment**: Hostinger / Vercel
*   **Media**: Cloudinary (Optimized asset delivery)

## 🚀 Key Features

*   **Cinematic Entrance**: A custom "System Boot" loading sequence with a typewriter logo reveal.
*   **The Blueprint**: A vertical scrolling process timeline detailing the Audit, Logic, Construction, and Fortification phases.
*   **The Armory (Portfolio)**: A glassmorphic showcase of high-end projects.
*   **Project Estimator**: An interactive multi-step wizard to qualify leads and estimate budgets.
*   **Client Portal**: A secure-access simulation for existing clients (Demo Code: `THEBURUJAN`).
*   **Legal Shield**: Fully accessible Privacy Policy, Terms of Service, and SLA documents.
*   **Immersive Hero HUD**: A data-rich, sci-fi inspired heads-up display.
*   **Coordinates Lost**: A custom, themed 404 error page.

## ⚡ Getting Started

### Prerequisites

*   Node.js 18+
*   npm / yarn / pnpm

### Installation

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/TheBurujan/website.git
    cd website
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```

3.  **Configure Environment Variables:**
    Create a `.env` file in the root directory:
    ```env
    # Database Connection
    DATABASE_URL="mysql://USER:PASSWORD@HOST:PORT/DATABASE"

    # Cloudinary (Optional for team photos)
    NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME="your_cloud_name"
    ```

4.  **Initialize Database (Prisma):**
    ```bash
    npx prisma generate
    # If connecting to a real DB:
    # npx prisma db push
    ```

5.  **Run Development Server:**
    ```bash
    npm run dev
    ```

    Open [http://localhost:3000](http://localhost:3000) to view the application.

## 📂 Project Structure

```
├── app/                  # Next.js App Router
│   ├── layout.tsx        # Root layout (Fonts, Providers, Global UI)
│   ├── page.tsx          # Homepage composition
│   ├── about/            # "The Vision" page
│   ├── portfolio/        # "The Armory" page
│   ├── portal/           # Secure Client Portal
│   └── ...               # Legal pages, 404, etc.
├── components/           # Reusable UI Components
│   ├── Navbar.tsx        # Animated Navigation
│   ├── HeroSection.tsx   # Main landing area
│   ├── TheBlueprint.tsx  # Process visualizer
│   ├── ProjectEstimator.tsx # Quote calculator
│   └── ...
├── business_assets/      # Corporate Identity Files
│   ├── email_signature.html
│   ├── launch_protocol.md
│   └── ...
├── lib/                  # Utilities & Server Actions
├── prisma/               # Database Schema
└── public/               # Static Assets
```

## 🤝 The Architects

*   **Rao Abdul Hadi** - Web Architecture
*   **Rana Talha Jabbar** - Mobile Ecosystems
*   **Muhammad Hafeez** - Full Stack Systems
*   **Muhammad Huzaifa Hassan** - DevOps & Infrastructure

## 📜 License

© 2026 The Burujan. All rights reserved.
Confidential proprietary software. Unauthorized copying of this file, via any medium, is strictly prohibited.

## Contributing

Issues and pull requests are welcome. If you have an idea or found a bug, [open an issue](https://github.com/huzaifayasin681/The-Burujan/issues).

## License

Released under the [MIT License](LICENSE).

## Author

**Muhammad Huzaifa Hassan**, NOC Engineer and full stack developer, founder of [The Burujan](https://theburujan.tech)

[GitHub](https://github.com/huzaifayasin681) · [LinkedIn](https://linkedin.com/in/huzaifa-hassan-4bb437222) · [Portfolio](https://nextjs-portfolio-opal-one.vercel.app)
