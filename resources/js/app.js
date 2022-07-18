require('./bootstrap');

import { createApp } from "vue";
import router from './router';

import Index from './components/Index';

import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faTrashCan } from '@fortawesome/free-solid-svg-icons';
library.add(faTrashCan);

createApp({
    components: {
        Index
    }
}).component('font-awesome-icon', FontAwesomeIcon).use(router).mount("#app");
