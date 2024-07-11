<template>
  <div class="ui-card" :style="rootStyle">
    <slot name="title">
      <h2>{{ title }}</h2>
    </slot>
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue'

const props = defineProps({
  title: {
    type: String,
    default: ''
  },
  width: {
    type: String,
    default: '100%'
  },
  height: {
    type: String,
    default: 'auto'
  },
  padding: {
    type: String,
    default: '1.5rem'
  },
})

const rootStyle = {
  width: props.width,
  height: props.height,
  padding: props.padding
}

</script>
