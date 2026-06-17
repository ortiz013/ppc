# UG Open — First Serve

A single-page, static site for Ultima Genomics' first table tennis tournament.
Plain HTML/CSS/JS — no build step, no dependencies.

## Files
```
ug-open/
├── index.html      # the page (entry point)
├── style.css       # all styling + the rally animation
├── script.js       # countdown timer (edit the date here)
├── .nojekyll        # tells GitHub Pages to skip Jekyll processing
└── README.md
```

## Make it yours
- **Event date/time:** open `script.js`, change the `EVENT_DATE` value.
- **Copy & details:** date, venue, schedule, prizes all live in `index.html`.
- **Colors:** the palette is defined as CSS variables at the top of `style.css`.
- **Register button:** currently a `mailto:` — point it at a Form, Jira, or portal link.

## Deploy to GitHub Pages
1. Create a new repo and push these files to the `main` branch
   (put them at the repo root, not inside a `ug-open/` folder).
   ```bash
   git init
   git add .
   git commit -m "UG Open site"
   git branch -M main
   git remote add origin https://github.com/<you>/<repo>.git
   git push -u origin main
   ```
2. Repo **Settings → Pages**.
3. Under **Build and deployment**, set **Source: Deploy from a branch**,
   **Branch: `main` / `(root)`**, then **Save**.
4. Wait ~1 minute. Your site is live at
   `https://<you>.github.io/<repo>/`.

### Custom domain (optional)
Add your domain under Settings → Pages → Custom domain. GitHub creates a
`CNAME` file for you and provisions HTTPS.
