<template>
  <NuxtLoadingIndicator color="#14b8a6" />

  <NuxtImg
    class="fixed right-0 z-0"
    src="/hero_new.svg"
    width="auto"
    sizes="100vw sm:50vw md:350px"
    format="webp"
    alt="image"
  />

  <AppNavbar />

  <UMain>
    <NuxtLayout>
        <ClientOnly><NuxtPage /></ClientOnly>
    </NuxtLayout>
  </UMain>

  <NuxtImg
    class="fixed bottom-0 left-0 z-0 origin-center rotate-180"
    src="/layer-yes.svg"
    width="auto"
    sizes="100vw sm:50vw md:300px"
    format="webp"
    alt="image"
  />

  <AppFooter />
</template>

<script setup>
const { finalizePendingLocaleChange } = useI18n();

onBeforeMount(() => {
  finalizePendingLocaleChange();
});
</script>

<style>
.page-enter-active,
.page-leave-active {
  transition: all 0.2s;
}

.page-leave-to {
  opacity: 0;
  transform: translateY(-5px);
}

.page-enter-from {
  opacity: 0;
  transform: translateY(5px);
}
</style>
