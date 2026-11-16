import type { Project } from '@/types';

export const projects: Project[] = [
 {
  "id": 1,
  "slug": "marketwatch-id-lite",
  "title": "MarketWatch-ID Lite",
  "category": "software",
  "categoryLabel": "Software Development",
  "theme": "Financial Market Intelligence",
  "cardType": 1,
  "background": "#10367D",
  "summary": "Proyek web pemantauan pasar keuangan dengan tampilan dashboard.",
  "role": null,
  "technologies": [],
  "links": [],
  "artwork": {
   "src": "/projects/marketwatch-id-lite/artwork.webp",
   "width": 1200,
   "height": 1800,
   "alt": "Angled financial-market dashboard in a browser window with a candlestick chart, watchlist and time-series panel, overlapped by a smaller analytics card."
  },
  "decorations": [
   {
    "src": "/projects/marketwatch-id-lite/decorations/dec-01-trend-arrow.svg",
    "x": "66%",
    "y": "6%",
    "width": 18,
    "rotation": -4,
    "opacity": 1,
    "zIndex": 4,
    "animation": "draw",
    "hideOnMobile": false
   },
   {
    "src": "/projects/marketwatch-id-lite/decorations/dec-02-data-orbit.svg",
    "x": "2%",
    "y": "9%",
    "width": 34,
    "rotation": 0,
    "opacity": 0.85,
    "zIndex": 1,
    "animation": "rotate",
    "hideOnMobile": true
   },
   {
    "src": "/projects/marketwatch-id-lite/decorations/dec-03-candlesticks.svg",
    "x": "70%",
    "y": "80%",
    "width": 22,
    "rotation": 0,
    "opacity": 0.9,
    "zIndex": 4,
    "animation": "sequential-reveal",
    "hideOnMobile": false
   },
   {
    "src": "/projects/marketwatch-id-lite/decorations/dec-04-analytical-spark.svg",
    "x": "79%",
    "y": "38%",
    "width": 8,
    "rotation": 0,
    "opacity": 1,
    "zIndex": 5,
    "animation": "pulse",
    "hideOnMobile": false
   }
  ]
 },
 {
  "id": 2,
  "slug": "pollusafe-app",
  "title": "Pollusafe-App",
  "category": "software",
  "categoryLabel": "Software Development",
  "theme": "Air Quality & Environmental Monitoring",
  "cardType": 1,
  "background": "#EBEBEB",
  "summary": "Aplikasi mobile untuk memantau kualitas udara.",
  "role": "Frontend development",
  "technologies": ["Flutter", "Dart", "Riverpod"],
  "links": [{"label":"GitHub Repository","href":"https://github.com/ditorizkyka/Pollusafe-App"}],
  "artwork": {
   "src": "/projects/pollusafe-app/artwork.webp",
   "width": 1200,
   "height": 1800,
   "alt": "Smartphone showing an air-quality ring indicator and a map, in front of a layered city skyline."
  },
  "decorations": [
   {
    "src": "/projects/pollusafe-app/decorations/dec-01-airflow-ribbon.svg",
    "x": "-6%",
    "y": "66%",
    "width": 40,
    "rotation": 0,
    "opacity": 0.9,
    "zIndex": 4,
    "animation": "float",
    "hideOnMobile": false
   },
   {
    "src": "/projects/pollusafe-app/decorations/dec-02-air-particles.svg",
    "x": "60%",
    "y": "8%",
    "width": 30,
    "rotation": 0,
    "opacity": 1,
    "zIndex": 4,
    "animation": "float",
    "hideOnMobile": false
   },
   {
    "src": "/projects/pollusafe-app/decorations/dec-03-aqi-arc.svg",
    "x": "62%",
    "y": "5%",
    "width": 30,
    "rotation": 0,
    "opacity": 0.9,
    "zIndex": 1,
    "animation": "draw",
    "hideOnMobile": true
   },
   {
    "src": "/projects/pollusafe-app/decorations/dec-04-location-marker.svg",
    "x": "10%",
    "y": "38%",
    "width": 12,
    "rotation": 0,
    "opacity": 1,
    "zIndex": 5,
    "animation": "float",
    "hideOnMobile": false
   }
  ]
 },
 {
  "id": 3,
  "slug": "wave-education",
  "title": "Wave Education",
  "category": "software",
  "categoryLabel": "Software Development",
  "theme": "Interactive Programming Education",
  "cardType": 2,
  "background": "#EBEBEB",
  "summary": "Platform edukasi pemrograman interaktif.",
  "role": "Frontend development",
  "technologies": ["Flutter Web", "Dart"],
  "links": [{"label":"GitHub Repository","href":"https://github.com/ditorizkyka/Wave-Education"}],
  "artwork": {
   "src": "/projects/wave-education/artwork.webp",
   "width": 1400,
   "height": 2100,
   "alt": "Layered programming-education web interface with course cards, code editor and quiz, in front of a flowing sky-blue wave."
  },
  "decorations": [
   {
    "src": "/projects/wave-education/decorations/dec-01-education-wave.svg",
    "x": "-5%",
    "y": "50%",
    "width": 110,
    "rotation": 0,
    "opacity": 0.55,
    "zIndex": 1,
    "animation": "float",
    "hideOnMobile": false
   },
   {
    "src": "/projects/wave-education/decorations/dec-02-code-brackets.svg",
    "x": "-8%",
    "y": "8%",
    "width": 116,
    "rotation": 0,
    "opacity": 0.9,
    "zIndex": 1,
    "animation": "rotate",
    "hideOnMobile": true
   },
   {
    "src": "/projects/wave-education/decorations/dec-03-progress-trail.svg",
    "x": "36.5%",
    "y": "70%",
    "width": 28,
    "rotation": 0,
    "opacity": 1,
    "zIndex": 4,
    "animation": "sequential-reveal",
    "hideOnMobile": false
   },
   {
    "src": "/projects/wave-education/decorations/dec-04-achievement-sparkles.svg",
    "x": "4%",
    "y": "5%",
    "width": 16,
    "rotation": 0,
    "opacity": 1,
    "zIndex": 5,
    "animation": "pulse",
    "hideOnMobile": false
   }
  ]
 },
 {
  "id": 4,
  "slug": "money-mate",
  "title": "Money Mate",
  "category": "software",
  "categoryLabel": "Software Development",
  "theme": "Personal Expense Tracking",
  "cardType": 2,
  "background": "#10367D",
  "summary": "Aplikasi pencatat pengeluaran pribadi untuk mobile dan web.",
  "role": "Frontend development, aplikasi mobile dan website",
  "technologies": [],
  "links": [{"label":"GitHub Repository","href":"https://github.com/imamwijaya/Money-Mate-ABP-Projects"}],
  "artwork": {
   "src": "/projects/money-mate/artwork.webp",
   "width": 1400,
   "height": 2100,
   "alt": "Smartphone with expense list and spending donut in front of a desktop browser showing budget charts."
  },
  "decorations": [
   {
    "src": "/projects/money-mate/decorations/dec-01-floating-receipt.svg",
    "x": "4%",
    "y": "8%",
    "width": 16,
    "rotation": -8,
    "opacity": 1,
    "zIndex": 4,
    "animation": "float",
    "hideOnMobile": false
   },
   {
    "src": "/projects/money-mate/decorations/dec-02-expense-donut.svg",
    "x": "66%",
    "y": "24%",
    "width": 30,
    "rotation": 0,
    "opacity": 0.9,
    "zIndex": 1,
    "animation": "draw",
    "hideOnMobile": false
   },
   {
    "src": "/projects/money-mate/decorations/dec-03-transaction-flow.svg",
    "x": "2%",
    "y": "54%",
    "width": 30,
    "rotation": 0,
    "opacity": 0.95,
    "zIndex": 4,
    "animation": "sequential-reveal",
    "hideOnMobile": false
   },
   {
    "src": "/projects/money-mate/decorations/dec-04-calculator.svg",
    "x": "4%",
    "y": "69%",
    "width": 14,
    "rotation": 0,
    "opacity": 1,
    "zIndex": 4,
    "animation": "float",
    "hideOnMobile": false
   }
  ]
 },
 {
  "id": 5,
  "slug": "citi-bike-nyc",
  "title": "Citi Bike NYC Visualization",
  "category": "software",
  "categoryLabel": "Data Analytics",
  "theme": "Urban Mobility Data Storytelling",
  "cardType": 3,
  "background": "#EBEBEB",
  "summary": "Visualisasi data mobilitas perkotaan dan bike-sharing di New York City.",
  "role": null,
  "technologies": [],
  "links": [],
  "artwork": {
   "src": "/projects/citi-bike-nyc/artwork.webp",
   "width": 2400,
   "height": 1500,
   "alt": "Top-down stylised New York street map with bike-share routes, small analytic charts and a large bicycle."
  },
  "decorations": [
   {
    "src": "/projects/citi-bike-nyc/decorations/dec-01-bicycle-wheel.svg",
    "x": "-3%",
    "y": "52%",
    "width": 12,
    "rotation": 0,
    "opacity": 0.9,
    "zIndex": 4,
    "animation": "rotate",
    "hideOnMobile": false
   },
   {
    "src": "/projects/citi-bike-nyc/decorations/dec-02-route-line.svg",
    "x": "34%",
    "y": "16%",
    "width": 26,
    "rotation": 0,
    "opacity": 1,
    "zIndex": 3,
    "animation": "draw",
    "hideOnMobile": false
   },
   {
    "src": "/projects/citi-bike-nyc/decorations/dec-03-map-pins.svg",
    "x": "60%",
    "y": "70%",
    "width": 10,
    "rotation": 0,
    "opacity": 1,
    "zIndex": 5,
    "animation": "sequential-reveal",
    "hideOnMobile": false
   },
   {
    "src": "/projects/citi-bike-nyc/decorations/dec-04-data-grid.svg",
    "x": "8%",
    "y": "54%",
    "width": 14,
    "rotation": 0,
    "opacity": 0.8,
    "zIndex": 1,
    "animation": "fade",
    "hideOnMobile": true
   }
  ]
 },
 {
  "id": 6,
  "slug": "badminton-pose-ai",
  "title": "Dynamic Badminton Pose Classification",
  "category": "ai",
  "categoryLabel": "AI & Machine Learning",
  "theme": "Computer Vision & Human Motion Recognition",
  "cardType": 1,
  "background": "#10367D",
  "summary": "Klasifikasi pose bulu tangkis secara dinamis dengan pendekatan CNN-LSTM dan pose landmarks.",
  "role": "Penelitian dan pengembangan model CNN-LSTM",
  "technologies": [
   "Computer vision",
   "CNN-LSTM",
   "Pose landmarks"
  ],
  "links": [],
  "artwork": {
   "src": "/projects/badminton-pose-ai/artwork.webp",
   "width": 1200,
   "height": 1800,
   "alt": "Badminton player mid-swing with pose-estimation skeleton overlay and faded motion-sequence silhouettes."
  },
  "decorations": [
   {
    "src": "/projects/badminton-pose-ai/decorations/dec-01-swing-arc.svg",
    "x": "48%",
    "y": "2%",
    "width": 44,
    "rotation": 0,
    "opacity": 0.9,
    "zIndex": 4,
    "animation": "draw",
    "hideOnMobile": false
   },
   {
    "src": "/projects/badminton-pose-ai/decorations/dec-02-pose-nodes.svg",
    "x": "4%",
    "y": "40%",
    "width": 16,
    "rotation": 0,
    "opacity": 0.7,
    "zIndex": 2,
    "animation": "sequential-reveal",
    "hideOnMobile": false
   },
   {
    "src": "/projects/badminton-pose-ai/decorations/dec-03-tracking-corners.svg",
    "x": "10%",
    "y": "8%",
    "width": 80,
    "rotation": 0,
    "opacity": 0.55,
    "zIndex": 4,
    "animation": "float",
    "hideOnMobile": false
   },
   {
    "src": "/projects/badminton-pose-ai/decorations/dec-04-temporal-frames.svg",
    "x": "62%",
    "y": "89%",
    "width": 36,
    "rotation": 0,
    "opacity": 0.9,
    "zIndex": 4,
    "animation": "sequential-reveal",
    "hideOnMobile": false
   }
  ]
 },
 {
  "id": 7,
  "slug": "xauusd-forecasting",
  "title": "Multi-Horizon XAU/USD Forecasting",
  "category": "ai",
  "categoryLabel": "AI & Machine Learning",
  "theme": "Multimodal Financial Forecasting",
  "cardType": 2,
  "background": "#10367D",
  "summary": "Penelitian peramalan deret waktu XAU/USD multi-horizon dengan TCN dan sentimen berita keuangan FinBERT. Penelitian ini masih berjalan, sehingga belum ada hasil akhir yang dipublikasikan.",
  "role": "Penelitian tesis — perancangan metodologi dan eksperimen",
  "technologies": [
   "TCN",
   "FinBERT",
   "Time-series forecasting"
  ],
  "links": [],
  "artwork": {
   "src": "/projects/xauusd-forecasting/artwork.webp",
   "width": 1400,
   "height": 2100,
   "alt": "Scientific forecasting diagram: price chart, news documents with sentiment probabilities, and a temporal network branching into two forecast outputs."
  },
  "decorations": [
   {
    "src": "/projects/xauusd-forecasting/decorations/dec-01-dual-forecast.svg",
    "x": "66%",
    "y": "3%",
    "width": 28,
    "rotation": 0,
    "opacity": 1,
    "zIndex": 4,
    "animation": "draw",
    "hideOnMobile": false
   },
   {
    "src": "/projects/xauusd-forecasting/decorations/dec-02-tcn-nodes.svg",
    "x": "24%",
    "y": "56%",
    "width": 50,
    "rotation": 0,
    "opacity": 0.3,
    "zIndex": 1,
    "animation": "sequential-reveal",
    "hideOnMobile": true
   },
   {
    "src": "/projects/xauusd-forecasting/decorations/dec-03-sentiment-waves.svg",
    "x": "2%",
    "y": "50%",
    "width": 34,
    "rotation": 0,
    "opacity": 0.8,
    "zIndex": 3,
    "animation": "draw",
    "hideOnMobile": true
   },
   {
    "src": "/projects/xauusd-forecasting/decorations/dec-04-horizon-rings.svg",
    "x": "60%",
    "y": "70%",
    "width": 42,
    "rotation": 0,
    "opacity": 0.8,
    "zIndex": 1,
    "animation": "rotate",
    "hideOnMobile": true
   }
  ]
 },
 {
  "id": 8,
  "slug": "antara",
  "title": "Antara",
  "category": "creative",
  "categoryLabel": "Creative Portfolio",
  "theme": "Cinematic Duality",
  "cardType": 1,
  "background": "#10367D",
  "summary": "Karya film sinematik.",
  "role": null,
  "technologies": [],
  "links": [],
  "artwork": {
   "src": "/projects/antara/artwork.webp",
   "width": 1200,
   "height": 1800,
   "alt": "Cinematic poster-style composition split into a dark and a light vertical space, joined by a soft beam of light."
  },
  "decorations": [
   {
    "src": "/projects/antara/decorations/dec-01-film-curve.svg",
    "x": "38%",
    "y": "22%",
    "width": 24,
    "rotation": 0,
    "opacity": 0.9,
    "zIndex": 4,
    "animation": "draw",
    "hideOnMobile": false
   },
   {
    "src": "/projects/antara/decorations/dec-02-film-corners.svg",
    "x": "-4%",
    "y": "4%",
    "width": 108,
    "rotation": 0,
    "opacity": 0.8,
    "zIndex": 4,
    "animation": "fade",
    "hideOnMobile": false
   },
   {
    "src": "/projects/antara/decorations/dec-03-light-beam.svg",
    "x": "0%",
    "y": "34%",
    "width": 100,
    "rotation": 0,
    "opacity": 0.9,
    "zIndex": 3,
    "animation": "float",
    "hideOnMobile": false
   },
   {
    "src": "/projects/antara/decorations/dec-04-editorial-circle.svg",
    "x": "82%",
    "y": "88%",
    "width": 12,
    "rotation": 0,
    "opacity": 0.9,
    "zIndex": 4,
    "animation": "static",
    "hideOnMobile": false
   }
  ]
 },
 {
  "id": 9,
  "slug": "change",
  "title": "Change",
  "category": "creative",
  "categoryLabel": "Creative Portfolio",
  "theme": "Cinematic Transformation",
  "cardType": 1,
  "background": "#EBEBEB",
  "summary": "Karya pembuatan film kreatif.",
  "role": null,
  "technologies": [],
  "links": [],
  "artwork": {
   "src": "/projects/change/artwork.webp",
   "width": 1200,
   "height": 1800,
   "alt": "Grid of rigid squares gradually becoming rounded circles from top-left to bottom-right around a central transformation ring."
  },
  "decorations": [
   {
    "src": "/projects/change/decorations/dec-01-morphing-geometry.svg",
    "x": "-6%",
    "y": "60%",
    "width": 44,
    "rotation": 0,
    "opacity": 0.9,
    "zIndex": 4,
    "animation": "rotate",
    "hideOnMobile": false
   },
   {
    "src": "/projects/change/decorations/dec-02-transform-arrow.svg",
    "x": "28%",
    "y": "24%",
    "width": 40,
    "rotation": 0,
    "opacity": 1,
    "zIndex": 4,
    "animation": "draw",
    "hideOnMobile": false
   },
   {
    "src": "/projects/change/decorations/dec-03-fragmented-frame.svg",
    "x": "-8%",
    "y": "6%",
    "width": 56,
    "rotation": 0,
    "opacity": 0.35,
    "zIndex": 1,
    "animation": "float",
    "hideOnMobile": false
   },
   {
    "src": "/projects/change/decorations/dec-04-transition-dots.svg",
    "x": "88%",
    "y": "22%",
    "width": 10,
    "rotation": 0,
    "opacity": 1,
    "zIndex": 4,
    "animation": "sequential-reveal",
    "hideOnMobile": false
   }
  ]
 },
 {
  "id": 10,
  "slug": "beauty-diversity-pati",
  "title": "Beauty and Diversity in Pati",
  "category": "creative",
  "categoryLabel": "Creative Portfolio",
  "theme": "Cultural Documentary",
  "cardType": 3,
  "background": "#EBEBEB",
  "summary": "Produksi kreatif bernuansa budaya dan dokumenter.",
  "role": null,
  "technologies": [],
  "links": [],
  "artwork": {
   "src": "/projects/beauty-diversity-pati/artwork.webp",
   "width": 2400,
   "height": 1500,
   "alt": "Wide documentary-style composition of three connected panels: landscape, abstract geometric textile-like pattern, and a human portrait silhouette."
  },
  "decorations": [
   {
    "src": "/projects/beauty-diversity-pati/decorations/dec-01-landscape-contours.svg",
    "x": "2%",
    "y": "52%",
    "width": 40,
    "rotation": 0,
    "opacity": 0.9,
    "zIndex": 4,
    "animation": "draw",
    "hideOnMobile": false
   },
   {
    "src": "/projects/beauty-diversity-pati/decorations/dec-02-documentary-frame.svg",
    "x": "5%",
    "y": "6%",
    "width": 34,
    "rotation": 0,
    "opacity": 0.9,
    "zIndex": 4,
    "animation": "fade",
    "hideOnMobile": false
   },
   {
    "src": "/projects/beauty-diversity-pati/decorations/dec-03-geographic-marker.svg",
    "x": "80%",
    "y": "56%",
    "width": 8,
    "rotation": 0,
    "opacity": 1,
    "zIndex": 5,
    "animation": "pulse",
    "hideOnMobile": false
   },
   {
    "src": "/projects/beauty-diversity-pati/decorations/dec-04-cultural-pattern.svg",
    "x": "-3%",
    "y": "0%",
    "width": 20,
    "rotation": 0,
    "opacity": 0.35,
    "zIndex": 1,
    "animation": "static",
    "hideOnMobile": true
   }
  ]
 },
 {
  "id": 11,
  "slug": "reaksi",
  "title": "Reaksi",
  "category": "creative",
  "categoryLabel": "Creative Portfolio",
  "theme": "Expressive Cinematic Rhythm",
  "cardType": 3,
  "background": "#10367D",
  "summary": "Karya pembuatan film kreatif.",
  "role": null,
  "technologies": [],
  "links": [],
  "artwork": {
   "src": "/projects/reaksi/artwork.webp",
   "width": 2400,
   "height": 1500,
   "alt": "Dynamic montage of overlapping rotated film frames with abstract silhouettes and strong diagonal motion lines."
  },
  "decorations": [
   {
    "src": "/projects/reaksi/decorations/dec-01-impact-rings.svg",
    "x": "26%",
    "y": "-6%",
    "width": 40,
    "rotation": 0,
    "opacity": 0.45,
    "zIndex": 1,
    "animation": "draw",
    "hideOnMobile": false
   },
   {
    "src": "/projects/reaksi/decorations/dec-02-motion-strokes.svg",
    "x": "70%",
    "y": "4%",
    "width": 20,
    "rotation": 0,
    "opacity": 0.95,
    "zIndex": 4,
    "animation": "sequential-reveal",
    "hideOnMobile": false
   },
   {
    "src": "/projects/reaksi/decorations/dec-03-film-frames.svg",
    "x": "0%",
    "y": "36%",
    "width": 22,
    "rotation": 0,
    "opacity": 0.9,
    "zIndex": 4,
    "animation": "parallax",
    "hideOnMobile": false
   },
   {
    "src": "/projects/reaksi/decorations/dec-04-reaction-spark.svg",
    "x": "60%",
    "y": "40%",
    "width": 9,
    "rotation": 12,
    "opacity": 1,
    "zIndex": 5,
    "animation": "pulse",
    "hideOnMobile": false
   }
  ]
 },
 {
  "id": 12,
  "slug": "vlog-cegah-narkoba",
  "title": "Vlog Cegah Tangkal Narkoba",
  "category": "creative",
  "categoryLabel": "Creative Portfolio",
  "theme": "Social Awareness Video Production",
  "cardType": 3,
  "background": "#EBEBEB",
  "summary": "Produksi video edukasi untuk kesadaran bahaya narkoba.",
  "role": null,
  "technologies": [],
  "links": [],
  "artwork": {
   "src": "/projects/vlog-cegah-narkoba/artwork.webp",
   "width": 2400,
   "height": 1500,
   "alt": "Educational video-production illustration: monitor with presenter silhouette, microphone, camera, speech bubble and editing timeline."
  },
  "decorations": [
   {
    "src": "/projects/vlog-cegah-narkoba/decorations/dec-01-video-viewfinder.svg",
    "x": "18%",
    "y": "6%",
    "width": 64,
    "rotation": 0,
    "opacity": 0.9,
    "zIndex": 4,
    "animation": "float",
    "hideOnMobile": false
   },
   {
    "src": "/projects/vlog-cegah-narkoba/decorations/dec-02-communication-waves.svg",
    "x": "15%",
    "y": "8%",
    "width": 12,
    "rotation": 0,
    "opacity": 1,
    "zIndex": 4,
    "animation": "draw",
    "hideOnMobile": false
   },
   {
    "src": "/projects/vlog-cegah-narkoba/decorations/dec-03-play-symbol.svg",
    "x": "84%",
    "y": "2%",
    "width": 9,
    "rotation": 0,
    "opacity": 1,
    "zIndex": 5,
    "animation": "float",
    "hideOnMobile": false
   },
   {
    "src": "/projects/vlog-cegah-narkoba/decorations/dec-04-awareness-shield.svg",
    "x": "20%",
    "y": "58%",
    "width": 6,
    "rotation": 0,
    "opacity": 1,
    "zIndex": 4,
    "animation": "fade",
    "hideOnMobile": false
   }
  ]
 },
 {
  "id": 13,
  "slug": "kanvas-merah",
  "title": "Kanvas Merah",
  "category": "creative",
  "categoryLabel": "Creative Portfolio",
  "theme": "Artistic Cinematic Expression",
  "cardType": 2,
  "background": "#10367D",
  "summary": "Produksi kreatif sinematik.",
  "role": null,
  "technologies": [],
  "links": [],
  "artwork": {
   "src": "/projects/kanvas-merah/artwork.webp",
   "width": 1400,
   "height": 2100,
   "alt": "Large abstract painted canvas with sweeping sky-blue, navy and white strokes under dramatic light on an easel."
  },
  "decorations": [
   {
    "src": "/projects/kanvas-merah/decorations/dec-01-brushstroke.svg",
    "x": "-8%",
    "y": "16%",
    "width": 74,
    "rotation": -18,
    "opacity": 0.85,
    "zIndex": 4,
    "animation": "draw",
    "hideOnMobile": false
   },
   {
    "src": "/projects/kanvas-merah/decorations/dec-02-paint-fragments.svg",
    "x": "64%",
    "y": "74%",
    "width": 30,
    "rotation": 0,
    "opacity": 0.9,
    "zIndex": 4,
    "animation": "fade",
    "hideOnMobile": false
   },
   {
    "src": "/projects/kanvas-merah/decorations/dec-03-artistic-frame.svg",
    "x": "6%",
    "y": "10%",
    "width": 88,
    "rotation": 0,
    "opacity": 0.5,
    "zIndex": 4,
    "animation": "draw",
    "hideOnMobile": false
   },
   {
    "src": "/projects/kanvas-merah/decorations/dec-04-artistic-seal.svg",
    "x": "70%",
    "y": "2%",
    "width": 24,
    "rotation": 0,
    "opacity": 1,
    "zIndex": 5,
    "animation": "rotate",
    "hideOnMobile": false
   }
  ]
 }
];
