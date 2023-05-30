<template>
    <input type="text" class="form-control" :value="value" @input="input" />
</template>

<script>
export default {
    inject: ["search"],
    props: {
        value: {
            type: String,
            default: "",
        },
    },
    methods: {
        input(e) {
            this.$emit("input", e.target.value);
        },
    },
    watch: {
        value: {
            handler(nV) {
                this.search(nV);
            },
            immediate: true,
        },
    },
};
</script>
