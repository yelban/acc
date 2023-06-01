<script>
import cols from '../data/user-cols.json';
import users from '../data/users.json';
import IconEdit from '../icons/IconEdit.vue';
import IconEye from '../icons/IconEye.vue';
import IconTrash from '../icons/IconTrash.vue';
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
    <div id="dataset">
        <div class="text-4xl font-bold py-4">DSBG</div>
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
                class="flex flex-row items-center justify-between min-w-min p-4"
                :data-page-count="ds.dsPagecount">
                <div class="w-64">
                    <dataset-show
                        :ds-show-entries="15"
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
                            <th class="border border-slate-100 px-2">#</th>
                            <th
                                v-for="(th, index) in cols"
                                :key="th.field"
                                class="border border-slate-100 px-2">
                                <div :class="['sort', th.sort]" @click="click($event, index)">
                                    {{ th.name }} <span>{{ th.sort }}</span>
                                </div>
                            </th>
                            <th class="border border-slate-100 px-2">Actions</th>
                        </tr>
                    </thead>
                    <dataset-item tag="tbody">
                        <template #default="{ row, rowIndex }">
                            <tr class="odd:bg-[#F0F0F0] text-zinc-600">
                                <td class="border border-slate-100 px-2 min-w-[50px]">
                                    {{ rowIndex + 1 }}
                                </td>
                                <td class="border border-slate-100 px-2 min-w-[100px]">
                                    {{ row.first_name }}
                                </td>
                                <td class="border border-slate-100 px-2 min-w-[100px]">
                                    {{ row.last_name }}
                                </td>
                                <td class="border border-slate-100 px-2 min-w-[75px]">
                                    {{ row.gender }}
                                </td>
                                <td class="border border-slate-100 px-2 min-w-[100px]">
                                    {{ row.birthdate }}
                                </td>
                                <td
                                    class="border border-slate-100 px-2 min-w-[100px] max-w-[200px] truncate">
                                    {{ row.email }}
                                </td>
                                <td
                                    class="border border-slate-100 px-2 min-w-[100px] max-w-[200px] truncate">
                                    {{ row.profile }}
                                </td>
                                <td
                                    class="flex justify-between gap-1 text-zinc-400 border border-slate-100 px-2 min-w-[100px]">
                                    <IconEye class="hover:text-zinc-600" />
                                    <IconEdit class="hover:text-zinc-600" />
                                    <IconTrash class="hover:text-zinc-600" />
                                </td>
                            </tr>
                        </template>
                    </dataset-item>
                </table>
                <!-- <div
                    v-for="(th, index) in cols"
                    :key="th.field"
                    :class="['sort', th.sort]"
                    @click="click($event, index)">
                    {{ th.name }}
                </div>
                <dataset-item class="form-row mb-3">
                    <template #default="{ row, rowIndex }">
                        <div class="col-md-4">
                            <div class="card mb-2">
                                <div class="card-body pt-3 pb-2 px-3">
                                    <div scope="row">{{ rowIndex + 1 }}</div>
                                    <h5
                                        class="card-title text-truncate mb-2"
                                        :title="`Index: ${rowIndex}`">
                                        <span :class="['font-16', statusClass[row.onlineStatus]]"
                                            >⬤</span
                                        >
                                        {{ row.first_name }}
                                    </h5>
                                    <h6 class="card-subtitle text-truncate text-muted">
                                        {{ row.email }}
                                    </h6>
                                    <p class="card-text text-truncate mb-0">
                                        {{ row.balance }}
                                    </p>
                                    <p class="card-text text-truncate text-right">
                                        {{ row.birthdate }}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </template>
                    <template #noDataFound>
                        <div class="col-md-12 pt-2">
                            <p class="text-center">No results found</p>
                        </div>
                    </template>
                </dataset-item> -->
            </div>

            <div class="flex flex-row justify-between p-4">
                <dataset-info class="" />
                <dataset-pager class="flex flex-row justify-between gap-5" />
            </div>
        </dataset>
    </div>
</template>
