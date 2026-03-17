# Forest Underground

Forest Underground is a minimal, super-fast website template designed for static content driven by a JSON file.

The goal of the project is to provide a simple one-page website structure where all content is stored in a JSON file and rendered dynamically using lightweight JavaScript.

No frameworks.
No build tools.
Just HTML + JSON + JavaScript.

Perfect for:
- ultra-fast landing pages
- simple personal websites
- prototypes
- GitHub Pages hosting
- static hosting environments


## Features

- Extremely lightweight
- One page architecture
- Content stored in JSON
- Simple JavaScript rendering
- Works on any static hosting
- No dependencies


## Project Structure

forest-underground/

index.html  
script.js  
content.json  
README.md


## How It Works

1. The website loads.
2. JavaScript fetches the content.json file.
3. The content is inserted into the HTML structure.

This allows easy content updates without editing HTML.


## Example JSON Content

{
  "title": "Forest Underground",
  "subtitle": "Minimal JSON powered website",
  "sections": [
    {
      "title": "About",
      "text": "Forest Underground is a minimal website template powered by JSON."
    },
    {
      "title": "Projects",
      "text": "This template can be used for fast landing pages and prototypes."
    },
    {
      "title": "Contact",
      "text": "You can host this project on GitHub Pages or any static server."
    }
  ]
}


## Running the Project

Simply open:

index.html

or host the folder on any static server.

Example hosting:
- GitHub Pages
- Netlify
- Cloudflare Pages
- Any web hosting


## Philosophy

Forest Underground follows three principles:

1. Speed
2. Simplicity
3. Portability

Everything should remain readable and easy to modify.

## Live Demo

[Open the demo](https://dawidpolakowski.github.io/forest-underground/)

## License

MIT License


## Author

Created by Dawid Polakowski