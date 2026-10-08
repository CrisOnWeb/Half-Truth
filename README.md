# Half Truth

> A deduction game where you have to discover who is lying.

Half Truth is a detective-style deduction game where each case presents a story, several suspects and different versions of what happened.

Read the statements carefully, connect the clues and find the version that doesn't fit.

The project is currently **in development**.

## About the project

Half Truth was created as a personal project to practice **TypeScript with React** and to build a complete web experience from scratch.

The project focuses on combining game logic with a polished, responsive interface, while keeping accessibility and maintainable component architecture in mind.

The game is planned to include independent cases with different difficulty levels. Each case will present a scenario, a group of characters and their statements, with the player having to use logic and attention to detail to identify the lie.

## Current features

- Responsive landing page with mobile-first approach.
- Reusable React components.
- Case cards with dynamic case information.
- Difficulty indicator with different visual states.
- Character and suspect visualisation.
- Responsive layouts for different screen sizes.
- Accessible semantic HTML and keyboard focus styles.
- `prefers-reduced-motion` support.
- Interactive 3D tilt effect on devices that support hover and fine pointers.
- Dynamic content generated from typed TypeScript data.

## Tech stack

- React
- TypeScript
- Vite
- SCSS
- React Router
- Lucide Icons

## Project status

🚧 **In development**

The project is currently under active development. New features and game content will be added progressively.

## Getting started

### Requirements

- Node.js
- npm

### Installation

Clone the repository and install the dependencies:

```bash
git clone https://github.com/CrisOnWeb/Half-Truth.git
cd Half-Truth
npm install
```

### Development

Start the development server:

```bash
npm run dev
```

The application will be available at the local URL provided by Vite.

### Build

To create a production build:

```bash
npm run build
```

## Project structure

The project follows a component-based architecture, keeping reusable UI components, game data, pages and application logic organized by responsibility.

```text
Half-Truth/
├── docs/                    # Production build for GitHub Pages
├── public/                  # Static public assets
├── src/
│   ├── assets/              # Application assets
│   ├── components/          # Reusable UI components
│   ├── data/                # Game data and TypeScript types
│   ├── hooks/               # Custom React hooks
│   ├── pages/               # Application pages
│   ├── services/            # External services and API logic
│   ├── styles/              # Global styles and SCSS
│   ├── utils/               # Utility functions
│   ├── main.tsx             # Application entry point
│   └── vite-env.d.ts        # Vite type declarations
├── THIRD-PARTY-LICENSES/    # Third-party license notices
├── index.html
├── LICENSE
├── package.json
├── tsconfig.json
├── vite.config.js
└── eslint.config.js
```

## Accessibility

Accessibility is considered throughout the project, including:

- Semantic HTML elements.
- Visible keyboard focus states.
- Decorative elements hidden from assistive technologies when appropriate.
- Responsive layouts.
- Support for `prefers-reduced-motion`.
- Interactive effects restricted to devices where they are appropriate.

## License

This project is licensed under the MIT License.

See the [LICENSE](./LICENSE) file for details.

## Third-party licenses

This project uses [Lucide](https://lucide.dev/) for icons.

Lucide is licensed under the ISC License. Portions of Lucide are
derived from Feather Icons and are licensed under the MIT License.

The complete license notices are included in
`THIRD-PARTY-LICENSES/lucide.txt`.
