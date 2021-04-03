<template>
    <v-container id="fullscreen" fluid pb-0>
        <v-row id="fullscreen" align="center">
            <v-col cols="3" class="d-flex justify-end">
                Первый пост
            </v-col>
            <v-col>
                <v-row class="flex-column">
                    <v-col>
                        <v-img id="img" contain :aspect-ratio="16/7"
                               src="../assets/imgpsh_fullsize_anim.jpg"
                        ></v-img>
                    </v-col>
                    <v-col class="d-flex justify-center">
                        {{ getTime }}
                    </v-col>
                </v-row>
            </v-col>

        </v-row>
    </v-container>
</template>

<script>
    export default {
        data: () => ({
            width: 800,
        }),
        computed: {
            getTime() {
                return new Date().toLocaleString();
            }
        },
    }

</script>

<style lang="scss" scoped>
    #fullscreen {
        height: 100%;
    }
</style>