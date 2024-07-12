/* Ce fichier JavaScript configure PostCSS pour utiliser Tailwind CSS en tant que plugin principal, 
sans configuration spécifique pour le plugin Tailwind CSS lui-même. Il utilise des commentaires spéciaux pour documenter le type 
de la variable config, assurant ainsi une meilleure intégration et compréhension de la configuration par les outils d'édition de code et les développeurs.*/

/** @type {import('postcss-load-config').Config} */
const config = {
  plugins: {
    tailwindcss: {},
  },
};

export default config;
