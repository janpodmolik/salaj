// Konfigurace pro Sklenářství SALAJ

export const siteConfig = {
  name: "Sklenářství SALAJ Přerov",
  tagline: "Více než 30 let zkušeností",
  description:
    "Kvalitní sklenářské práce, sprchové kouty, obklady, dveře, zábradlí. Více než 30 let zkušeností.",

  contact: {
    phone: "604 762 150",
    phoneLink: "604762150",
    email: "sklenarstvi@salaj.cz",
    address: {
      street: "Gen. Fajtla 3483/12",
      detail: "(areál Želátovských kasáren)",
      city: "Přerov",
      zip: "750 02",
      full: "Gen. Fajtla 3483/12, (areál Želátovských kasáren), 750 02 Přerov",
    },
    googleMapsUrl: "https://maps.google.com/?q=Gen.+Fajtla+3483/12,+Přerov",
  },

  social: {
    facebook: "https://www.facebook.com/salajprerov",
  },

  openingHours: {
    days: "Po-Pá",
    hours: "7:00-16:30",
    enabled: true,
  },

  emergency: {
    enabled: true,
    message: "Řešíme i havarijní situace",
  },

  company: {
    foundedYear: 1994,
    yearsInBusiness: 30,
    coverage: ["Česká republika", "Slovensko", "Německo"],
    equipment: [
      "CNC řezačka Intermac (2016)",
      "10kotoučová bruska Bevone (2016)",
    ],
  },

  services: [
    {
      title: "Sprchové kouty",
      description:
        "Kompletní řešení sprchových koutů na míru. Od návrhu až po finální realizaci.",
      features: [
        "Sprchové kouty na míru",
        "Walk-in sprchovací zóny",
        "Skleněné sprchové závěsy",
        "Bezpečnostní skla",
      ],
    },
    {
      title: "Skleněné obklady",
      description:
        "Moderní skleněné obklady do kuchyní a koupelen. Elegantní a praktické řešení.",
      features: [
        "Lakobel a laminované sklo",
        "Bezpečnostní obklady",
        "Barevné varianty",
        "Snadná údržba",
      ],
    },
    {
      title: "Dveře a příčky",
      description:
        "Celoskleněné dveře a interiérové příčky. Moderní design a kvalitní provedení.",
      features: [
        "Posuvné i otočné dveře",
        "Skleněné příčky",
        "Bezpečnostní skla",
        "Různé typy kovacích kování",
      ],
    },
    {
      title: "Zábradlí",
      description:
        "Skleněná zábradlí pro schodiště, balkony a terasy. Bezpečnost a moderní vzhled.",
      features: [
        "Interiérová zábradlí",
        "Exteriérová zábradlí",
        "Různé systémy uchycení",
        "Bezpečnostní skla",
      ],
    },
    {
      title: "Montáže a instalace",
      description:
        "Profesionální montáže všech sklenářských konstrukcí. Rychle a kvalitně.",
      features: [
        "Montáž sprchových koutů",
        "Instalace zábradlí",
        "Montáž dveří a příček",
        "Zaměření a instalace",
      ],
    },
    {
      title: "Opracování skla",
      description:
        "Broušení, leštění a úpravy skla na CNC strojích. Přesnost a kvalita.",
      features: [
        "Řezání skla na míru",
        "Broušení hran",
        "Vrtání otvorů",
        "CNC opracování",
      ],
    },
  ],

  additionalServices: [
    {
      title: "Druhy skel",
      description:
        "Zrcadla, ornamentní skla, barevná skla (lakobely), skla do krbových dvířek",
    },
    {
      title: "Doplňkové služby",
      description:
        "Osazení skel v bytě, na firmě, návrhy obkladů na počítači, prodej kování",
    },
    {
      title: "Opravy a údržba",
      description: "Opravy a výměny skleněných výplní, údržba sprchových koutů",
    },
  ],

  gallery: {
    categories: [
      { id: "sprchovekouty", label: "Sprchové kouty" },
      { id: "obklady", label: "Skleněné obklady" },
      { id: "dvere", label: "Dveře a příčky" },
      { id: "zabradli", label: "Zábradlí" },
      { id: "montaze", label: "Montáže" },
      { id: "opracovani", label: "Opracování" },
    ],
  },
} as const;
