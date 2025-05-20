# Workshop: Bildoptimierungen fürs Web

---

## Material

[PowerPoint-Folien](https://thkoelnde-my.sharepoint.com/:p:/g/personal/finn_wehn_smail_th-koeln_de/EQYpl7o6XMJMp4_0D4r4CAABavcYXY7XwfpnSwZ9omys6Q?e=1lwL5b)  
[ImageMagick](https://imagemagick.org/script/magick.php)  

#### Shell-Template

```bash
# mkdir -p <Directory-Name>
for img in /images/original/*.{jpg,jpeg,png}; do
  [ -e "$img" ] || continue
  filename=$(basename "$img")

# Code

done
```

```bash
chmod +x <Datei-Name>
```

---

## Aufgaben

### Aufgabe 0 - Repository clonen

Forke dieses Repository und clone es lokal auf deinen Laptop.

### Aufgabe 1 – Performance messen mit Lighthouse

Nutze **Lighthouse**, um die folgende Tabelle auszufüllen.

Hinweise:

- Teste im **mobilen Modus**
- Verwende den **Inkognito-Modus**, um Caching zu vermeiden

Metriken:

- “Largest Contentful Paint”
- “Avoids enormous network payloads”
- “Efficiently encode images”
- “Serve images in next-gen formats“
- “Properly size images“
- “Defer offscreen images“
- (“Image elements do not have \[explicit] width and height”)

| URL                               | Performance | LCP | Payloads | Encoding | Formats | Richtige Größe? | Offscreen | Größenangabe | Optische Auffälligkeiten? | Anmerkungen |
|-----------------------------------|-------------|-----|----------|----------|---------|-----------------|-----------|--------------|---------------------------|-------------|
| https://www.der-postillon.com/    |             |     |          |          |         |                 |           |              |                           |             |
| https://www.smashingmagazine.com/ |             |     |          |          |         |                 |           |              |                           |             |
| https://www.otto.de/              |             |     |          |          |         |                 |           |              |                           |             |
| https://www.goodreads.com/        |             |     |          |          |         |                 |           |              |                           |             |
| https://unsplash.com              |             |     |          |          |         |                 |           |              |                           |             |
| https://www.th-koeln.de/          |             |     |          |          |         |                 |           |              |                           |             |
| http://127.0.0.1:5173             |             |     |          |          |         |                 |           |              |                           |             |
|                                   |             |     |          |          |         |                 |           |              |                           |             |
|                                   |             |     |          |          |         |                 |           |              |                           |             |
|                                   |             |     |          |          |         |                 |           |              |                           |             |

---

### Aufgabe 2 – Bilder lazy-loaden

Optimiere die Komponente, in der Bilder geladen werden, sodass Bilder per Lazy Loading nachgeladen werden.

```html
<img src="..." alt="..." loading="lazy"/>
````

Beobachte:

- Wie verändert sich der Network-Tab in den DevTools?
- Welche Änderungen zeigt der Lighthouse-Report?

---

### Aufgabe 3 – Progressive JPEGs

Nutze ImageMagick, um JPEG-Bilder progressiv zu speichern:

```bash
convert original.jpg -interlace Plane progressive.jpg
```

Ersetze die bisherigen JPEGs durch die progressiven Versionen.

Beobachte:

- Gibt es visuelle Unterschiede beim Laden?
- Wie verhält sich der Network-Tab?
- Gibt es Unterschiede im Lighthouse-Ergebnis?

---

### Aufgabe 4 – Responsive Bilder mit srcset & sizes

Skaliere deine Bilder auf eine sinnvolle Maximalauflösung herunter.
Danach implementiere `srcset` und `sizes` wie folgt:

```html
<img
    src="image-800.jpg"
    srcset="
        image-400.jpg 400w,
        image-800.jpg 800w,
        image-1200.jpg 1200w
    "
    sizes="(max-width: 600px) 100vw, 800px"
    alt="Beschreibung"
/>
```

Beobachte:

- Wird nun die passende Bildgröße je nach Bildschirmbreite geladen?
- Welche Auswirkungen sind im Lighthouse oder DevTools sichtbar?

---

### Aufgabe 5 – WebP & AVIF einsetzen

Konvertiere deine Bilder in WebP und AVIF:

```bash
# WebP
convert image.jpg image.webp

# AVIF
convert image.jpg image.avif
```

Beobachte:

- Wie groß sind die Dateien vorher und nachher?
- Wie sieht der visuelle Unterschied aus?
- Hat sich deine Lighthouse Ausgabe verändert?

---

### Aufgabe 6 – picture-Tag mit Fallbacks einsetzen

Nutze den `<picture>`-Tag, um verschiedene Bildformate und Auflösungen bereitzustellen:

```html
<picture>
    <source
            srcset="
      image-400.avif 400w,
      image-800.avif 800w
    "
            type="image/avif"
    />
    <source
            srcset="
      image-400.webp 400w,
      image-800.webp 800w
    "
            type="image/webp"
    />
    <img
            src="image-800.jpg"
            srcset="
      image-400.jpg 400w,
      image-800.jpg 800w
    "
            sizes="(max-width: 600px) 100vw, 800px"
            alt="Beschreibung"
    />
</picture>
```

Stelle sicher, dass das `img`-Element als Fallback vorhanden ist.

Beobachte:

- Welche Bildquelle wird je nach User-Agent gewählt?
- Welche Auswirkungen zeigt sich in Lighthouse bei dieser Lösung?

