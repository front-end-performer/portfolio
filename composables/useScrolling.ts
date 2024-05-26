export const useScrolling = (): {
  scrollY: Ref<number>;
} => {
  const scrollY = ref<number>(0);

  const handleScroll = (): void => {
    scrollY.value = window.scrollY;
  };

  onMounted(() => {
    document.addEventListener("scroll", handleScroll);
  });

  onUnmounted(() => {
    document.removeEventListener("scroll", handleScroll);
  });

  return { scrollY };
};
