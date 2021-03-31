<template>
    <section class="algo-viz">
        <div class="history" v-if="result">
            <p class="performed">Performed in {{ result.metadata.performance.toFixed(5) }} milliseconds </p>
            <p class="found" v-if="result.search.found">
                Found target {{ result.search.target }} at index {{ result.search.result }}
            </p>
            <p class="not-found" v-else>Target was not found</p>

            <h3>Observations</h3>
            <ul class="history-data" :renderKey="renderKey">
                <li v-for="(item, index) in result.search.data" :key="index">
                    {{ item.observation }}
                </li>
            </ul>
        </div>
        <div v-else class="result-hidden">
            You haven't performed a visualization yet!
        </div>
        <div class="fields">
            <h2>Array</h2>
            <button @click="addRandomValue()">Add Random Value</button>

            <div>
                <button ref="genarray" disabled @click="generateArray(parseInt($refs['length-from'].value), parseInt($refs['length-to'].value))">Generate Array</button>

                <label class="interval-label" for="length-from">From: </label>
                <input id="length-from" type="text" ref="length-from"
                    @change="allowArrayGenerate()"
                    @input="allowArrayGenerate()"
                >

                <label class="interval-label" for="length-to">To: </label>
                <input id="length-to" type="text" ref="length-to"
                    @change="allowArrayGenerate()"
                    @input="allowArrayGenerate()"
                >

                <span class="array-length"><b>Array length:</b> {{ array.length }}</span>

                <p ref="validate-from-to" class="interval-check"></p>
            </div>

            <div class="target">
                <label class="interval-label" for="target">Target: </label>
                <input id="target" type="text" ref="target" @input="setTarget($event.target.value)">
            </div>

            <div class="field-grid">
                <div v-for="(item, index) in array" :index="index" :key="index" class="field"
                    @mouseover="handleElementSettings($event, 'show')"
                    @focus="handleElementSettings($event, 'show')"
                    @mouseleave="handleElementSettings($event, 'hide')"
                >
                    {{ item }}
                    <button @click="removeElement($event)" class="hide" title="Remove this element">
                        <!-- <i class="fa fa-trash"></i> -->
                        X
                    </button>
                </div>
            </div>

            <div class="controls">
                <button @click="startViz()">Start Viz</button>
                <!--
                <button title="First Step"><i class="fa fa-fast-backward"></i></button>
                <button title="Previous Step"><i class="fa fa-step-backward"></i></button>
                <button title="Play/Pause"><i class="fa fa-play"></i></button>
                <button title="Next Step"><i class="fa fa-step-forward"></i></button>
                <button title="Last Step"><i class="fa fa-fast-forward"></i></button>
                -->
            </div>
        </div>
    </section>
</template>

<style>
    .algo-viz {
        margin: .5em;
        display: grid;
        grid-template-columns: 1fr auto;
    }
    .field-grid {
        display: grid;
        gap: 1rem;
        margin: .5em;
        grid-template-columns: repeat(auto-fill, minmax(64px, 1fr));
        max-height: 50vh;
        overflow: auto;
    }
    .field {
        padding: .5em;
        text-align: center;
        background-color: white;
    }
    .target {
        margin: .5em;
    }
    button {
        padding: .5em;
        margin-right: .5em;
        margin-left: .5em;
    }
    .field button.show {
        display: block;
        margin: .5em;
    }
    .field button.hide {
        display: none;
    }
    .interval-label {
        font-size: .75em;
        padding: .25em;
        margin-left: .5em;
    }
    .interval-check {
        font-size: .7em;
        margin: .5em;
        color: #d80606;
    }
    .array-length {
        font-size: .75em;
        margin-left: .5em;
    }
    .performed {
        font-size: .75em;
    }
    .found {
        font-size: .75em;
        color: #0c750c;
    }
    .not-found {
        font-size: .75em;
        color: #e21818;
    }
    .history, .result-hidden {
        margin: .5em;
        padding: .5em;
        background-color: #fff;
        border-radius: 15px;
    }
    .history-data li {
        font-size: .75em;
    }

