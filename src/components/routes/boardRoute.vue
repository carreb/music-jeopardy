<template>
    <div>
        <br>
        <div class=board>
            <div class="category" v-for="category in categories" :key="category.index">{{ category.category }}
                <div class="value" v-for="value in category.values" :key="value" @click="goToSongList(category.category, value)"> {{ value }}</div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'BoardRoute',
        data() {
            return {
                categories: [],
            }
        },
        mounted() {
            fetch("http://localhost:4452/songs/categories")
                .then(response => response.json())
                .then(categories => {
                    this.categories = categories
                    console.log(this.categories);
                })
        },
        methods: {
            goToSongList(category, value) {
                this.$router.push("/songs/" + category + "/" + value)
            }
        },
    }
</script>

<style lang="css" scoped>
.board {
    display: flex;
    flex-direction: row;
    gap: 10px;
    justify-content: center;
}
.category {
    width: 100px;
    padding: 5px;
    outline: 1px solid black;
}

.value {
    margin-top: 10px;
    width: 100px;
    padding: 5px 0px 5px 0px;
    outline: 1px solid black;
    cursor: pointer;
}
</style>