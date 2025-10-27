import { For } from "solid-js";

import ReactIcon from "~icons/catppuccin/typescript-react";
import SvelteIcon from "~icons/catppuccin/svelte";
import TypeScriptIcon from "~icons/catppuccin/typescript";
import JavaScriptIcon from "~icons/catppuccin/javascript";
import HtmlIcon from "~icons/catppuccin/html";
import CssIcon from "~icons/catppuccin/css3";
import CIcon from "~icons/catppuccin/c";
import LuaIcon from "~icons/catppuccin/lua";
import ZigIcon from "~icons/catppuccin/zig";
import SqlIcon from "~icons/catppuccin/database";
import PythonIcon from "~icons/catppuccin/python";
import LinuxIcon from "~icons/catppuccin/folder-linux";
import GoIcon from "~icons/catppuccin/go";
import SolidJsIcon from "~icons/catppuccin/solid";

export default function App() {
  const technologies = [
    { name: "TypeScript", icon: TypeScriptIcon },
    { name: "JavaScript", icon: JavaScriptIcon },
    { name: "React", icon: ReactIcon },
    { name: "Svelte", icon: SvelteIcon },
    { name: "SolidJS", icon: SolidJsIcon },
    { name: "HTML", icon: HtmlIcon },
    { name: "CSS", icon: CssIcon },
    { name: "Python", icon: PythonIcon },
    { name: "Go", icon: GoIcon },
    { name: "Zig", icon: ZigIcon },
    { name: "C", icon: CIcon },
    { name: "Lua", icon: LuaIcon },
    { name: "SQL", icon: SqlIcon },
    { name: "Linux", icon: LinuxIcon },
  ];

  return (
    <>
      <div class="reveal-overlay pointer-events-none fixed inset-0 z-50 bg-[#1C1C2B]" />

      <div class="relative min-h-screen overflow-hidden bg-[#1C1C2B] text-white">
        <div class="mx-auto flex max-w-6xl flex-col items-center justify-between gap-8 px-4 py-6 md:flex-row md:px-8 md:py-24">
          <div class="order-2 w-full flex-1 text-center md:order-1 md:text-left">
            <h1 class="text-5xl leading-tight font-extrabold drop-shadow-2xl sm:text-6xl md:text-8xl lg:text-9xl">
              XLCDEV
            </h1>

            <p class="mt-4 text-base font-medium text-white/90 sm:text-lg md:text-xl lg:text-2xl">
              ICT professional with a passion for technology, sharp analytical mind, and a drive to
              continuously learn and improve.
            </p>

            <div class="mt-8">
              <a
                href="https://github.com/xlc-dev"
                aria-label="View my projects"
                class="inline-block transform rounded-xl bg-gradient-to-br from-pink-400 to-orange-300 p-[3px] transition hover:scale-105">
                <span class="block rounded-lg bg-[#0f1117] px-8 py-2 text-base font-semibold text-white sm:px-14 sm:py-2.5 sm:text-lg">
                  GitHub
                </span>
              </a>
            </div>
          </div>

          <div class="order-1 w-full md:order-2 md:flex md:w-1/2 md:items-center md:justify-end">
            <img
              src="logodark.svg"
              alt="xlcdev logo"
              class="mx-auto w-40 drop-shadow-2xl sm:w-56 md:w-80 lg:w-[420px]"
            />
          </div>
        </div>

        <div class="relative mx-auto max-w-6xl px-4 md:px-8">
          <div class="mb-8">
            <p class="text-base text-white/70 sm:text-lg md:text-lg">
              Technologies & tools I work with:
            </p>
          </div>

          <div class="overflow-hidden">
            <div class="carousel-scroll flex gap-2 whitespace-nowrap sm:gap-4">
              <For each={[...technologies, ...technologies]}>
                {(tech) => {
                  const Icon = tech.icon;
                  return (
                    <div class="inline-flex shrink-0 items-center gap-2 rounded-lg bg-white/10 px-3 py-2 text-sm font-semibold text-white transition hover:bg-white/20 sm:px-6 sm:py-3 sm:text-base">
                      <Icon class="h-4 w-4 sm:h-5 sm:w-5" />
                      <span class="hidden sm:inline">{tech.name}</span>
                    </div>
                  );
                }}
              </For>
            </div>
          </div>
        </div>

        <img src="wave.svg" alt="" class="h-48 w-full object-cover md:h-80" />
      </div>
    </>
  );
}
