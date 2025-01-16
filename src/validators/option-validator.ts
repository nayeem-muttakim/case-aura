import { PRODUCT_PRICES } from "@/config/products";

//add colors to tailwind config file safelist
export const COLORS = [
  { label: "Black", value: "black", tw: "zinc-900" },
  {
    label: "Blue",
    value: "blue",
    tw: "blue-950",
  },
  { label: "Rose", value: "rose", tw: "rose-950" },
  { label: "Cyan", value: "cyan", tw: "cyan-800" },
] as const;

export const MODELS = {
  name: "models",
  options: [
    {
      label: "iPhone x",
      model: "iphonex",
    },
    {
      label: "iPhone 11",
      model: "iphone11",
    },
    {
      label: "iPhone 12",
      model: "iphone12",
    },
    {
      label: "iPhone 13",
      model: "iphone13",
    },
    {
      label: "iPhone 14",
      model: "iphone14",
    },
    {
      label: "iPhone 15",
      model: "iphone15",
    },
  ],
} as const;

export const MATERIALS = {
  name: "material",
  options: [
    {
      label: "Silicone",
      value: "silicone",
      description: undefined,
      price: PRODUCT_PRICES.material.silicone,
    },
    {
      label: "Soft Polycarbonate",
      value: "polycarbonate",
      description: "Scratch-resistant coating",
      price: PRODUCT_PRICES.material.polycarbonate,
    },
  ],
} as const;

export const FINISHES = {
  name: "finish",
  options: [
    {
      label: "Smooth FInish",
      value: "smooth",
      description: undefined,
      price: PRODUCT_PRICES.finish.smooth,
    },
    {
      label: "Textured Finish",
      value: "texture",
      description: "Soft grippy texture",
      price: PRODUCT_PRICES.finish.textured,
    },
  ],
} as const;
