<script setup lang="ts">
defineProps < {
    symptoms: string;
    title: string;
} > ();
</script>

<template>
<div class="wrapper">
    <div class="input-text">
        <input v-model="symptoms" class="search" placeholder="Enter text here..." />
    </div>
    <h3 class="output-text">{{ symptoms }}</h3>
</div>
</template>

<style scoped>
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

.output-text {
    text-align: center;
    word-wrap: break-word;
    width: 9rem;
}

.search {
    display: inline-block;
    font-weight: 600;
    color: #429af8;
    text-align: center;
    vertical-align: middle;
    background-color: #fafafae9;
    border: 0.0625rem solid transparent;
    padding: 0.75rem 1rem;
    padding-left: 1rem;
    padding-top: 1rem;
    font-size: 1rem;
    line-height: 3;
    border-radius: 0.3125rem;
    width: 10rem;
    text-align: center;
}

.title h1,
.title h3 {
    text-align: center;
}

@media (min-width: 1024px) {

    .title h1,
    .title h2,
    .title h3 {
        text-align: left;
    }
}
</style>
