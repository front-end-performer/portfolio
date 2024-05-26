<template>
  <div class="containerHeight w-full relative">
    <div
      class="absolute mx-4 md:ml-16 ring-black md:w-2/5 top-64 sm:top-72 md:top-96"
    >
      <h2 class="text-4xl sm:text-7xl font-black text-white font-sans">
        <span class="bg-purple-800 rounded-md px-3">Hey,</span>
      </h2>
      <p
        :class="
          breakpoints.w <= 1337
            ? 'bg-gradient-to-br from-white to-transparent rounded-md py-4'
            : 'bg-transparent'
        "
        class="font-medium font-sans text-xl pt-8 text-slate-600"
      >
      I work as a front-end developer with over 4 years of experience. I specialize in creating responsive, user-friendly websites and applications using HTML, CSS, and JavaScript.
      I have a strong background in frameworks like Vue and familliar with React. In my previous role, I worked on a projects where I improved website performance and user experience."
      </p>
    </div>

    <NuxtImg
      class="float-right"
      src="/hero_new.svg"
      width="1010"
      height="800"
      format="webp"
      alt="image"
    />
  </div>
</template>

<script setup>
useSeoMeta({
  title: "Title",
  description:
    " I can supoort you with creating visual appealing, user-friendly, and high-performing websites and web applications that meet the needs of yours.",
});

const { breakpoints } = useBreakpoints();
</script>

<style scoped>
.containerHeight {
  height: 475px;
  @media only screen and (min-width: 668px) {
    height: 750px;
  }

  @media only screen and (min-width: 800px) {
    height: 800px;
  }
}
</style>
