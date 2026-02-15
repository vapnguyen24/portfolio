# Portfolio Website - New Modular Structure

I have refactored the single `index.html` file into a modular structure to be cleaner and more manageable ("gọn hơn").

## New Structure

```
d:/SelfTaught/Web/LandingPage/
├── index.html                  # Main HTML structure (clean, links to assets)
└── assets/
    ├── css/
    │   └── style.css           # Custom CSS (Glassmorphism, Animations)
    └── js/
        ├── main.js             # Main entry point (imports other modules)
        ├── tailwind.config.js  # Tailwind configuration
        ├── data/
        │   ├── translations.js # Dictionary for EN/VI text
        │   └── projects.js     # Data for project cards and modals
        └── modules/
            ├── theme.js        # Logic for Dark/Light mode
            ├── language.js     # Logic for Language switching
            ├── modal.js        # Logic for the Project Detail Modal
            └── ui.js           # General UI logic (Mobile Menu, Scroll)
```

## How to Run
**Important:** Because this new structure uses JavaScript Modules (`<script type="module">`), you cannot simply double-click `index.html` to run it anymore (Browsers block local modules for security/CORS reasons).

You must use a local server. 
1.  **VS Code:** Install "Live Server" extension and right-click `index.html` -> "Open with Live Server".
2.  **Python:** Run `python -m http.server` in the directory and open `http://localhost:8000`.
3.  **Node:** Run `npx serve .`

## Editing content
- **Text/Language:** Edit `assets/js/data/translations.js`.
- **Projects:** Edit `assets/js/data/projects.js`.
- **Styles:** Edit `assets/css/style.css` (or classes in HTML).
