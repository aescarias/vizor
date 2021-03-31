const now = require("performance-now")

const data = {
    category: "Search",
    algorithm: "Linear Search",
    explanation: `Sequential search technique that searches for each element in the list until the target is found.
It's the simplest search algorithm to implement, but one of the slowest due to it's search method.`,
    timeComplexity: {
        best: "O(1)",
        average: "O(n/2)",
        worst: "O(n)",
        observation: "n = Length of list"
    }
}

const template = {
    metadata: {
        date: new Date().toISOString(),
        category: "Search",
        algorithm: "Linear Search",
        performance: null
    },
    search: {
        input: null,
        target: null,
        result: null,
        found: false,
        data: []
    }
}

function createSnapshot(index, found, observation) {
    template.search.data.push({
        index: index,
        found: found,
        observation: observation
    })
}

function linearSearch(array, target) {
    template.search.input = array
    template.search.target = target
    template.search.result = -1

    let index
    for (index = 0; index < array.length; index++) {
        if (array[index] === target) {
            template.search.result = index
            template.search.found = true
            createSnapshot(index, true, `Target ${target} found at index ${index}.`)
            return index
        }
        createSnapshot(index, false, `Target ${target} was not found at index ${index}. Continue.`)
    }
    createSnapshot(index, false, `Target ${target} not found in the list.`)
    return -1
}

function perform(array, target) {
    template.metadata = {
        date: new Date().toISOString(),
        category: "Search",
        algorithm: "Linear Search",
        performance: null
    }
    template.search = {
        input: null,
        target: null,
        result: null,
        found: false,
        data: []
    }
    const start = now()
    linearSearch(array, target)
    const end = now()
    template.metadata.performance = end - start
    return template
}

module.exports = {
    perform,
    data
}