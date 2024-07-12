/* Ce fichier configure Tailwind CSS dans un projet TypeScript en spécifiant les chemins des fichiers à analyser, 
en étendant le thème avec des arrière-plans personnalisés, et en initialisant la configuration des plugins. Cela permet 
d'utiliser Tailwind CSS de manière efficace et personnalisée dans le développement d'interfaces utilisateur. */

import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;
