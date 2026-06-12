# ProseWrite - AI-Powered Writing Assistant

![ProseWrite](prosewrite.png)

Welcome to the **ProseWrite** project! This README provides an overview of the project, setup instructions, and other relevant details.

## Table of Contents

- [Visit](#visit)
- [About](#about)
- [Features](#features)
- [Installation](#installation)
- [Structure](#structure)
- [Contributors](#contributors)
- [Contributing](#contributing)
- [License](#license)

## Visit

- [Repository](https://github.com/aabubokarr/prosewrite.git)

## About

**ProseWrite** is an AI-powered writing assistant web application designed to help writers dictate and polish drafts. It provides a robust system for users to dictate spoken content, edit drafts with style-specific AI personas, and organize work with automatic section management.

## Features

- Dictation & Transcription
- Auto-Editing & Style Enhancement
- Genre-Specific Editing Personas
- Section & Draft Organization
- Security & Compliance
- Multi-Language Support

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/aabubokarr/prosewrite.git
   ```
2. Navigate to the project directory:
   ```bash
   cd prosewrite
   ```
3. Install the dependencies:
   ```bash
   npm install
   ```
4. Run the application in development mode:
   ```bash
   npm run dev
   ```
5. Build the application for production:
   ```bash
   npm run build
   ```

## Structure

```
prosewrite/
├── LICENSE                 # MIT License file
├── README.md               # Project documentation
├── components.json         # shadcn/ui configuration settings
├── next.config.mjs         # Next.js configuration (static export configured)
├── package.json            # Project dependencies and script runners
├── postcss.config.mjs      # PostCSS configuration for compiling Tailwind CSS
├── tailwind.config.ts      # Tailwind CSS configuration with custom brand styles/colors
├── tsconfig.json           # TypeScript configuration
├── public/                 # Static assets directory
│   ├── testimonials/       # Author and user profile avatar images
│   ├── next.svg            # Next.js brand vector asset
│   └── vercel.svg          # Vercel brand vector asset
└── src/                    # Application source code
    ├── app/                # App Router pages and configurations
    │   ├── globals.css     # Global styles and Tailwind directives
    │   ├── icon.svg        # ProseWrite custom tab favicon
    │   ├── layout.tsx      # Root HTML layout and web tracking scripts
    │   ├── page.tsx        # Homepage entrypoint rendering all components
    │   └── providers.tsx   # Analytics (PostHog) context provider
    ├── components/         # Reusable React UI component files
    │   ├── ui/             # Core block elements (Button, Accordion, Section)
    │   ├── logos/          # Custom SVG icon components (SlimIconAlt logo)
    │   ├── AnimatedWorkflow.tsx   # Interactive speak/auto-edit/finalize steps
    │   ├── FAQsSection.tsx        # Accordion-style Frequently Asked Questions list
    │   ├── FeaturesSection.tsx    # Grid showcasing writing workflows & security
    │   ├── Footer.tsx             # Footer component with dynamic copyright notice
    │   ├── Header.tsx             # Responsive header and navigation bar
    │   ├── HeroSection.tsx        # Hero banner with primary trial conversion CTA
    │   ├── PricingSection.tsx     # Tiered subscription pricing blocks
    │   ├── ReadySection.tsx       # Bottom call-to-action box
    │   ├── TestimonialsSection.tsx# User reviews and endorsements
    │   └── UnleashSection.tsx     # Feature details (dictation, translation, personas)
    └── lib/                # Core libraries and helpers
        └── utils.ts        # Helper utility for dynamically merging Tailwind classes
```

## Contributors

<p align="center">
  <a href="https://github.com/aabubokarr/prosewrite/graphs/contributors">
    <img src="https://contrib.rocks/image?repo=aabubokarr/prosewrite" alt="Contributors" />
  </a>
</p>

## Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository.
2. Create a new branch:
   ```bash
   git checkout -b feature-name
   ```
3. Commit your changes:
   ```bash
   git commit -m "Add feature-name"
   ```
4. Push to the branch:
   ```bash
   git push origin feature-name
   ```
5. Open a pull request.

## License

This project is licensed under the [MIT License](LICENSE).
