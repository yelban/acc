<script setup>
import Aside from "./ContentAside.vue";
import Section from "./ContentSection.vue";
</script>

<template>
    <content class="flex-grow flex flex-col sm:flex-row">
        <Aside />
        <Section />
    </content>
</template>
