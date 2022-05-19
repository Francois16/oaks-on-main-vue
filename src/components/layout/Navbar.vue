<template>
    <header class="relative bg-white py-2 border-b">
        <div class="container flex justify-between items-center">
            <h1 class="text-lg sm:text-xl">Oaks On Main<span class="text-pink-500 font-semibold">.</span></h1>
            <!-- default nav -->
            <nav class="hidden md:flex gap-x-2">
                <RouterLink activeClass="bg-pink-300 cursor-default hover:text-inherit"
                    class="py-0.5 px-2 rounded duration-200 text-sm hover:text-pink-200" to="/">Home
                </RouterLink>
                <RouterLink class="py-0.5 px-2 rounded duration-200 text-sm hover:text-pink-200" to="/">Home
                </RouterLink>
                <RouterLink class="py-0.5 px-2 rounded duration-200 text-sm hover:text-pink-200" to="/">Home
                </RouterLink>
            </nav>

            <div @click.prevent="isOpen = !isOpen" class="flex flex-col gap-y-0.5 md:hidden cursor-pointer">
                <span class="block h-0.5 w-3.5 bg-slate-600 duration-200"
                    :class="this.isOpen && 'rotate-45 translate-y-0.5'"></span>
                <span v-if="!isOpen" class="block h-0.5 w-3.5 bg-slate-600"></span>
                <span class="block h-0.5 w-3.5 bg-slate-600 duration-200"
                    :class="this.isOpen && '-rotate-45 -translate-y-0.5'"></span>
            </div>
        </div>

        <!-- mobile nav -->
        <nav class="absolute flex flex-col top-full w-full border-y bg-white duration-200 md:hidden"
            :class="this.isOpen ? 'left-0' : '-left-full'">
            <RouterLink activeClass="bg-pink-200 cursor-default"
                class="py-1 px-8 text-sm duration-200 hover:bg-pink-200" to="/">Home
            </RouterLink>
            <RouterLink class="py-1 px-8 text-sm duration-200 hover:bg-pink-200" to="/">Home</RouterLink>
            <RouterLink class="py-1 px-8 text-sm duration-200 hover:bg-pink-200" to="/">Home</RouterLink>
        </nav>
    </header>
</template>

<script>
export default {
    data() {
        return {
            isOpen: false,
        }
    },
}
</script>

<style>
</style>