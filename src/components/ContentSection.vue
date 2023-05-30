<script>
import {
    Dataset,
    DatasetInfo,
    DatasetItem,
    DatasetPager,
    DatasetSearch,
    DatasetShow,
} from "../../utils/vue-dataset-tailwindcss/vue-dataset.es";
import cols from "../data/user-cols.json";
import users from "../data/users.json";

// import CustomSearch from "./CustomSearch.vue";

export default {
    name: "App",
    components: {
        Dataset,
        DatasetItem,
        DatasetInfo,
        DatasetPager,
        DatasetSearch,
        DatasetShow,
        // CustomSearch,
    },
    data() {
        return {
            searchString: "",
            users,
            cols,
            statusClass: {
                Active: "text-success",
                Away: "text-warning",
                "Do not disturb": "text-danger",
                Invisible: "text-secondary",
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
                    o.sort === "asc" ? acc.push(o.field) : acc.push(`-${o.field}`);
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
                        o.sort = "";
                    }
                });
            }
            if (!sortEl.sort) {
                toset = "asc";
            }
            if (sortEl.sort === "desc") {
                toset = event.shiftKey ? "" : "asc";
            }
            if (sortEl.sort === "asc") {
                toset = "desc";
            }
            sortEl.sort = toset;
        },
    },
};
</script>

<template>
    <div id="app" class="w-full p-4">
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
            <div class="flex flex-row justify-between" :data-page-count="ds.dsPagecount">
                <div class="inline-block relative w-64">
                    <dataset-show />
                </div>
                <div class="">
                    <dataset-search ds-search-placeholder="Search..." />
                </div>
            </div>
            <!-- <div class="row mb-2" :data-page-count="ds.dsPagecount">
                <div class="col-md-6 mb-2 mb-md-0">
                    <dataset-show :ds-show-entries="selected" @changed="selected = $event" />
                </div>
                <div class="col-md-6">
                    <div class="form-inline float-right">
                        <CustomSearch v-model="searchString" ds-search-placeholder="Search..." class="text-zinc-600" />
                        <button type="button" class="btn btn-primary" @click="searchString = ''">Clear search</button>
                    </div>
                </div>
            </div> -->
            <div class="">
                <div class="">
                    <div
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
                                        <h5 class="card-title text-truncate mb-2" :title="`Index: ${rowIndex}`">
                                            <span :class="['font-16', statusClass[row.onlineStatus]]">⬤</span>
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
                    </dataset-item>
                </div>
            </div>
            <div class="flex flex-row justify-between">
                <dataset-info class="" />
                <dataset-pager class="flex flex-row justify-between gap-5" />
            </div>
        </dataset>
    </div>
</template>

<style>
@import "../../node_modules/bootstrap/dist/css/bootstrap.css";
</style>
