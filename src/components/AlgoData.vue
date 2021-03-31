<template>
    <div class="algo-data">
        <div class="general-info">
            <p id="algo-name">{{ algorithm.algorithm }}</p>
            <p id="algo-category">{{ algorithm.category }}</p>
            <p id="algo-explanation">{{ algorithm.explanation }}</p>
        </div>

        <div class="time-complexity">
            <p class="tc-title">Time Complexity</p>

            <ul>
                <li class="tc-info"><b>Best:</b> {{ algorithm.timeComplexity?.best }}</li>
                <li class="tc-info"><b>Average:</b> {{ algorithm.timeComplexity?.average }}</li>
                <li class="tc-info"><b>Worst:</b> {{ algorithm.timeComplexity?.worst }}</li>
            </ul>

            <p class="tc-info"><b>Observation:</b> {{ algorithm.timeComplexity?.observation }}</p>
        </div>
    </div>
</template>

<style scoped>
.algo-data {
    display: grid;
    margin: .5em;
    grid-template-columns: 2fr .75fr;
}

.time-complexity {
    border-radius: 15px;
    padding: .5em;
    background-color: #fff;
}

#algo-name {
    font-weight: bold;
    margin-bottom: .25em;
}
#algo-category {
    font-size: .75em;
    margin-top: .25em;
}
#algo-explanation {
    font-size: .8em;
    margin: .25em;
    margin-right: .5em;
}

.tc-title {
    font-weight: bold;
    margin: 0;
    margin-bottom: .25em;
}

.tc-info {
    font-size: .75em;
}

</style>

<script>
export default {
    name: "AlgoData",
    props: {
        data: Object
    },
    data() {
        return {
            algorithm: this.data
        }
    },
    methods: {
        changeData(data) {
            this.algorithm = data
        }
    }
}
</script>
