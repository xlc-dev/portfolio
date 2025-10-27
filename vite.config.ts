import { defineConfig } from "vite";
import solid from "vite-plugin-solid";
import tailwindcss from "@tailwindcss/vite";
import Icons from "unplugin-icons/vite";

export default defineConfig({
  base: "/portfolio/",
  plugins: [solid(), tailwindcss(), Icons({ compiler: "solid" })],
});
