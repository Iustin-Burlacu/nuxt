<script setup lang="ts">
  const counter = useCounter();
  useHead({
    title: 'State',
    meta: [
        {
          name: 'description',
          content: 'Description of state'
        },
        {
          name: 'keywords',
          content: 'nuxt,vue,ts'
        }
      ],
      bodyAttrs: {
        class: 'testing'
      },

  })
</script>

<template>
  <div class="flex gap-6">
    Counter: {{ counter }}
    <button @click="counter++">
      +
    </button>
    <button @click="counter--">
      -
    </button>
  </div>
</template>
