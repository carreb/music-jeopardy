<template>
    <div>
        <h1>Add Song</h1>
        <h2>song name</h2>
        <input type="text" v-model="songName">
        <h2>start time</h2>
        <input type="number" v-model="startTime">
        <h2>end time</h2>
        <input type="number" v-model="endTime">
        <h2>file name</h2>
        <input type="text" v-model="fileName">
        <h2>category</h2>
        <input type="text" v-model="category">
        <h2>value</h2>
        <input type="number" v-model="value">
        <br><br>
        <button @click="addSong">Add Song</button>
    </div>
</template>

<script>
    export default {
        name: 'AddSongRoute',
        data() {
            return {
                songName: "",
                startTime: "",
                endTime: "",
                fileName: "",
                category: "",
                value: "",
            }
        },
        methods: {
            addSong() {
                fetch("http://localhost:4452/songs/add", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({
                        title: this.songName,
                        "start-time": this.startTime,
                        "end-time": this.endTime,
                        "file-name": this.fileName,
                        category: this.category,
                        value: this.value,
                    })
                }).then(() => {
                    this.$router.push("/board")
                })
            }
        },
    }
</script>

<style lang="css" scoped>
</style>