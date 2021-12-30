<script setup>

</script>

<template>
    <div class="container mx-auto flex flex-row">
        <div class="header">
            <p class="flex flex-row align-middle">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-6 w-6 rotate-45"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                >
                    <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                    />
                </svg>
                <span class="text-2xl">Subscribe To Our Newsletter</span>
            </p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus, error?</p>
        </div>
        <div class="email-form">
            <div>
                <input name="email" type="text" placeholder="Enter Your Email" />
                <button
                    class="py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >Subscribe</button>
            </div>
        </div>
    </div>
</template>

<style scoped>
</style>
