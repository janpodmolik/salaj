// Konfigurace pro Sklenářství SALAJ

export const siteConfig = {
  name: "Sklenářství SALAJ Přerov",

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
    googleMapsUrl: "https://maps.app.goo.gl/9a3v9qmgEEUSpGRj7",
  },

  social: {
    facebook: "https://www.facebook.com/salajprerov",
    instagram: "https://www.instagram.com/salaj.sklenarstvi/",
  },

  openingHours: {
    days: "Po-Pá",
    hours: "7:00-16:30",
    enabled: true,
  },
} as const;
