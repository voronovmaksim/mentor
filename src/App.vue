<template>
    <v-app id="page">
        <v-main>
            <v-container>
                <vor-home></vor-home>
            </v-container>
        </v-main>
    </v-app>
</template>


<script>
    import HomeVue from './views/Home'

    export default {
        components: {
            vorHome: HomeVue
        }
    }
</script>

