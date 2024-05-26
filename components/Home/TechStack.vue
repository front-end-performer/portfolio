<template>
  <UContainer class="max-w-screen-xl text-center pb-24">
    <UTooltip
      text="Techlogies we are working with and more."
      :ui="{ popper: { strategy: 'absolute' } }"
    >
      <h2 class="text-4xl sm:text-4xl font-black text-slate-600">
        Techlogies i use
      </h2>
    </UTooltip>

    <ul class="flex justify-center mt-12 gap-12 flex-wrap">
      <li v-for="technology in technologies" :key="technology.name">
        <UTooltip
          :text="`${technology.name} - ${technology.text}`"
          :ui="{ popper: { strategy: 'absolute' } }"
        >
          <Icon
            aria-hidden="true"
            :name="technology.icon"
            class="w-14 h-14 z-10 text-slate-900"
          />
          <span class="sr-only">{{ technology.name }}</span>
        </UTooltip>
      </li>
    </ul>
  </UContainer>
</template>

<script setup>
const technologies = [
  { name: "HTML5", text: "6 years of experience", icon: "mdi:language-html5" },
  {
    name: "CSS3",
    text: "6 years of expirience",
    icon: "mdi:language-css3",
  },
  {
    name: "SASS",
    text: "4 years of expirience",
    icon: "mdi:sass",
  },
  {
    name: "Tailwind",
    text: "1 years of expirience",
    icon: "mdi:tailwind",
  },
  {
    name: "JavaScript",
    text: "6 years of expirience",
    icon: "mdi:language-javascript",
  },
  {
    name: "TypeScript",
    text: "2 years of expirience",
    icon: "mdi:language-typescript",
  },
  {
    name: "VUE",
    text: "3 years of expirience",
    icon: "mdi:vuejs",
  },
  {
    name: "Nuxt",
    text: "1.5 years of expirience",
    icon: "mdi:nuxt",
  },
  { name: "React", text: "2 years of expirience", icon: "mdi:react" },
  {
    name: "RESTfull API",
    text: "2.5 years of expirience",
    icon: "mdi:api",
  },
  {
    name: "Git",
    text: "6 years of expirience",
    icon: "mdi:git",
  },
];
</script>
