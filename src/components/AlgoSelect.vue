<template>
    <section class="viz-select">
        <div>
            <p style="font-size: .7em; margin: .3em;">Select the algorithm to visualize</p>
            <div class="algo-select">
                <select class="algo-category-select" ref="algo-categories" @change="populateChoices($event)">
                    <option value="search" selected>Search</option>
                </select>

                <div class="algo-name-select" ref="algo-names">
                    <label v-for="(item, index) in currentList" :key="index" :for="`radio${index}`" class="radio-label">
                        <input
                            type="radio"
                            :value="item.algorithm" :key="index"
                            :id="`radio${index}`"
                            name="group1"
                            @click="manageAlgorithmData($event)"
                        />
                        {{ item.algorithm }}
                    </label>
                </div>
            </div>

        </div>

        <AlgoData v-bind:data="currentData" ref="algo-data" v-if="currentData" />
        <div v-else ref="algo-data-noselect" style="margin: 1em;">
            No data has been selected!
        </div>
        <button class="visualize-btn" :disabled="currentData == null" @click="canStartViz = true">Visualize</button>
    </section>
</template>

<style scoped>
    .algo-select {
        display: flex;
    }

    .radio-label {
        font-size: .75em;
        margin: .5em;
    }

    .algo-category-select {
        padding: .25em;
        font-size: .6em;
    }
    .visualize-btn {
        font-size: .75em;
        margin-left: auto;
        border: none;
        border-radius: 15px;
        padding: .75em;
        color: white;
        background-color: #2684af;
        transition: .25s background-color ease-in-out;
    }
    .visualize-btn:hover {
        background-color: #1c6181;
    }
    .visualize-btn:disabled, .visualize-btn:disabled:hover {
        background-color: #527180;
    }
</style>

<script>
import AlgoData from './AlgoData'
import LinearSearch from '../algorithms/search/LinearSearch'
import BinarySearch from '../algorithms/search/BinarySearch'
import JumpSearch from '../algorithms/search/JumpSearch'

export default {
    name: 'AlgoSelect',
    components: {
        AlgoData
    },
    data() {
        return {
            algorithms: {
                search: {
                    "Linear Search": LinearSearch.data,
                    "Binary Search": BinarySearch.data,
                    "Jump Search": JumpSearch.data
                }
            },
            currentData: null,
            currentList: [],
            canStartViz: false
        }
    },
    methods: {
        getData() {
            return this.currentData
        },
        populateChoices(event) {
            console.log("This thing was called!")
            const value = event.target.value
            this.currentData = null
            if (value in this.algorithms) {
                this.currentList = this.algorithms[value]
            } else {
                this.currentList = []
            }
            this.$refs["algo-names"].querySelectorAll("input[type='radio']").forEach(e => {
                e.checked = false
            })
        },
        manageAlgorithmData(event) {
            console.log("This other thing was called!")
            const value = event.target.value
            console.log(value)
            if (value in this.algorithms.search) {
                const data = this.algorithms.search[value]
                if (!this.$refs["algo-data-noselect"]) this.$refs["algo-data"].changeData(data)
                this.currentData = data
            } else {
                this.currentData = null
            }
        }
    },
    mounted() {
        this.$refs["algo-categories"].dispatchEvent(new Event("change"))
    }
}
</script>