# The Painted Journal | Poet Portfolio

A immersive, interactive poetry portfolio designed to feel like a living, breathing journal. This website showcases a collection of poems with an aesthetic focused on texture, ink, and fluid motion.

## 🎨 Aesthetic & Design
The site is built around the concept of "The Painted Journal":
- **Authentic Textures**: Parchment environments and paper grain overlays.
- **Living Ink**: Custom "Blood Ink" cursor that bleeds into the paper when idle.
- **Atmosphere**: Watercolor spots that breathe and rotate organically in the background.
- **Magic Reveal**: Text appears as if written by an invisible hand using the `MagicText` component.
- **Transitions**: 3D Page flip transitions and ink-inspired interactions.

## 🛠 Tech Stack
- **Framework**: [React](https://react.dev/) + [Vite](https://vitejs.dev/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Animation**: [Framer Motion](https://www.framer.com/motion/)
- **Routing**: [React Router DOM](https://reactrouter.com/)

## 🚀 Getting Started

### Prerequisites
- Node.js (v16+)
- npm or yarn

### Installation

1.  Clone the repository:
    ```bash
    git clone https://github.com/widgetwalker/poet-portfolio.git
    cd poet-portfolio
    ```

2.  Install dependencies:
    ```bash
    npm install
    ```

3.  Run the development server:
    ```bash
    npm run dev
    ```

4.  Open `http://localhost:5173` (or the port shown in terminal) to view the journal.

## 📂 Project Structure

- `src/components/ui`: Core UI elements (`InkCursor`, `MagicText`, `WatercolorSpot`, `PageTurn` transition).
- `src/pages`: Application views (`Home`, `Portfolio`, `PoemDetail`, `About`).
- `src/data`: Content management (`poems.ts` containing the collection).
- `src/lib`: Utilities and helpers.

## ✨ Key Features
- **Dynamic Routing**: Auto-generated poem pages based on `src/data/poems.ts`.
- **Responsive Design**: Mobile-friendly layout with "Book Header" navigation.
- **Performance**: Optimized animations and fast load times with Vite.

---
*Written with intention.*
