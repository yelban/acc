<script setup>
import { ref } from 'vue';

import IconPlus from '../icons/IconPlus.vue';
import IconSubtract from '../icons/IconSubtract.vue';

const props = defineProps({
    title: { type: String, required: true },
    ariaTitle: { type: String, required: true },
});

const showPanel = ref(false);

const togglePanel = (event) => {
    showPanel.value = !showPanel.value;
};
</script>

<template>
    <div class="text-xl px-4">
        <button
            :arial-controls="'accordion-content-' + ariaTitle"
            :id="'accordion-control-' + ariaTitle"
            @click.prevent="togglePanel"
            class="p-2 w-full font-semibold flex flex-row items-center justify-start">
            <span v-if="showPanel"><IconSubtract /></span>
            <span v-else><IconPlus /></span>
            <span class="px-4">{{ title }}</span>
        </button>
        <div :aria-hidden="!showPanel" :id="'content-' + ariaTitle" v-if="showPanel">
            <slot />
        </div>
    </div>
</template>
