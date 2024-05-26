<template>
  <div class="containerHeight w-full relative">
    <div
      class="absolute mx-4 right-0 sm:right-24 sm:w-1/2 lg:w-1/3 top-56 sm:top-64 bg-white bg-opacity-80 p-4 rounded-md"
    >
      <h2 class="text-4xl sm:text-4xl font-black text-slate-900">
        What I Value
      </h2>

      <p
        class="font-semibold text-lg sm:text-2xl text-pretty pt-6 text-slate-600 leading-8"
      >
        Our vision difined by principle of collaboration and working together to achieve shared goals.
        Prioritizing the needs and satisfaction of our customers. And our passion for solving problems and taking bold action helps us be better in what we do.
      </p>
    </div>
    <NuxtImg
      class="float-left"
      src="/layer.svg"
      width="1010"
      height="800"
      format="webp"
      alt="image"
    />
  </div>
</template>

<script setup></script>


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