<template>
  <UContainer
    class="max-w-screen-xl pt-20 sm:pt-28 lg:px-6 relative xl:static z-10"
  >
    <UPage class="flex flex-col md:flex-row gap-4 w-full">
      <slot name="left">
        <UCard class="md:w-1/2">
          <div>
            <h3 class="text-lg font-semibold">{{ $t("globals.about") }}</h3>

            <p class="mt-4">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            </p>
          </div>

          <UDivider class="my-4" />

          <div>
            <h3 class="text-lg font-semibold">{{ $t("globals.contacts") }}</h3>

            <ul class="mt-4">
              <li class="flex items-center mb-5">
                <ULink
                  to="tel:+4915258213051"
                  active-class="text-primary"
                  inactive-class="text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200"
                >
                  <UIcon name="i-heroicons-phone" class="align-middle" />
                  +49 152 5821 3051
                </ULink>
              </li>
              <li class="flex items-center mb-5">
                <ULink
                  to="mailto:frontendperformer@gmail.com"
                  active-class="text-primary"
                  inactive-class="text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200"
                >
                  <UIcon name="i-heroicons-envelope" class="align-middle" />
                  frontendperformer@gmail.com
                </ULink>
              </li>
              <li
                class="flex items-center gap-2 mb-5 text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200"
              >
                <Icon name="ic:baseline-location-city" />
                Düsseldorf, NRW
              </li>
            </ul>
          </div>

          <UDivider class="my-4" />

          <div>
            <h3 class="text-lg font-semibold">{{ $t("globals.skills") }}</h3>

            <div class="flex gap-3 flex-wrap mt-4">
                <UBadge
                    v-for="skill in skills"
                    :key="skill.name"
                    color="white"
                    variant="solid"
                    class="hover:bg-slate-100"
                    >{{ skill.name }} - {{ skill.years }} {{ $t(skill.expirience) }}</UBadge
                  >
            </div>
          </div>

          <UDivider class="my-4" />

          <div>
            <h3 class="text-lg font-semibold">{{ $t("globals.languages") }}</h3>

            <ul class="mt-4">
              <li class="flex items-center mb-5 gap-2">
                {{ $t("languages.english.name") }} -
                {{ $t("languages.english.level") }}
              </li>
              <li class="flex items-center mb-5 gap-2">
                {{ $t("languages.german.name") }} -
                {{ $t("languages.german.level") }}
              </li>
              <li class="flex items-center mb-5 gap-2">
                {{ $t("languages.ukrainian.name") }} -
                {{ $t("languages.ukrainian.level") }}
              </li>
              <li class="flex items-center mb-5 gap-2">
                {{ $t("languages.russian.name") }} -
                {{ $t("languages.russian.level") }}
              </li>
            </ul>
          </div>
        </UCard>
      </slot>

      <slot slot="right">
        <UCard class="w-full">
          <div>
            <h3 class="text-lg font-semibold">{{ $t("work.name") }}</h3>

            <div class="w-full flex flex-col gap-y-6">
              <UCard
                v-for="company in workExpirience"
                :key="company.name"
                class="ring-0 shadow-none border-b rounded-none"
              >
                <h3 class="text-md font-semibold">{{ company.name }}</h3>
                <p class="text-xs text-gray-500 mb-2">
                  {{ $t(company.description) }}
                </p>
                <p class="text-xs font-semibold">
                  {{ company.period.from }} - {{ company.period.to }}
                </p>

                <ul class="my-4">
                  <li
                    v-for="(responsibility, index) in company.responsibilities"
                    :key="index"
                    class="text-sm mb-2 list-disc"
                  >
                    {{ $t(responsibility) }}
                  </li>
                </ul>

                <h3 class="text-sm font-semibold mb-4">TechStack</h3>
                <div class="flex flex-wrap gap-3">
                  <UBadge
                    v-for="(tech, index) in company.techstack"
                    :key="index"
                    color="white"
                    variant="solid"
                    >{{ tech }}</UBadge
                  >
                </div>
              </UCard>
            </div>
          </div>
        </UCard>
      </slot>
    </UPage>
  </UContainer>
