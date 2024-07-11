<script setup lang="ts">
import LoginForm from '@/components/LoginForm.vue'
import MainStage from '@/components/MainStage.vue'
import LoginService from '@/service/login'
import { reactive } from 'vue'

const loginS = reactive(new LoginService())
loginS.login()
</script>

<template>
  <MainStage v-if="loginS.isLogin" />
  <LoginForm v-else />
</template>

<style lang="scss" scoped>
</style>
