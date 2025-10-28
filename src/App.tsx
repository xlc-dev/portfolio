import { For, onMount } from "solid-js";

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
  let carouselRef!: HTMLDivElement;

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

  const projects = [
    {
      name: "Nova",
      description:
        "A full stack Golang web application framework to build robust and scalable web applications with ease.",
      link: "https://xlc-dev.github.io/nova/",
      image: "https://xlc-dev.github.io/nova/static/img/nova.png",
    },
    {
      name: "Fssg",
      description:
        "fssg is a portable, dependency-free static site generator written entirely in POSIX shell and AWK.",
      link: "https://xlc-dev.github.io/fssg/",
      image: "https://xlc-dev.github.io/fssg/static/img/logo.png",
    },
  ];

  onMount(() => {
    if (!carouselRef) return;
    setTimeout(() => {
      const scrollWidth = carouselRef.scrollWidth;
      const clientWidth = carouselRef.clientWidth;
      const translatePercent = (scrollWidth / 2 / clientWidth) * 100;

      carouselRef.style.setProperty("--translate-percent", `-${translatePercent}%`);
    }, 150);
  });

  return (
    <>
      <div class="reveal-overlay pointer-events-none fixed inset-0 z-50 bg-[#1C1C2B]" />

      <div class="relative flex min-h-screen flex-col overflow-x-hidden text-white">
        <header class="mx-auto flex w-full max-w-6xl flex-col items-center gap-8 px-4 py-8 md:flex-row md:px-8 md:py-12">
          <img src="logodark.svg" alt="xlcdev logo" class="w-24 sm:w-28 md:w-56 lg:w-72" />
          <div class="flex-1 text-center md:text-left">
            <h1 class="text-3xl font-bold sm:text-4xl md:text-7xl lg:text-8xl">XLCDEV</h1>
            <p class="mt-4 text-xs text-white/90 sm:text-sm md:text-lg lg:text-xl">
              ICT professional with a passion for technology, sharp analytical mind, and a drive to
              continuously learn and improve.
            </p>
            <a
              href="https://github.com/xlc-dev"
              class="mt-4 inline-block rounded-xl bg-gradient-to-br from-pink-400 to-orange-300 p-[3px] transition hover:scale-105">
              <span class="block rounded-lg bg-[#0f1117] px-8 py-2 text-sm font-semibold sm:px-14 sm:text-base">
                GitHub
              </span>
            </a>
          </div>
        </header>

        <div class="px-4 md:px-8">
          <div class="mx-auto max-w-6xl space-y-8">
            <section>
              <p class="mb-4 text-xs text-white/70 sm:text-sm md:text-base">
                Technologies & tools I work with
              </p>
              <div class="w-full overflow-hidden">
                <div ref={carouselRef} class="carousel-scroll flex gap-4 whitespace-nowrap">
                  <For each={Array(2).fill(technologies).flat()}>
                    {(tech) => {
                      const Icon = tech.icon;
                      return (
                        <div class="flex shrink-0 items-center gap-2 rounded-lg bg-white/10 px-4 py-2 text-xs font-semibold sm:text-sm">
                          <Icon class="h-3 w-3 sm:h-4 sm:w-4" />
                          <span class="hidden sm:inline">{tech.name}</span>
                        </div>
                      );
                    }}
                  </For>
                </div>
              </div>
            </section>

            <section>
              <p class="mb-4 text-xs text-white/70 sm:text-sm md:text-base">Featured Projects</p>
              <div class="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <For each={projects}>
                  {(project) => (
                    <a
                      href={project.link}
                      class="group rounded-lg bg-white/10 p-4 transition hover:bg-white/20">
                      <div class="flex items-start justify-between gap-4">
                        <div class="flex-1">
                          <h3 class="text-sm font-semibold group-hover:text-pink-300 sm:text-base">
                            {project.name}
                          </h3>
                          <p class="mt-2 text-xs text-white/70 sm:text-sm">
                            {project.description}
                          </p>
                          <span class="mt-4 inline-block text-xs text-pink-400">View →</span>
                        </div>
                        <div class="h-16 w-20 shrink-0 rounded">
                          <img
                            src={project.image}
                            alt={project.name}
                            class="h-full w-full object-contain"
                          />
                        </div>
                      </div>
                    </a>
                  )}
                </For>
              </div>
            </section>
          </div>
        </div>

        <img src="wave.svg" alt="" class="h-48 w-full object-cover md:h-80" />
      </div>
    </>
  );
}
