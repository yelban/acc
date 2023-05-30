/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution');

module.exports = {
    root: true,
    env: {
        browser: true,
        es2021: true,
        node: true,
    },
    extends: [
        'plugin:vue/vue3-essential',
        'eslint:recommended',
        'plugin:import/recommended', // 1. eslint-plugin-import
        'plugin:prettier/recommended', // 3. eslint-plugin-prettier
        '@vue/eslint-config-prettier/skip-formatting',
    ],
    parserOptions: {
        ecmaVersion: 'latest',
    },
    plugins: [
        // 'vue',
        'simple-import-sort', // 2. eslint-plugin-simple-import-sort
    ],
    rules: {
        // 2. eslint-plugin-simple-import-sort
        'simple-import-sort/imports': 'warn',
        'simple-import-sort/exports': 'warn',
        'import/first': 'warn',
        'import/newline-after-import': 'warn',
        'import/no-duplicates': 'warn',
        'import/no-extraneous-dependencies': 'warn',
        //
        'no-unused-vars': 'warn',
    },
    overrides: [
        {
            // Disable multi-word-component-names
            files: ['playground/**/*.{vue,js}', 'src/**/*.vue', 'docs/**/*.{vue,js}'],
            rules: {
                'vue/multi-word-component-names': 'off',
                'vue/html-self-closing': [
                    'error',
                    {
                        html: {
                            void: 'never',
                            normal: 'always',
                            component: 'always',
                        },
                        svg: 'always',
                        math: 'always',
                    },
                ],
            },
        },
    ],
};
