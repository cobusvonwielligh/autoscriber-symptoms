<script setup lang="ts">
  import SymptomIO from "./components/SymptomIO.vue";
  const devDate = new Date("02-08-2022").toDateString();
  const testSymptoms = ['test', 'foo'];
  const description = "";

</script>

<template>
  <header>
    <img alt="Autoscriber Logo" class="logo" src="./assets/logo.png" />

    <div class="title">
      <h2>Technical Assessment</h2>
    </div>
  </header>

  <div class="body-wrap">
    <div>
      <a class="button" href="#todo">Find symptoms in text</a>
    </div>

    <div class="wrapper">
      <SymptomIO title="Technical Assessment" symptoms="" :keywords=testSymptoms description={{description}} />
    </div>
  </div>

  <footer>
    <h3 class="footer-text">
      Cobus von Wielligh | {{ devDate }}
    </h3>
  </footer>
</template>

<style scoped>
header {
  line-height: 1.25;
}

.logo {
  display: block;
  max-width: 200px;
  max-height: 560px;
  width: auto;
  height: auto;
  background-color: rgb(255, 255, 255);
  border-radius: 0.3125rem;
}

.button {
  display: inline-block;
  font-weight: 600;
  color: #429af8;
  text-align: center;
  vertical-align: middle;
  background-color: #adcef152;
  border: 0.0625rem solid transparent;
  padding: 0.75rem 1rem;
  padding-left: 1rem;
  font-size: 1rem;
  line-height: 3;
  border-radius: 0.3125rem;
  width: 15rem;
  box-shadow: 0.2rem 0.2rem 0.2rem 0;
}

h1 {
  font-weight: 500;
  font-size: 2.6rem;
  top: -10px;
}

h2 {
  font-size: 2.1rem;
  font-weight: 500;
}

h3 {
  font-size: 1.2rem;
}

.footer-text {
  color: rgba(235, 235, 235, 0.212);
  display: inline;
  padding-top: 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  .button {
    display: flex;
    place-items: right;
    margin-bottom: 0.5rem;
    text-align: center;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
