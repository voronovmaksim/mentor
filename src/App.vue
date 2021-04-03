<template>
    <v-app id="page" style="background: #272727">

        <vorHeader></vorHeader>

        <v-main app id="app-content">
            <vor-home></vor-home>
        </v-main>

        <vor-footer></vor-footer>

    </v-app>
</template>


<script>
    import HomeVue from './views/Home'
    import HeaderVue from './views/Header'
    import FooterVue from './views/Footer'

    export default {
        components: {
            vorHome: HomeVue,
            vorHeader: HeaderVue,
            vorFooter: FooterVue
        }
    }
</script>

<style>

    html {
        overflow-y: auto; /*ЧТобы скрыть полузнок прокрутки*/
    }

</style>
