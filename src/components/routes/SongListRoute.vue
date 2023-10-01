<template>
    <div>
        <h1>Song List for {{ this.$route.params.category }}/{{ this.$route.params.value }}</h1>
        <div class="song-container">
            <div class="song" v-for="song in songs" :key="song._id">
                <h1>{{ song.title }}</h1>
                <audio controls>
                    <!-- start the audio at its designated start time and end it at its end time -->
                    <source :src="'/' + song['file-name'] +'#t=' + song['start-time'] + ',' + song['end-time']" type="audio/mpeg">
                </audio>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'SongListRoute',
        data() {
            return {
                songs: [],
            }
        },
        mounted() {
            fetch("http://localhost:4452/songs/category/" + this.$route.params.category + "/" + this.$route.params.value)
                .then(response => response.json())
                .then(songs => {
                    this.songs = songs
                    console.log(this.songs);
                })
        },
        
    }
</script>

<style lang="css" scoped>

</style>