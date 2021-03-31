const now = require("performance-now")

const data = {
    category: "Search",
    algorithm: "Binary Search",
    explanation: `A search technique for sorted lists. It is the most common form of interval search. When searching, 
it first compares the target to the middlemost element in the list, if such element is equal to the target, return
the index of the element. If not, we select a subset of the list based on if the target is greater or less 
than the middlemost value. The same process is repeated with the sublist obtained until the element is 
either found or not found. It is one of the most efficient search algorithms out there.`,
    timeComplexity: {
        best: "O(1)",
        average: "O(log n)",
        worst: "O(log n)",
        observation: "n = Length of list"
    }
}

const template = {
    metadata: {
        date: new Date().toISOString(),
        category: "Search",
        algorithm: "Binary Search",
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

function createSnapshot(left, middle, right, observation) {
    template.search.data.push({
        left: left,
        right: right,
        middle: middle,
        observation: observation
    })
}

function binarySearch(array, target) {
    template.search.input = array
    template.search.target = target
    template.search.result = -1

    let left = 0
    let right = array.length - 1
    let middle
    createSnapshot(left, middle, right, `Set a range from ${left} to ${right}.`)

    while (left <= right) {
        middle = Math.floor((left + right) / 2)
        createSnapshot(left, middle, right, `Searching range from index ${left} to index ${right}. Set new middle = ${middle}.`)
        if (array[middle] < target) {
            left = middle + 1
            createSnapshot(
                left, middle, right,
                `Moved left since middle = ${middle} < target = ${target}. Set new range from index ${left} to index ${right}.`
            )
        } else if (array[middle] > target) {
            right = middle - 1
            createSnapshot(
                left, middle, right,
                `Moved right since middle = ${middle} > target = ${target}. Set new range from index ${left} to index ${right}.`
            )
        } else {
            template.search.found = true
            template.search.result = middle
            createSnapshot(
                left, middle, right,
                `Middle = ${middle} equals target = ${target}. Target ${target} found at index ${middle}.`
            )
            return middle
        }
    }
    createSnapshot(left, middle, right, `Target ${target} was not found.`)
    return -1
}

function perform(array, target) {
    template.metadata = {
        date: new Date().toISOString(),
        category: "Search",
        algorithm: "Binary Search",
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
    binarySearch(array, target)
    const end = now()
    template.metadata.performance = end - start
    return template
}

module.exports = {
    perform,
    data
}

