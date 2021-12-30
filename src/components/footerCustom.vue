<script setup>

</script>

<template>
    <footer class="bg-indigo-600">
        <div class="h-3/6 w-full flex flex-row text-slate-100 px-5 py-10">
            <div class="about-section max-w-lg">
                <p class="text-xl">About</p>

                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores unde error quas magni numquam, sint quibusdam autem excepturi dicta ut quos odio laboriosam provident modi perferendis rerum labore sapiente adipisci tenetur officiis beatae sequi distinctio est itaque! Sunt velit, delectus laudantium quam repudiandae accusantium ad, eaque in, nesciunt modi pariatur.</p>
            </div>
            <div class="our-section">
                <nav class="flex flex-col">
                    <router-link tag="a" to="/">Our Team</router-link>
                    <router-link tag="a" to="/">Contact Us</router-link>
                    <router-link tag="a" to="/">About</router-link>
                    <router-link tag="a" to="/">Services</router-link>
                    <router-link tag="a" to="/">Blog</router-link>
                    <router-link tag="a" to="/">Terms & Services</router-link>
                </nav>
            </div>
            <div class="contact-section">
                <ul>
                    <li>
                        <router-link tag="a" to="/">Karachi , 75290 , Pakistan</router-link>
                    </li>
                    <li>
                        <router-link tag="a" to="/">omairmedia2020@gmail.com</router-link>
                    </li>
                    <li>
                        <router-link tag="a" to="/">+92 324 3244511</router-link>
                    </li>
                    <li>
                        <router-link tag="a" to="/">+92 324 3244511</router-link>
                    </li>
                </ul>

                <div>
                    <div class="icon"></div>
                    <div class="icon"></div>
                    <div class="icon"></div>
                    <div class="icon"></div>
                </div>
            </div>
            <div class="subscribe-section">
                <input type="text" placeholder="Enter Your Email" />
                <button
                    class="py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-slate-700 hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >Subscribe</button>
            </div>
        </div>
        <div
            class="w-full border-t-2 py-3 text-slate-100 border-slate-400 flex justify-center align-middle"
        >Copyright 2022 , Omair Media</div>
    </footer>
</template>

<style scoped>
</style>
