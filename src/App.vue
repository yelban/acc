<script setup>
import IconLanguage from './components/icons/IconLanguage.vue';
import IconSearch from './components/icons/IconSearch.vue';
import IconCopyright from './components/icons/IconCopyright.vue';

import Accordion from 'primevue/accordion';
import AccordionTab from 'primevue/accordiontab';

import Calendar from 'primevue/calendar';
</script>

<script>
import cols from '../data/user-cols.json';
import users from '../data/users.json';
import IconEdit from './components/icons/IconEdit.vue';
import IconEye from './components/icons/IconEye.vue';
import IconSort from './components/icons/IconSort.vue';
import IconSortDown from './components/icons/IconSortDown.vue';
import IconSortUp from './components/icons/IconSortUp.vue';
import IconTrash from './components/icons/IconTrash.vue';
import {
    Dataset,
    DatasetInfo,
    DatasetItem,
    DatasetPager,
    DatasetSearch,
    DatasetShow,
} from '../libs/vue-dataset-tailwindcss/vue-dataset.es';

export default {
    name: 'App',
    components: {
        Dataset,
        DatasetItem,
        DatasetInfo,
        DatasetPager,
        DatasetSearch,
        DatasetShow,
        // CustomSearch,
        IconEye,
        IconEdit,
        IconTrash,
        IconSort,
        IconSortUp,
        IconSortDown,
    },
    data() {
        return {
            searchString: '',
            users,
            cols,
            statusClass: {
                Active: 'text-success',
                Away: 'text-warning',
                'Do not disturb': 'text-danger',
                Invisible: 'text-secondary',
            },
            selected: 5,
            active: true,
            away: true,
            datasetView: false,
            datasetEdit: false,
            dialog: false,
        };
    },
    computed: {
        sortBy() {
            return this.cols.reduce((acc, o) => {
                if (o.sort) {
                    o.sort === 'asc' ? acc.push(o.field) : acc.push(`-${o.field}`);
                }

                return acc;
            }, []);
        },
    },
    methods: {
        click(event, i) {
            let toset;
            const sortEl = this.cols[i];

            if (!event.shiftKey) {
                this.cols.forEach((o) => {
                    if (o.field !== sortEl.field) {
                        o.sort = '';
                    }
                });
            }
            if (!sortEl.sort) {
                toset = 'asc';
            }
            if (sortEl.sort === 'desc') {
                toset = event.shiftKey ? '' : 'asc';
            }
            if (sortEl.sort === 'asc') {
                toset = 'desc';
            }
            sortEl.sort = toset;
        },
    },
};
</script>

