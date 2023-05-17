<script setup>
import Aside from "./ContentAside.vue";
import Session from "./ContentSection.vue";
</script>

<template>
    <content class="flex-grow flex flex-col sm:flex-row">
        <Aside />
        <Session />
    </content>
</template>
