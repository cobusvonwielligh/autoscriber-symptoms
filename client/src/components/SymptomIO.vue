<script lang="ts">
import Axios from 'axios';
import Highlighter from 'vue-highlight-words'

const keywords: string[] = [];
const baseUrl = 'http://localhost:4200/';

export default {
    data() {
        return {
            payload: keywords,
        }
    },
    async mounted() {
        await Axios.get(`${baseUrl}scan-text`).then((res) => {
            //@ts-ignore
            this.payload = res?.data
            console.log('data', res?.data);
        }).catch((err) => {
            console.log("Error ", err);
        });
    },
    components: {
        Highlighter,
    },
    props: ['symptoms'],
}
</script>

<template>
<div class="wrapper">
    <div class="input-text-field">
        <input v-model="symptoms" @change="$emit('update:symptoms', symptoms)" class="search" placeholder="Enter text here..." />
    </div>

    <div class="output-text-wrapper">
        <Highlighter class="output-text" :style="{ color: 'white', }" highlightClassName="highlight" :searchWords="payload" :autoEscape="true" :caseSensitive="false" :textToHighlight="symptoms" />
    </div>

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
    width: 9rem;
    height: 2rem;
    font-size: 1rem;
}

.output-text-wrapper {
    width: 15rem;
    height: 15rem;
    overflow: auto;
    word-wrap: break-word;
    padding-top: 1rem;
}

.search {
    display: inline-block;
    font-weight: 600;
    color: #429af8;
    text-align: left;
    vertical-align: middle;
    background-color: #fafafae9;
    border: 0.0625rem solid transparent;
    padding: 1rem 1rem;
    padding-left: 1rem;
    padding-top: 1rem;
    font-size: 1rem;
    line-height: 3;
    border-radius: 0.3125rem;
    width: 15rem;
    height: 2rem;
    text-align: center;
}

.input-text-field {
    padding-top: 10rem;
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
