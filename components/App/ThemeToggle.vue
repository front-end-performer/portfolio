<script setup>
const colorMode = useColorMode();
const { breakpoints } = useBreakpoints();

const isDark = computed({
  get() {
    return colorMode.value === "dark";
  },
  set() {
    colorMode.preference = colorMode.value === "dark" ? "light" : "dark";
  },
});
</script>

<template>
  <UTooltip text="Toggle theme" :ui="{ popper: { strategy: 'absolute' } }">
    <button
    v-if="breakpoints.w > 667"
      class="relative px-3 py-4 flex items-center justify-center transition hover:text-primary-500 dark:hover:text-primary-400"
      @click="isDark = !isDark"
    >
      <Icon
        aria-hidden="true"
        :name="isDark ? 'solar:sun-2-outline' : 'solar:moon-outline'"
        class="w-5 h-5"
      />
      <span class="sr-only">Toggle theme</span>
    </button>

    <button v-else class="transition hover:text-primary-500 dark:hover:text-primary-400 border-0">
      <Icon
        aria-hidden="true"
        name="solar:hamburger-menu-line-duotone"
        class="w-6 h-6"
      />
    </button>
  </UTooltip>
</template>
