import { createApp } from "vue";
import router from "./router";
import App from "./App.vue";

// Use Tailwind Css
import "./index.css";

// Global Components

// Mounting App
createApp(App).use(router).mount("#app").component("my-component-name", {
  // ... options ...
});
