import Vue from 'vue'
import Vuex from 'vuex'
import guests from "./modules/time";

Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        guests
    }
})