<script setup>
import AccordionPanel from '../components/AccordionPanel.vue';
</script>

<template>
    <div id="aside" class="w-full bg-[#F0F0F0] p-4 sm:w-60 sm:h-screen sm:fixed">
        <AccordionPanel aria-title="msbg" title="MSBG">
            <div class="ml-10 text-base font-bold">Laos</div>
        </AccordionPanel>
        <AccordionPanel aria-title="srbg" title="SRBG">
            <div class="ml-10 text-base font-bold">Austria</div>
        </AccordionPanel>
        <AccordionPanel aria-title="dsbf" title="DSBG">
            <div class="ml-10 text-base font-bold">Taiwan</div>
            <div class="ml-10 text-base font-bold">US</div>
            <div class="ml-10 text-base font-bold">Europe</div>
        </AccordionPanel>
        <AccordionPanel aria-title="shbg" title="SHBG">
            <div class="ml-10 text-base font-bold">Poland</div>
        </AccordionPanel>
        <AccordionPanel aria-title="eebg" title="EEBG">
            <div class="ml-10 text-base font-bold">Slovakia</div>
        </AccordionPanel>
    </div>
</template>
