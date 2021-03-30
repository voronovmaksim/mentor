<template>
    <v-app id="page">

        <v-app-bar id="app-bar">
            <v-row class="white--text">
                <v-col>
                    <v-row no-gutters class="flex-column text-center">
                        <v-col style="color: red">K&K</v-col>
                        <v-col>Киселев & КОмпания</v-col>
                    </v-row>
                </v-col>

                <v-col>
                    Главная
                </v-col>

                <v-col>
                    Портфолио
                </v-col>
                <v-col>
                    Контакты
                </v-col>
            </v-row>
        </v-app-bar>

        <v-main app id="app-content">
            <v-container >
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

<style>


    #app-bar {
        background: #272727;
        flex: unset;
    }

    #app-footer {
        background: #272727;
    }

    #app-content {
        background: #272727;
    }


</style>
