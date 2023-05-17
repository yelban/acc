module.exports = {
    env: {
        browser: true,
        es2021: true,
        node: true,
    },
    extends: [
        "plugin:vue/vue3-essential",
        "airbnb-base",
        "plugin:import/recommended", // 1. eslint-plugin-import
        "plugin:prettier/recommended", // 3. eslint-plugin-prettier
    ],
    overrides: [],
    parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module",
    },
    plugins: [
        "vue",
        "simple-import-sort", // 2. eslint-plugin-simple-import-sort
    ],
    rules: {
        // 2. eslint-plugin-simple-import-sort
        "simple-import-sort/imports": "warn",
        "simple-import-sort/exports": "warn",
        "import/first": "warn",
        "import/newline-after-import": "warn",
        "import/no-duplicates": "warn",
        "import/no-extraneous-dependencies": "warn",
        //
        "no-unused-vars": "warn",
    },
};
