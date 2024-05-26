<template>
  <UContainer class="max-w-screen-xl text-left pb-24">
    <UTooltip
      text="I support with."
      :ui="{ popper: { strategy: 'absolute' } }"
    >
      <h2 class="text-4xl sm:text-4xl font-black text-slate-900">I can do</h2>
    </UTooltip>

    <ul class="flex justify-center flex-wrap gap-y-4 sm:gap-y-0 mt-12">
      <li v-for="service in services" :key="service.name" class="sm:w-1/2 h-52">
        <UCard
          class="flex flex-col text-left h-full"
          :ui="{
            ring: 'ring-0',
            shadow: 'shadow-none',
          }"
        >
          <div class="flex items-center gap-3">
            <Icon
              aria-hidden="true"
              :name="service.icon"
              class="w-8 h-8 z-10 text-slate-900"
            />
            <h2 class="text-xl font-semibold">{{ service.name }}</h2>
          </div>

          <p class="pl-11 pt-3 leading-8 font-sans font-medium text-slate-600">{{ service.text }}</p>
        </UCard>
      </li>
    </ul>
  </UContainer>
</template>

<script setup>
const services = [
  {
    name: "Applications",
    icon: "mdi:application-braces-outline",
    text: "Building webpages and web applications with popular frameworks and libraries such as Vue.js and React.js",
  },
  {
    name: "Maintaines and Optimization of exisiting code",
    icon: "mdi:code",
    text: "Making sure that existing code remains maintainable, optimized, re-usable. Enhancing performance, and longevity of websites and applications.",
  },
  {
    name: "UI / UX design",
    icon: "mdi:design",
    text: "Ensuring that the layout, typography, colors, and visual elements align with the brand identity and provide an intuitive user experience.",
  },
  {
    name: "Enhance responsivness of application",
    icon: "mdi:responsive",
    text: "Most important that the UI performs flawlessly across various devices and screen sizes - so your users always have all relevant information in view.",
  },
];
</script>
