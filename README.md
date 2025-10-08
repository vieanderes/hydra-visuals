# Hydra Visuals

Welcome to **Hydra Visuals**, a collection of live‑coded generative art sketches built with [Hydra](https://hydra.ojack.xyz/). These experiments showcase everything from soft dreamscapes to kaleidoscopic geometry, all running in your browser without any external editor.

---

## Project Structure

```text
hydra-visuals/
├── public/
│   ├── index.html         # Hydra wrapper with dropdown loader and controls
│   ├── style.css          # Styles for fullscreen canvas & UI
│   └── sketches/          # Your individual Hydra .js sketches
│       └── text-sketch.js
├── assets/                # Optional images, fonts, or textures used by sketches
├── recordings/           # Exported .webm or .gif demos of your sketches
├── server.js             # Node/Express server: serves files + auto-detects sketches
├── package.json          # npm project manifest (lists dependencies)
├── package-lock.json     # Auto-generated lock file
├── LICENSE               # GNU GPL v3 license
└── README.md             # This file
```

---

## Dependencies & Installation

This project requires Node.js (v14+). It uses Express to serve static files and provide the sketches API.

1. **Initialize npm** in the project root (if you haven’t already):

   ```bash
   npm init -y
   ```
2. **Install Express**:

   ```bash
   npm install express
   ```
3. (Optional) Install **nodemon** for auto‑reloading during development:

   ```bash
   npm install --save-dev nodemon
   ```

---

## Running Locally

1. Start the server:

   * With Node:

     ```bash
     node server.js
     ```
   * Or with nodemon (if installed):

     ```bash
     npx nodemon server.js
     ```

2. Open your browser at **[http://localhost:3000](http://localhost:3000)**.

You’ll see a dropdown listing all `.js` sketches, plus a **Reload** button to re‑run the current sketch.

---

## Adding Your Own Sketches

1. Create a new file in `public/sketches/`, e.g. `my-sketch.js`.
2. Write pure Hydra code (ending with `render(o0)` or similar).
3. Save and click **Reload** in the UI (or restart the server) to see it appear.

> **Tip:** No external editor required—just save your `.js` file and switch via the dropdown.

---

## How It Works

* **server.js** uses Express to serve everything in `public/` and exposes `/sketches` to list all `.js` files.
* **index.html** fetches that list, populates a `<select>`, and uses `eval()` to load the selected sketch.
* The Hydra canvas is created at full window size and accounts for high-DPI screens.

---

## Usage Tips

* Press **Reload** after editing a sketch file to see your updates instantly.
* Load a sketch by default via URL:
  `http://localhost:3000/?sketch=cool-wave.js`
* Host on GitHub Pages by pointing Pages to the `public/` folder.

---

## License

This project is licensed under the **GNU General Public License v3.0**.
You are free to use, modify, and share this work; any distributed derivatives must carry the same license.
See [`LICENSE`](LICENSE) for full details.

---

## Credits

Created by **Vie**.
Inspired by the Hydra community and the vibrant live‑coding ecosystem.

Made with 💙 and sine waves.
