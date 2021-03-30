<template>
    <v-app id="page">

        <v-app-bar id="app-bar" app>
            <v-row class="white--text text-center">
                <v-app-bar-title class="ma-5">
                    <v-row no-gutters class="flex-column text-center">
                        <v-col style="color: red">K&K</v-col>
                        <v-col>Киселев & Компания</v-col>
                    </v-row>
                </v-app-bar-title>
                <v-col align-self="center">
                    Главная
                </v-col>

                <v-col align-self="center">
                    Портфолио
                </v-col>
                <v-col align-self="center">
                    Контакты
                </v-col>
            </v-row>
        </v-app-bar>

        <v-main app id="app-content">
            <v-container>
                <vor-home></vor-home>
            </v-container>
        </v-main>

        <v-footer app fixed id="app-footer" elevation="12">
            <v-row class="text-center white--text">
                <v-col>
                    Это футер
                </v-col>
            </v-row>
        </v-footer>


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

    html{
        overflow-y:auto; /*ЧТобы скрыть полузнок прокрутки*/
    }

    #app-bar {
        background: #272727;

    }

    #app-footer {
        background: #272727;
    }

    #app-content {
        background: #272727;
    }


</style>
