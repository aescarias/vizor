<template>
    <div class="visualizer">
        <AlgoSelect ref="algoselect" @click="handleClickEvent($event)"/>
        <AlgoViz ref="algoviz" id="algoviz" class="hide" />
    </div>
</template>

<style scoped>
.visualizer {
    margin: 1em;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-content: center;
}
.hide { display: none; }
.show { display: grid; }
</style>

<script>
import AlgoSelect from '../components/AlgoSelect.vue'
import AlgoViz from '../components/AlgoViz.vue'

export default {
    name: 'Visualizer',
    components: {
        AlgoSelect,
        AlgoViz
    },
    data() {
        return {
            canRenderViz: false
        }
    },
    methods: {
        handleClickEvent(event) {
            if (event.target.className === "visualize-btn") {
                this.canRenderViz = true
                event.target.disabled = true
                event.target.parentElement.querySelector(".algo-select").setAttribute("disabled", "true")
                document.querySelector("#algoviz").classList.remove("hide")
                document.querySelector("#algoviz").classList.add("show")
                this.$refs.algoviz.setAlgorithm(this.$refs.algoselect.getData())
                document.querySelector("#algoviz").scrollIntoView()
            }
        }
    }
}
</script>