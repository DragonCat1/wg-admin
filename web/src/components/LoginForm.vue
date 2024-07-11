<template>
  <div class="login-form">
    <div class="app-logo">
      <img src="@/assets/wireguard-app.svg" alt="wireguard-app-logo">
      <span>WireGuard</span>
    </div>
    <UiCard title="Login">
      <div class="avatar">
        <img src="@/assets/avatar.svg" alt="avatar">
      </div>
      <UiInput placeholder="Password" type="password" primary/>
      <UiButton style="margin-top: 1rem;" type="primary" block size="l">Sign in</UiButton>
    </UiCard>
  </div>
</template>

<script setup lang="ts">

</script>

<style scoped lang="scss">
@import "@/style/var.scss";

.login-form {
  width: 20rem;
  max-width: 90%;
  margin: 50vh auto 0;
  transform: translateY(-80%);
  .app-logo {
    @include flex-c;
    margin-bottom: 2rem;
    text-align: center;
    font-size: 2rem;
    font-weight: 600;
    img {
      margin-right: 0.5rem;
      width: 2.8rem;
    }
  }
  .avatar{
    text-align: center;
    margin-bottom: 1rem;
    img{
      width: 5rem;
    }
  }
  .ui-card {
    ::v-deep h2 {
      text-align: center;
    }
  }
}
</style>
