<template>
  <UContainer
    class="fixed left-0 right-0 mt-4 md:mt-5 sm:left-6 sm:right-6 sm:px-0 md:px-0 lg:px-0 xl:px-6 max-w-screen-xl z-20"
  >
    <UCard
      class="w-full"
      :ui="{
        body: {
          padding: 'py-2 sm:py-2 sm:px-6',
        },
      }"
    >
      <ul class="flex justify-between items-center gap-1">
        <li v-for="link in links" :key="link.label">
          <div v-if="link.avatar" class="flex items-center gap-4">
            <UTooltip text="Open for network!" class="cursor-pointer">
              <UAvatar
                :src="!isHovered ? link.avatar.cartoon : link.avatar.original"
                :size="breakpoints.w <= 667 ? 'sm' : 'lg'"
                @mouseover="isHovered = true"
                @mouseleave="isHovered = !isHovered"
                alt="logo"
              />
            </UTooltip>
            <div class="flex flex-col items-start">
              <h3
                class="text-sm sm:text-2xl font-semibold text-slate-700 dark:text-slate-100"
              >
                {{ link.label }}
              </h3>
              <p
                class="text-xs sm:text-base text-slate-500 dark:text-slate-300"
              >
                {{ $t("globals.subhead") }}
              </p>
            </div>
          </div>

          <USelectMenu v-else v-model="updatedLocale" :options="link.languages">
            <template #leading>
              <UIcon v-if="link.icon" :name="link.icon" class="w-5 h-5" />
            </template>
          </USelectMenu>
        </li>
      </ul>
    </UCard>
  </UContainer>
</template>

<script setup lang="ts">
const { locale, defaultLocale } = useI18n();
const { breakpoints } = useBreakpoints();
const cookie = useCookie("lang");

const isHovered = ref(false);

const updatedLocale = computed({
  get: () => locale.value,
  set: (value) => {
    cookie.value = value;
    locale.value = value;
  },
});

onMounted(() => {
  if (!cookie.value) {
    locale.value = defaultLocale;
    return;
  }

  locale.value = cookie.value;
});

const links = [
  {
    label: "Oleksii Sodolinskyi",
    avatar: {
      original: "/profile_img.png",
      cartoon: "https://avatars.githubusercontent.com/u/739974?v=4",
    },
  },
  {
    label: "de",
    icon: "i-heroicons-language",
    languages: ["de", "en"],
  },
];
</script>
