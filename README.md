# Ambient Light Photography — Webseite
## Anleitung zum Einrichten

---

## Dateistruktur

```
ambient-light-photography/
│
├── index.html       ← Home-Seite (öffne zuerst diese)
├── gallery.html     ← Galerie-Seite
├── contact.html     ← Kontakt-Seite
│
├── style.css        ← Alle Farben, Schriften, Layouts
├── gallery.js       ← Filter & Lightbox für die Galerie
├── contact.js       ← Formular-Validierung
│
├── logo.png         ← DEIN Logo (hier ablegen)
├── about.jpg        ← Foto für die "Über mich"-Sektion (optional)
│
└── bilder/          ← Ordner für deine Fotos
    ├── berg1.jpg
    ├── berg2.jpg
    ├── tier1.jpg
    └── ...
```

---

## Schritte zum Starten

### 1. Logo einfügen
Lege dein Logo als `logo.png` in denselben Ordner wie `index.html`.
→ Es erscheint automatisch in der Navigation und im Hero-Bereich.

### 2. Bilder einfügen
Erstelle einen Ordner namens `bilder/` und lege deine Fotos darin ab.

### 3. Bilder in gallery.html eintragen
Öffne `gallery.html` und suche den Abschnitt `<!-- GALERIE-GRID -->`.
Kopiere einen bestehenden Block und passe ihn an:

```html
<div class="gallery-item" data-category="berge" data-title="Mein Bergtitel">
  <img src="bilder/mein-bild.jpg" alt="Mein Bergtitel" loading="lazy" />
  <div class="gallery-item-overlay">
    <div class="gallery-item-info">
      <span class="gallery-item-title">Mein Bergtitel</span>
      <span class="gallery-item-cat">Berge</span>
    </div>
  </div>
</div>
```

**Kategorien (data-category):**
- `berge`
- `tiere`
- `gebäude`
- `natur`
- `sonstiges`

### 4. Social Media Links anpassen
Öffne `contact.html` und ersetze:
- `dein_instagram` → deinen echten Instagram-Handle
- `dein_tiktok` → deinen echten TikTok-Handle

### 5. Schriftart "Rastanty Cortez" aktivieren (optional)
Falls du die Schriftart besitzt:
1. Lege die Datei `rastanty-cortez.woff2` in den Webseiten-Ordner
2. Öffne `style.css`
3. Entferne die Kommentarzeichen `/*` und `*/` um den `@font-face`-Block

### 6. Webseite öffnen
Doppelklicke auf `index.html` → Die Seite öffnet sich im Browser.

---

## Echte E-Mails empfangen (Formular)

Das Kontaktformular zeigt aktuell nur eine Erfolgsmeldung.
Um wirklich E-Mails zu empfangen:

**Einfachste Lösung: Formspree.io (kostenlos)**
1. Erstelle ein Konto auf [formspree.io](https://formspree.io)
2. Erstelle ein neues Formular
3. In `contact.html`: Ändere das `<form>`-Tag zu:
   ```html
   <form action="https://formspree.io/f/DEINE-ID" method="POST">
   ```
4. Entferne `id="contactForm"` und `novalidate` vom form-Tag
5. Die `contact.js` wird dann nicht mehr benötigt

---

## Webseite online stellen

Empfohlene kostenlose Hosting-Optionen:
- **Netlify**: netlify.com → Ordner einfach hochladen
- **GitHub Pages**: Kostenlos für öffentliche Repositories
- **Vercel**: vercel.com → ähnlich wie Netlify

---

*Ambient Light Photography — erstellt mit HTML, CSS & JavaScript*
