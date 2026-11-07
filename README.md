# Artikel lernen

Mobile-first static page for practicing German articles (*der / die / das*). No framework, no build step — open the HTML file or host it on GitHub Pages.

Flow: **choose a topic** → **Lernen** or **Test** that topic’s cards → **← Themen** to go back.

## Open locally

1. Clone or download this repository.
2. Open `index.html` in a browser (double-click, or drag into a tab).

Optional local server (helpful if your browser restricts local file loading):

```bash
# Python 3
python3 -m http.server 8080
```

Then visit `http://localhost:8080`.

## Publish on GitHub Pages

This site is static HTML/CSS/JS with `index.html` at the repo root — no build step and no GitHub Actions needed.

1. Create a GitHub repository and push these files (branch `main`).
2. Open **Settings → Pages** → set **Source** to **Deploy from a branch**, choose `main` and `/ (root)`, then save.
3. After a minute or two, open the Pages URL on a phone:

   `https://<your-username>.github.io/<repo-name>/`

## Add a category or card

Categories live in the `categories` array in `app.js`. Each category has an `id`, `name`, `emoji`, and a `cards` list.

```js
{
  id: "familie",
  name: "Familie",
  emoji: "👨‍👩‍👧‍👦",
  cards: [
    makeCard("die", "Mutter", "👩"),
    makeCard("der", "Vater", "👨"),
  ],
},
```

Add a word inside a category’s `cards` array:

```js
makeCard("die", "Katze", "🐱"),
// optional custom image:
makeCard("der", "Apfel", "🍎", { image: "images/apple.svg" }),
```

Save and refresh — no build step. Topic tiles and the card counter update from the data.

### Card fields

| Field | Required | Used for |
| --- | --- | --- |
| `article` | yes | Correct answer in Test |
| `noun` | yes | Word next to the input in Test |
| `title` | yes | Full phrase in Learn (auto-built by `makeCard`) |
| `emoji` | recommended | Large visual when no image is set |
| `image` | no | Picture file path (shown instead of emoji) |
| `id` | no | Stable key for the card |
| `alt` | no | Accessibility text for the image |
