<script setup>
import '../ark/app';

import Content from './components/Content.vue';
import Footer from './components/Footer.vue';
import Header from './components/Header.vue';
</script>

<template>
    <div class="text-[#005087]">
        <!-- <Header />
        <div class="flex flex-col h-screen">
            <div class="flex flex-col mb-auto sm:mt-16">
                <aside class="w-full bg-gray-200 p-4 sm:w-60 sm:h-screen sm:fixed">aside</aside>
                <Content />
            </div>
            <footer class="w-full bg-sky-200 sm:ml-60 p-4">footer</footer>
        </div> -->
        <Header />

        <div class="flex flex-col h-screen">
            <Content />
            <Footer />
        </div>
    </div>
</template>