<template>
    <div>
        <header class="w-full h-20 p-5 bg-white shadow-xl z-50 sm:fixed">
            <div class="flex items-center justify-between text-lg">
                <div id="banner" class="">
                    <a href="#" class="flex items-center">
                        <img src="./assets/logo.svg" alt="網站 Logo" class="h-8" />
                        <span
                            class="ml-6 pl-6 self-center whitespace-nowrap border-l-2 border-[#005087] font-bold text-[#005087]"
                            >網站名稱</span
                        >
                    </a>
                </div>
                <div id="nav" class="flex items-center space-x-6 font-semibold text-[#005087]">
                    <div class="group relative px-1">
                        <a href="#">Solutions</a>
                        <span
                            className="absolute -bottom-7 left-0 w-0 h-[5px] bg-[#64DCF0] transition-all delay-150 group-hover:delay-300 duration-300 group-hover:w-full" />
                    </div>
                    <div class="group relative">
                        <a href="#">Service</a>
                        <span
                            className="absolute -bottom-7 left-0 w-0 h-[5px] bg-[#64DCF0] transition-all delay-150 group-hover:delay-300 duration-300 group-hover:w-full" />
                    </div>
                    <div class="group relative">
                        <a href="#">Support</a>
                        <span
                            className="absolute -bottom-7 left-0 w-0 h-[5px] bg-[#64DCF0] transition-all delay-150 group-hover:delay-300 duration-300 group-hover:w-full" />
                    </div>
                    <button
                        class="rounded-full bg-[#F0F0F0] p-2 hover:bg-[#64DCF0] hover:delay-150">
                        <a href="#"><IconLanguage /></a>
                    </button>
                    <button
                        class="rounded-full bg-[#F0F0F0] p-2 hover:bg-[#64DCF0] hover:delay-150">
                        <a href="#"><IconSearch /></a>
                    </button>
                </div>
            </div>
        </header>
        <div class="flex flex-col h-screen">
            <div class="sm:mb-auto sm:mt-20">
                <div class="p-5 bg-[#F0F0F0] sm:w-60 sm:h-screen sm:fixed">
                    <Accordion :activeIndex="0">
                        <AccordionTab header="Header I">
                            <p class="pl-6">Content 1</p>
                        </AccordionTab>
                        <AccordionTab header="Header II">
                            <p class="pl-6">Content 2</p>
                        </AccordionTab>
                        <AccordionTab header="Header III">
                            <p class="pl-6">Content 3</p>
                        </AccordionTab>
                    </Accordion>
                </div>
                <div class="p-5 sm:ml-60">
                    <Calendar v-model="date" showIcon />
                    <div id="dataset">
                        <div class="pl-4 pt-4 text-4xl font-bold">DSBG</div>
                        <dataset
                            v-slot="{ ds }"
                            :ds-data="users"
                            :ds-filter-fields="{}"
                            :ds-sortby="sortBy"
                            :ds-search-in="[
                                'first_name',
                                'last_name',
                                'gender',
                                'birthdate',
                                'email',
                                'ip_address',
                                'profile', //
                            ]"
                            :ds-search-as="{}">
                            <div
                                class="flex min-w-min flex-row items-center justify-between p-4"
                                :data-page-count="ds.dsPagecount">
                                <div class="w-64">
                                    <dataset-show
                                        :ds-show-entries="5"
                                        :ds-show-entries-lovs="[
                                            { value: 5, text: 5 },
                                            { value: 10, text: 10 },
                                            { value: 15, text: 15 },
                                            { value: 25, text: 25 },
                                            { value: 50, text: 50 },
                                            { value: 100, text: 100 },
                                        ]" />
                                </div>
                                <div class="">
                                    <dataset-search ds-search-placeholder="Filter..." />
                                </div>
                            </div>

                            <div class="px-2">
                                <table class="w-full border-collapse">
                                    <thead>
                                        <tr class="bg-[#FFE664] text-left">
                                            <th class="border border-slate-100 p-3">#</th>
                                            <th
                                                v-for="(th, index) in cols"
                                                :key="th.field"
                                                class="border border-slate-100 p-3">
                                                <div
                                                    :class="['sort', th.sort]"
                                                    @click="click($event, index)"
                                                    class="flex whitespace-nowrap">
                                                    <div>{{ th.name }}</div>
                                                    <div v-if="!th.sort" class="scale-50">
                                                        <IconSort />
                                                    </div>
                                                    <div
                                                        v-else-if="th.sort == 'asc'"
                                                        class="scale-50">
                                                        <IconSortUp />
                                                    </div>
                                                    <div v-else class="scale-50">
                                                        <IconSortDown />
                                                    </div>
                                                </div>
                                            </th>
                                            <th class="border border-slate-100 px-2">Actions</th>
                                        </tr>
                                    </thead>
                                    <dataset-item tag="tbody">
                                        <template #default="{ row, rowIndex }">
                                            <tr class="text-zinc-600 odd:bg-[#F0F0F0]">
                                                <td
                                                    class="min-w-[64px] border border-slate-100 p-3">
                                                    {{ rowIndex + 1 }}
                                                </td>
                                                <td
                                                    class="min-w-[100px] border border-slate-100 p-3">
                                                    {{ row.first_name }}
                                                </td>
                                                <td
                                                    class="min-w-[100px] border border-slate-100 p-3">
                                                    {{ row.last_name }}
                                                </td>
                                                <td
                                                    class="min-w-[75px] border border-slate-100 p-3">
                                                    {{ row.gender }}
                                                </td>
                                                <td
                                                    class="min-w-[100px] border border-slate-100 p-3">
                                                    {{ row.birthdate }}
                                                </td>
                                                <td
                                                    class="min-w-[100px] max-w-[200px] truncate border border-slate-100 p-3">
                                                    {{ row.profile }}
                                                </td>
                                                <td
                                                    class="flex min-w-[100px] justify-between gap-1 border border-slate-100 p-3 text-zinc-400">
                                                    <IconEye
                                                        @click="datasetView = true"
                                                        class="hover:text-zinc-600" />
                                                    <IconEdit
                                                        @click="datasetEdit = true"
                                                        class="hover:text-zinc-600" />
                                                    <IconTrash
                                                        @click="dialog = true"
                                                        class="hover:text-zinc-600" />
                                                </td>
                                            </tr>
                                        </template>
                                    </dataset-item>
                                </table>
                            </div>

                            <div class="flex flex-row justify-between p-4">
                                <dataset-info class="" />
                                <dataset-pager class="flex flex-row justify-between gap-5" />
                            </div>
                        </dataset>
                    </div>
                </div>
            </div>
            <div class="flex items-center justify-end p-5 sm:ml-60 bg-[#F5F5F5] text-[#707070]">
                <div><IconCopyright /></div>
                <div class="pl-1">2023 AUO Corporation. All Rights Reserved.</div>
            </div>
        </div>
    </div>
</template>
