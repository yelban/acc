<script>
import axios from "axios";
import { ref } from "vue";

// import jsonData from "../../data.json";

// export default {
//     setup() {
//         const products = ref([]);
//         axios.get("https://localhost:3001/products").then((response) => {
//             products.value = response.data;
//         });
//         return {
//             products,
//         };
//     },
// };

export default {
    data() {
        return {
            users: ref([]),
        };
    },
    async created() {
        // this.users = jsonData.users;

        const endpoint = "https://acc-db-api.onrender.com/users?_page=1&_limit=10";
        // const endpoint = "https://localhost:3001/products?_sort=price&_order=desc";
        try {
            const response = await axios.get(endpoint); // 請替換為你的 API 端點
            this.users = response.data;
        } catch (error) {
            console.error(error);
        }
    },
};
</script>

<template>
    <section class="flex-grow w-full md:w-4/5 p-0 sm:p-8">
        <div class="overflow-x-auto">
            <div class="pb-4 pt-8 sm:pt-0 text-4xl text-[#005087] font-bold">DSBG</div>
            <div class="flex flex-col md:flex-row md:justify-between">
                <div class="block py-4 text-2xl text-[#005087] font-medium">Employee list</div>
                <div class="w-full sm:w-1/2 mb-4">
                    <label class="mb-2 text-sm font-medium text-gray-900 sr-only" for="default-search">Search</label>
                    <div class="relative">
                        <input
                            class="block p-4 pl-6 w-full text text-gray-900 rounded-full border border-gray-300 focus:ring-[#005087]"
                            type="search"
                            id="default-search"
                            placeholder="Search Users..."
                            required />
                        <button
                            class="text-white absolute right-2.5 bottom-2.5 bg-[#204F80] hover:bg-[#f5f5f5] hover:text-[#005087] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-3xl text-sm px-4 py-2"
                            type="submit">
                            Search
                        </button>
                    </div>
                </div>
            </div>
            <table class="w-full md:max-w-full">
                <thead>
                    <tr class="bg-[#FFE664] text-[#005087] text-left">
                        <th
                            class="border font-normal px-4 py-2 max-w-[230px] sm:max-w-[250px] md:max-w-[280px] truncate">
                            ID
                        </th>
                        <th
                            class="border font-normal px-4 py-2 max-w-[230px] sm:max-w-[250px] md:max-w-[280px] truncate">
                            First Name
                        </th>
                        <th class="border font-normal px-4 py-2 sm:max-w-[200px] md:max-w-[250px] truncate">
                            Last Name
                        </th>
                        <th class="border font-normal px-4 py-2 sm:max-w-[200px] md:max-w-[250px] truncate">Email</th>
                        <th class="border font-normal px-4 py-2 sm:max-w-[200px] md:max-w-[250px] truncate">
                            Expertise
                        </th>
                        <th class="border font-normal px-4 py-2 sm:max-w-[200px] md:max-w-[250px] truncate">Actions</th>
                    </tr>
                </thead>
                <tbody class="text-zinc-600" v-for="(user, index) in users" :key="user.id">
                    <tr :style="{ background: index % 2 === 0 ? '#F0F0F0' : '#FFFFFF' }">
                        <td class="border px-4 py-2 max-w-[230px] sm:max-w-[250px] md:max-w-[300px] truncate">
                            {{ user.id }}
                        </td>
                        <td class="border px-4 py-2 max-w-[230px] sm:max-w-[250px] md:max-w-[300px] truncate">
                            {{ user.first_name }}
                        </td>
                        <td class="border px-4 py-2 max-w-[100px] sm:max-w-[200px] md:max-w-[250px] truncate">
                            {{ user.last_name }}
                        </td>
                        <td class="border px-4 py-2 max-w-[100px] sm:max-w-[150px] md:max-w-[200px] truncate">
                            ${{ user.email }}
                        </td>
                        <td class="border px-4 py-2 max-w-[100px] sm:max-w-[200px] md:max-w-[250px] truncate">
                            {{ user.expertise }}
                        </td>
                        <td class="border px-4 py-2 flex justify-around sm:space-x-0">
                            <button class="font-bold text-zinc-300 hover:text-zinc-500 py-1 sm:py-2 px-2 rounded">
                                <i class="fa-solid fa-eye"></i>
                            </button>
                            <button class="font-bold text-zinc-300 hover:text-zinc-500 py-1 sm:py-2 px-2 rounded">
                                <i class="fa-solid fa-pen-to-square"></i>
                            </button>
                            <button class="font-bold text-zinc-300 hover:text-zinc-500 py-1 sm:py-2 px-2 rounded">
                                <i class="fa-solid fa-trash-can"></i>
                            </button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
        <div class="flex justify-end mt-6">
            <div class="flex items-center">
                <button class="hover:opacity-100 text-2xl text-[#204F80] opacity-50 font-bold py-2 px-4 rounded-l">
                    <i class="fa-solid fa-circle-chevron-left"></i>
                </button>
                <button class="hover:opacity-100 text-[#005087] opacity-50 font-bold py-2 px-4">1</button>
                <button class="hover:opacity-100 text-[#005087] font-bold py-2 px-4">2</button>
                <button class="hover:opacity-100 text-[#005087] opacity-50 font-bold py-2 px-4">3</button>
                <button
                    class="hover:opacity-100 text-[#005087] text-2xl text-[#204F80] opacity-50 font-bold py-2 px-4 rounded-r">
                    <i class="fa-solid fa-circle-chevron-right"></i>
                </button>
            </div>
        </div>
    </section>
</template>
