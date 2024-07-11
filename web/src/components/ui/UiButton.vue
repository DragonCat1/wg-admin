<template>
  <div class="ui-button" :class="rootClass">
    <button @click="handleClick">
      <slot/>
    </button>
  </div>
</template>

<script setup lang="ts">
import {defineProps} from 'vue'
const props = defineProps({
  type: {
    type: String,
    default: ''
  },
  block: {
    type: Boolean,
    default: false
  },
  size: {
    type: String,
    default: ''
  },
})

const rootClass = {
  'ui-button-primary': props.type === 'primary',
  'ui-button-b': props.block,
  'ui-button-s': props.size === 's',
  'ui-button-l': props.size === 'l',
}

const handleClick = (event:PointerEvent)=>{
}
</script>

<style scoped lang="scss">
</style>