</template>

<script setup>
const { t } = useI18n();

console.log(t("work.cheers.responsibilities"));

const skills = [
  {
    name: "HTML5",
    icon: "mdi:language-html5",
    years: 6,
    expirience: "globals.years",
  },
  {
    name: "CSS3",
    icon: "mdi:language-css3",
    years: 6,
    expirience: "globals.years",
  },
  {
    name: "SASS",
    icon: "mdi:sass",
    years: 4,
    expirience: "globals.years",
  },
  {
    name: "Tailwind",
    icon: "mdi:tailwind",
    years: 4,
    expirience: "globals.years",
  },
  {
    name: "JavaScript",
    icon: "mdi:language-javascript",
    years: 6,
    expirience: "globals.years",
  },
  {
    name: "TypeScript",
    icon: "mdi:language-typescript",
    years: 2,
    expirience: "globals.years",
  },
  {
    name: "VUE",
    icon: "mdi:vuejs",
    years: 3,
    expirience: "globals.years",
  },
  {
    name: "Nuxt",
    icon: "mdi:nuxt",
    years: 2,
    expirience: "globals.years",
  },
  { name: "React", icon: "mdi:react", years: 2, expirience: "globals.years" },
  {
    name: "RESTfull API",
    icon: "mdi:api",
    years: 3,
    expirience: "globals.years",
  },
  {
    name: "Git",
    icon: "mdi:git",
    years: 4,
    expirience: "globals.years",
  },
];

const workExpirience = [
  {
    name: "Cheers Digital Solutions Gmbh",
    description: "work.cheers.description",
    period: {
      from: "01.05.2022",
      to: t("globals.presentTime"),
    },
    responsibilities: [
      "work.cheers.responsibility1",
      "work.cheers.responsibility2",
      "work.cheers.responsibility3",
      "work.cheers.responsibility4",
    ],
    techstack: [
      "HTML5",
      "CSS3",
      "SASS",
      "SCSS",
      "JavaScript",
      "Vue2",
      "Vue3",
      "Nuxt.js",
      "Vuex / Pinia",
      "React",
      "RESTfull",
      "API",
      "PHP",
      "Jira",
      "Notion",
      "Git",
      "GitLab",
    ],
    projects: [],
  },
  {
    name: "UNITY AG",
    description: "work.unity.description",
    period: {
      from: "01.08.2020",
      to: "30.04.2022",
    },
    responsibilities: [
      "work.unity.responsibility1",
      "work.unity.responsibility2",
    ],
    techstack: [
      "HTML5",
      "CSS3",
      "SASS",
      "SCSS",
      "JavaScript",
      "Vue.js",
      "RESTfull API",
      "Microsoft SharePoint API",
      "Azure",
    ],
    projects: [],
  },
  {
    name: "The Inked Clown",
    description: "work.inkedClown.description",
    period: {
      from: "01.02.2022",
      to: null,
    },
    responsibilities: [
      "work.inkedClown.responsibility1",
      "work.inkedClown.responsibility2",
      "work.inkedClown.responsibility3",
    ],
    techstack: [
      "HTML5",
      "CSS3",
      "SASS",
      "SCSS",
      "JavaScript",
      "Vue.js",
      "RESTfull API",
      "Microsoft SharePoint API",
      "Azure",
    ],
    projects: [],
  },
  {
    name: "Coindex",
    description: "work.coindex.description",
    period: {
      from: "01.05.2019",
      to: "01.10.2019",
    },
    responsibilities: [
      "work.coindex.responsibility1",
      "work.coindex.responsibility2",
    ],
    techstack: ["HTML5", "CSS3", "SASS", "SCSS", "JavaScript", "Webflow"],
    projects: [],
  },
];
</script>
