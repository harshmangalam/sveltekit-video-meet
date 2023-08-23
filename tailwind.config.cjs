/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,svelte,ts}"],
  darkMode: "class",
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      "cupcake",
      "bumblebee",
      "emerald",
      "corporate",
      "synthwave",
      "halloween",
      "garden",
      "forest",
      "lofi",
      "fantasy",
      "luxury",
      "dracula",
      "business",
      "acid",
      "lemonade",
    ],
  },
};
