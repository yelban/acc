<script setup></script>

<template>
    <header class="bg-white shadow-lg z-10">
        <!-- 網站標題和導航放在這裡 -->
        <div class="container max-w-full mx-auto px-6 py-7">
            <div class="flex items-center justify-between">
                <div class="px-2">
                    <a href="#" class="flex items-center text-xl font-bold text-gray-800">
                        <img src="/logo.svg" alt="網站Logo" class="h-6 sm:h-9" />
                        <span
                            class="self-center text-base whitespace-nowrap text-[#005087] ml-6 pl-6 border border-white border-l-[#005087]"
                            >網站名稱</span
                        >
                    </a>
                </div>
                <div class="hidden md:flex items-center space-x-6 text-[#005087] font-semibold px-2">
                    <a href="#">Solutions</a>
                    <a href="#">Service</a>
                    <a href="#">Support</a>
                    <button class="bg-[#F0F0F0] rounded-full p-2 hover:bg-[#64DCF0]">
                        <a href="#"><i class="block fa-solid fa-globe text-xl"></i></a>
                    </button>
                    <button class="bg-[#F0F0F0] rounded-full p-2 hover:bg-[#64DCF0]">
                        <a href="#"><i class="block fa-solid fa-magnifying-glass text-xl"></i></a>
                    </button>
                </div>
                <div class="md:hidden flex items-center">
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
                            <line x1="3" y1="12" x2="21" y2="12"></line>
                            <line x1="3" y1="6" x2="21" y2="6"></line>
                            <line x1="3" y1="18" x2="21" y2="18"></line>
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
                            <line x1="18" y1="6" x2="6" y2="18"></line>
                            <line x1="6" y1="6" x2="18" y2="18"></line>
                        </svg>
                    </button>
                </div>
            </div>
        </div>
        <nav
            id="mobile-menu"
            class="md:hidden bg-white shadow-lg overflow-hidden absolute w-full transition-all duration-300 ease-in-out max-h-0">
            <div class="container mx-auto px-6 py-6">
                <ul class="space-y-2 text-[#005087] font-semibold">
                    <li><a href="#" class="block">Solutions</a></li>
                    <li><a href="#" class="block">Service</a></li>
                    <li><a href="#" class="block">Support</a></li>
                    <il>
                        <button class="bg-[#F0F0F0] rounded-full p-2 mt-2">
                            <a href="#"><i class="block fa-solid fa-globe text-xl"></i></a>
                        </button>
                    </il>
                    <li>
                        <button class="bg-[#F0F0F0] rounded-full p-2">
                            <a href="#"><i class="block fa-solid fa-magnifying-glass text-xl"></i></a>
                        </button>
                    </li>
                </ul>
            </div>
        </nav>
    </header>
</template>

<style scoped></style>
