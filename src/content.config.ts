import { defineCollection, z } from "astro:content";

const galleryCollection = defineCollection({
  type: "data",
  schema: z.object({
    title: z.string(),
    category: z.enum([
      "sprchovekouty",
      "obklady",
      "dvere",
      "zabradli",
      "zrcadla",
      "ostatni",
    ]),
    image: z.string(),
    description: z.string().optional(),
  }),
});

export const collections = {
  gallery: galleryCollection,
};
