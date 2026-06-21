import type { CampsiteConfig } from "../types";

/**
 * Romantik Camping Fernsteinsee — Naturresort in Nassereith/Tirol.
 * Inhalte zu 100 % aus raw/digest dieses Leads. Du-Anrede, Original-Palette, heroVariant "center".
 * Platz liegt ~5 Gehminuten am Gebirgsbach zum Fernsteinsee → KEIN `see`-Feld (near ≠ on).
 */
const IMG = "/campsites/camping-fernsteinsee";

const fernsteinsee: CampsiteConfig = {
  name: "Romantik Camping Fernsteinsee",
  shortName: "Fernsteinsee",
  slug: "camping-fernsteinsee",
  ort: "Nassereith",
  region: "Tirol",
  brandKind: "Romantik Camping",
  regionLong: "Naturresort Fernsteinsee · Nassereith · Tirol · Österreich",

  heroVariant: "center",

  claim: "Dein Sommer im Naturresort am Fernsteinsee",
  claimEmphasis: "am Fernsteinsee",
  emailDetail: "euer Naturresort rund um den Fernsteinsee",
  intro:
    "Ein 280.000 m² großes Naturresort zwischen zwei Bergseen, unter dem Schloss Fernstein: weitläufige Stellplätze ohne Dauercamper, glasklare Gebirgsbäche und der Fernsteinsee nur fünf Gehminuten entfernt.",

  logo: { src: `${IMG}/logo-eac4fb920b.png`, alt: "Romantik Camping Fernsteinsee — Ihr Naturresort" },

  statement: {
    text: "Zwischen Fernstein- und Samarangersee liegt dein Platz — fünf Gehminuten am Gebirgsbach entlang, und du stehst am Wasser.",
    emphasis: "fünf Gehminuten",
  },

  pillars: [
    {
      title: "Mitten im Naturresort",
      text: "Rund 280.000 m² Wald und Wiese auf 1.000 m, weitläufig angelegt und ganz ohne Dauercamper.",
      image: { src: `${IMG}/gallery-414089b6c9.webp`, alt: "Weitläufige Stellplätze des Camping Fernsteinsee mit Bergkulisse" },
    },
    {
      title: "Zwei smaragdgrüne Bergseen",
      text: "Fernstein- und Samarangersee mit glasklarem Wasser, Inseln und der Ruine Sigmundsburg mittendrin.",
      image: { src: `${IMG}/gallery-16457f5ff7.webp`, alt: "Ruderboot auf dem Fernsteinsee vor dem Schloss Fernstein" },
    },
    {
      title: "Unter dem Schloss Fernstein",
      text: "Über dem Platz thront das Schloss Fernstein — eine romantische Kulisse mitten in den Tiroler Bergen.",
      image: { src: `${IMG}/hero-2c7374cf8a.webp`, alt: "Schloss Fernstein und Hotel über dem Naturresort" },
    },
  ],

  usps: [
    "280.000 m² Naturresort",
    "Drei Stellplatz-Kategorien",
    "Sauna in der Villa Lorea",
    "Bootsverleih am Fernsteinsee",
    "Hunde willkommen",
    "Kein Dauercamper",
  ],

  trust: {
    heading: "Hier ist die Natur der eigentliche Luxus",
    headingEmphasis: "die Natur",
    intro:
      "Ein weitläufiges Naturresort ohne Dauercamper, zwischen zwei Bergseen und unter dem Schloss Fernstein — vom ORF 2022 zum „Schönsten Platz Tirols“ gewählt.",
  },

  awards: [{ label: "ORF-Wahl: Schönster Platz Tirols 2022" }],

  saison: { von: "Mai", bis: "September" },

  hero: {
    aerial: { src: `${IMG}/hero-a9e03c0319.webp`, alt: "Grüne Insel und Schwanenboot auf dem smaragdgrünen Fernsteinsee" },
  },

  breather: {
    image: { src: `${IMG}/gallery-c53f5a52a3.webp`, alt: "Luftaufnahme des Naturresorts Fernsteinsee mit See und Schloss" },
    line: "280.000 m² Natur zwischen zwei Bergseen.",
  },

  camping: {
    heading: "Dein Platz im Naturresort",
    intro:
      "Drei Stellplatz-Kategorien vom einfachen Zeltplatz bis zum Komfortplatz mit Strom und Wasser — dazu Stüberl, Minimarkt und der Gebirgsbach gleich nebenan.",
    features: [
      {
        title: "Stellplätze mit Strom & Wasser",
        text: "Komfort- und Luxusplätze mit Stromanschluss, Wasser und Abwasser — eben angelegt für Wohnwagen und Wohnmobil.",
        image: { src: `${IMG}/gallery-46c0f3c3a0.webp`, alt: "Wohnmobil-Stellplatz mit Strom am Camping Fernsteinsee" },
      },
      {
        title: "Naturnahe Zeltplätze",
        text: "Die A-Kategorie sind reine Zeltplätze im Grünen mit öffentlichen Brunnen und Warmwasserduschen inklusive.",
        image: { src: `${IMG}/gallery-5e23268262.webp`, alt: "Familie auf naturnahem Zeltplatz im Grünen am Camping Fernsteinsee" },
      },
      {
        title: "Campingstüberl & Terrasse",
        text: "Gemütlicher Aufenthaltsraum mit gratis WLAN, TV und Minimarkt, dazu eine große, teils überdachte Terrasse.",
        image: { src: `${IMG}/gallery-3777806a74.webp`, alt: "Terrasse des Campingstüberls am Camping Fernsteinsee" },
      },
      {
        title: "Minimarkt & Pizzaservice",
        text: "Ofenfrische Pizza, Eis, Getränke und das Nötigste für den Tag gibt es direkt am Campinggebäude.",
        image: { src: `${IMG}/amenity-320c680dd2.webp`, alt: "Minimarkt mit Waren am Camping Fernsteinsee" },
      },
      {
        title: "Am Gebirgsbach",
        text: "Ein glasklarer Gebirgsbach fließt durch den Park — ideal zum Plantschen und für kühle Füße im Sommer.",
        image: { src: `${IMG}/gallery-d40e2d6677.webp`, alt: "Holzbrücke über den glasklaren Gebirgsbach im Naturresort Fernsteinsee" },
      },
      {
        title: "Hunde willkommen",
        text: "Bis zu zwei Vierbeiner dürfen mit — für den Spaziergang rund um den Fernsteinsee ein kleines Paradies.",
        image: { src: `${IMG}/gallery-4c2211cac3.webp`, alt: "Weitläufige grüne Parkanlage des Camping Fernsteinsee mit schattigem Spazierweg zwischen Bäumen" },
      },
    ],
  },

  kinder: {
    heading: "Für kleine Entdecker",
    intro: "Spielplatz, Boote und ein Bach zum Stauen — hier sind Kinder den ganzen Tag draußen.",
    features: [
      {
        title: "Spielplatz",
        text: "Schaukeln, Rutsche und Karussell mitten im Grünen — gleich neben den Stellplätzen.",
        image: { src: `${IMG}/gallery-2ba66dcb91.webp`, alt: "Spielplatz mit Schaukeln am Camping Fernsteinsee" },
      },
      {
        title: "Boote & Spielwiese",
        text: "Schwanen- und Tretboote am See, dazu Fußball, Volleyball, Tischtennis und Gartenschach.",
        image: { src: `${IMG}/gallery-4418e7feb9.webp`, alt: "Schwanen- und Tretboote am Bootssteg des Fernsteinsees" },
      },
    ],
  },

  aktivitaeten: {
    heading: "Tag am Wasser",
    intro: "Der Fernsteinsee und seine Berge liegen direkt vor der Tür.",
    items: [
      {
        title: "Bootsverleih am Fernsteinsee",
        text: "Mit Ruder-, Tret- oder Schwanenboot um die Insel mit der Ruine Sigmundsburg gleiten.",
        image: { src: `${IMG}/gallery-86b7cbd179.webp`, alt: "Ruderboot auf dem klaren Wasser des Fernsteinsees" },
      },
      {
        title: "Spazieren & Wandern",
        text: "Rund um den See, hinauf zur Zugspitz-Aussicht oder gemütlich am Ufer entlang — Wege gibt es genug.",
        image: { src: `${IMG}/gallery-e1513c8f2e.webp`, alt: "Spazierweg am Fernsteinsee mit smaragdgrünem Wasser und Bergkulisse im Sommer" },
      },
    ],
  },

  anreise: {
    heading: "Anfahrt nach Nassereith",
    modes: [
      {
        title: "Mit dem Auto",
        text: "A12 Richtung Innsbruck, Abfahrt Mötz, weiter Richtung Fernpass/Reutte und über die Umfahrung Nassereith durch die Tunnel — rund 3 km bis zum Ziel.",
      },
      {
        title: "Mit der Bahn",
        text: "Die nächsten Bahnhöfe liegen rund 20 km entfernt, von dort mit Taxi oder Bus weiter nach Fernstein.",
      },
      {
        title: "Mit dem Flugzeug",
        text: "Flughafen Innsbruck 50 km, Allgäu Airport Memmingen 110 km, München 150 km.",
      },
    ],
  },

  galerie: {
    heading: "Rund um den Fernsteinsee",
    headingEmphasis: "Fernsteinsee",
    intro: "Naturresort, Bergseen und gemütliche Plätze — ein paar Eindrücke aus Fernstein.",
    tag: "Mai bis September",
    moreCount: 18,
    images: [
      { src: `${IMG}/gallery-054a266f84.webp`, alt: "Campingstüberl mit Blumengarten im Naturresort Fernsteinsee" },
      { src: `${IMG}/gallery-61c99ecc5a.webp`, alt: "Schloss Fernstein über dem Campingplatz" },
      { src: `${IMG}/hero-6e2a5ec994.webp`, alt: "Bootssteg am Fernsteinsee mit Tret- und Schwanenbooten" },
      { src: `${IMG}/hero-466fad37d9.webp`, alt: "Sonniger Zeltplatz unter Bäumen im Camping Fernsteinsee" },
    ],
  },

  booking: {
    heading: "Frag deinen Platz am Fernsteinsee an",
    headingEmphasis: "am Fernsteinsee",
    intro:
      "Sag uns Zeitraum und Kategorie — wir melden uns persönlich. Eine Reservierung ist meist nicht nötig, ein freier Platz fast immer da.",
    pricesArePlaceholder: false,
    priceNote:
      "ab-Preise Nebensaison · Stellplatz pro Nacht · zzgl. € 9,90 pro Person, Ortstaxe € 3,00 & Hund € 5,90 · Hauptsaison höher",
    highlight: {
      title: "Treuerabatt",
      text: "Ab der 3. Nacht 10 % und ab der 5. Nacht 15 % Rabatt auf die Platzgebühr.",
    },
    categories: [
      { id: "a-standard", label: "A · Standard (Zelt)", perNight: 9.5, perExtraGuest: 9.9 },
      { id: "b-komfort", label: "B · Komfort", perNight: 18.9, perExtraGuest: 9.9 },
      { id: "c-luxus", label: "C · Luxus", perNight: 22.5, perExtraGuest: 9.9 },
    ],
  },

  kontakt: {
    coords: { lat: 47.341754, lng: 10.815942 },
    tel: "+43 5265 5210",
    telHref: "tel:+4352655210",
    mail: "welcome@camping-fernsteinsee.at",
    facebook: "https://www.facebook.com/Fernsteinsee",
    adresse: "Fernstein 475 · 6465 Nassereith · Tirol",
  },

  languages: ["DE"],

  nav: [
    {
      label: "Camping",
      href: "#camping",
      children: [
        { label: "Stellplätze", href: "#camping" },
        { label: "Campingstüberl", href: "#camping" },
      ],
    },
    { label: "Familie", href: "#kinder" },
    { label: "Aktiv", href: "#aktivitaeten" },
    {
      label: "Preise & Lage",
      href: "#booking",
      children: [
        { label: "Preise", href: "#booking" },
        { label: "Anreise", href: "#anreise" },
      ],
    },
  ],
};

export default fernsteinsee;
