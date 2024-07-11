<template>
  <div class="ui-input" :style="rootStyle" :class="rootClass">
    <input :disabled="props.disabled" :style="inputStyle" :type="type" :maxlength="maxlength" :placeholder="placeholder"/>
  </div>
</template>

<script setup lang="ts">
import {defineProps} from 'vue'

const props = defineProps({
  type: {
    type: String,
    default: 'text'
  },
  maxlength: {
    type: Number,
    default: -1
  },
  placeholder:{
    type: String,
    default: ''
  },
  height: {
    type: String,
    default: '2rem'
  },
  primary:{
    type: Boolean,
    default: false
  },
  disabled:{
    type: Boolean,
    default: false
  },
  viewMode:{
    type: Boolean,
    default: false
  }
})

const rootStyle = {

}

const rootClass ={
  'ui-input-primary':props.primary,
  'ui-input-disabled':props.disabled,
  'ui-input-view-mode':props.viewMode
}

const inputStyle = {
  lineHeight: props.height
}

</script>

<style scoped>

</style>
