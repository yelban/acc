<script>
import { Dataset, DatasetPager } from "vue-dataset";

import users from "../users.json";

export default {
    components: { Dataset, DatasetPager },
    data() {
        return {
            users, // The data you want to display in the table
            sortCriteria: ["name", "email"], // Default sort criteria
            searchColumns: ["name", "email"], // Default search columns
            filterFields: {}, // The fields you want to filter by
            searchFunction: {}, // The function used to search
            sortFunction: {}, // The function used to sort
        };
    },
    methods: {
        sort(column) {
            console.log("sort", column);
            this.sortCriteria = [column];
        },
    },
};
</script>

<template>
    <section class="flex-grow w-full md:w-4/5 p-0 sm:p-8">
        <div class="overflow-x-auto">
            <dataset
                :ds-data="users"
                :ds-filter-fields="filterFields"
                :ds-sortby="sortCriteria"
                :ds-search-in="searchColumns"
                :ds-search-as="searchFunction"
                :ds-sort-as="sortFunction">
                <!-- Insert the structure of your table here, using the dsData array -->
                <table>
                    <thead>
                        <tr>
                            <th @click="sort('name')">Name</th>
                            <th @click="sort('email')">Email</th>
                            <th>birthdate</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="user in users" :key="user.id">
                            <td>{{ user.name }}</td>
                            <td>{{ user.email }}</td>
                            <td>{{ user.birthdate }}</td>
                        </tr>
                    </tbody>
                </table>
                <dataset-pager />
            </dataset>
        </div>
    </section>
</template>