</style>

<script>
import LinearSearch from '../algorithms/search/LinearSearch'
import BinarySearch from '../algorithms/search/BinarySearch'
import JumpSearch from '../algorithms/search/JumpSearch'

export default {
    name: "AlgoViz",
    data() {
        return {
            array: [],
            target: 0,
            algorithm: "none",
            algorithms: {
                search: {
                    "Linear Search": LinearSearch.perform,
                    "Binary Search": BinarySearch.perform,
                    "Jump Search": JumpSearch.perform
                }
            },
            result: null,
            renderKey: true
        }
    },
    methods: {
        setAlgorithm(algorithm) {
            this.algorithm = algorithm
        },
        setTarget(target) {
            this.target = parseInt(target)
            console.log(target)
        },
        partition(array, l, r) {
            let left = l
            let right = r
            const pivot = array[Math.floor((r + l) / 2)]

            while (left <= right) {
                while (array[left] < pivot) { left++ }
                while (array[right] > pivot) { right-- }
                if (left <= right) {
                    [array[left], array[right]] = [array[right], array[left]]
                    left++
                    right--
                }
            }
            return left
        },
        quickSort(array, left, right) {
            let index
            if (array.length > 1) {
                index = this.partition(array, left, right)
                if (left < index - 1) {
                    this.quickSort(array, left, index - 1)
                }
                if (index < right) {
                    this.quickSort(array, index, right)
                }
            }
            return array
        },
        addRandomValue() {
            this.array.push(Math.floor(Math.random() * 1000))
        },
        generateArray(from, to) {
            this.array = []
            for (let i = 0; i < Math.floor(Math.random() * (to - from + 1) + from); i++) {
                this.addRandomValue()
            }
        },
        handleElementSettings(event, action) {
            const element = event.target
            if (element.classList.contains("field")) {
                if (action === "show") {
                    element.querySelector("button").classList.add("show")
                    element.querySelector("button").classList.remove("hide")
                } else if (action === "hide") {
                    element.querySelector("button").classList.remove("show")
                    element.querySelector("button").classList.add("hide")
                }
            }
        },
        removeElement(event) {
            const element = event.target.parentElement
            const index = parseInt(element.getAttribute("index"))
            this.array.splice(index, 1)
        },
        allowArrayGenerate() {
            const from = this.$refs["length-from"]
            const to = this.$refs["length-to"]
            const button = this.$refs.genarray
            const validate = this.$refs["validate-from-to"]

            if (button) {
                // If either of the values is empty
                if (!from.value.trim() && !to.value.trim()) {
                    button.disabled = true
                    validate.innerText = ""
                // If either of the values is not a number
                } else if (isNaN(parseInt(from.value)) || isNaN(parseInt(to.value))) {
                    button.disabled = true
                    validate.innerText = "One of the values is not a number"
                // If the from value is greater than the to value
                } else if (parseInt(from.value) > parseInt(to.value)) {
                    button.disabled = true
                    validate.innerText = "The from value is greater than the to value"
                // If either of the values is 0 or less
                } else if (parseInt(from.value) <= 0 || parseInt(to.value) <= 0) {
                    button.disabled = true
                    validate.innerText = "One of the values is 0 or less"
                } else {
                    button.disabled = false
                    validate.innerText = ""
                }
            }
        },
        startViz() {
            this.array = this.quickSort(this.array, 0, this.array.length - 1)
            if (!(this.algorithm === 'none')) {
                const category = this.algorithm.category.toLowerCase()
                const algorithm = this.algorithm.algorithm
                if (category in this.algorithms) {
                    if (algorithm in this.algorithms[category]) {
                        console.log("Performing test!")
                        const data = this.algorithms[category][algorithm](this.array, this.target)
                        this.result = data
                        this.renderKey = !this.renderKey
                        console.log(data)
                    }
                }
            }
        }
    }
}
</script>
