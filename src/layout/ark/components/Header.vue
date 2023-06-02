<script setup>
import IconLanguage from '../icons/IconLanguage.vue';
import IconSearch from '../icons/IconSearch.vue';
</script>

<template>
    <div id="header" class="w-full bg-white shadow-lg z-10 sm:fixed">
        <div class="flex items-center justify-between p-4">
            <div id="banner" class="">
                <a href="#" class="flex items-center">
                    <img src="../icons/logo.svg" alt="網站 Logo" class="h-10" >
                    <span
                        class="self-center text-base font-bold whitespace-nowrap text-[#005087] ml-6 pl-6 border-l-2 border-[#005087]"
                        >網站名稱</span
                    >
                </a>
            </div>
            <div id="nav" class="flex items-center space-x-6 font-semibold">
                <div class="px-1 relative group">
                    <a href="#">Solutions</a>
                    <span
                        className="absolute -bottom-6 left-0 w-0 h-[5px] bg-[#64DCF0] transition-all delay-150 group-hover:delay-300 duration-300 group-hover:w-full" />
                </div>
                <div class="relative group">
                    <a href="#">Service</a>
                    <span
                        className="absolute -bottom-6 left-0 w-0 h-[5px] bg-[#64DCF0] transition-all delay-150 group-hover:delay-300 duration-300 group-hover:w-full" />
                </div>
                <div class="relative group">
                    <a href="#">Support</a>
                    <span
                        className="absolute -bottom-6 left-0 w-0 h-[5px] bg-[#64DCF0] transition-all delay-150 group-hover:delay-300 duration-300 group-hover:w-full" />
                </div>
                <button class="bg-[#F0F0F0] rounded-full p-2 hover:bg-[#64DCF0] hover:delay-150">
                    <a href="#"><IconLanguage /></a>
                </button>
                <button class="bg-[#F0F0F0] rounded-full p-2 hover:bg-[#64DCF0] hover:delay-150">
                    <a href="#"><IconSearch /></a>
                </button>
            </div>
            <!-- <div id="nav-toggle" class="md:hidden flex items-center">
                    <button id="menu-toggle" class="text-[#005087] focus:outline-none">
                        <svg
                            id="menu-open"
                            viewBox="0 0 24 24"
                            width="24"
                            height="24"
                            stroke="currentColor"
                            stroke-width="2"
                            fill="none"
                            stroke-linecap="round"
                            stroke-linejoin="round">
                            <line x1="3" y1="12" x2="21" y2="12" />
                            <line x1="3" y1="6" x2="21" y2="6" />
                            <line x1="3" y1="18" x2="21" y2="18" />
                        </svg>
                        <svg
                            id="menu-close"
                            class="hidden"
                            viewBox="0 0 24 24"
                            width="24"
                            height="24"
                            stroke="currentColor"
                            stroke-width="2"
                            fill="none"
                            stroke-linecap="round"
                            stroke-linejoin="round">
                            <line x1="18" y1="6" x2="6" y2="18" />
                            <line x1="6" y1="6" x2="18" y2="18" />
                        </svg>
                    </button>
                </div> -->
        </div>
        <div
            id="mobile-menu"
            class="w-full md:hidden shadow-lg overflow-hidden transition-all duration-300 ease-in-out max-h-0">
            <ul class="space-y-2 text-[#005087] bg-rose-500 font-semibold border p-4">
                <li><a href="#" class="block">Solutions</a></li>
                <li><a href="#" class="block">Service</a></li>
                <li><a href="#" class="block">Support</a></li>
                <il>
                    <button class="bg-[#F0F0F0] rounded-full p-2 mt-2">
                        <a href="#"><IconLanguage /></a>
                    </button>
                </il>
                <li>
                    <button class="bg-[#F0F0F0] rounded-full p-2">
                        <a href="#"><IconSearch /></a>
                    </button>
                </li>
            </ul>
        </div>
    </div>
</template>
