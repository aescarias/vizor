const now = require("performance-now")

const data = {
    category: "Search",
    algorithm: "Jump Search",
    explanation: `A hybrid search technique for sorted lists. It employs interval and sequential search to find
an element in a list. When searching, the array is split into blocks (the size of the blocks determined by √length of list).
The target is compared to each candidate of a block (assuming it's always the highest value of the block
as the list is sorted). If the correct block is found (the search candidate is greater than the target's value), a
linear search is performed on the block until the element is found. It's far more efficient than linear search,
but slower than binary search.`,
    timeComplexity: {
        best: "O(1)",
        average: "O(√n)",
        worst: "O(√n)",
        observation: "n = Length of list"
    }
}

const template = {
    metadata: {
        date: new Date().toISOString(),
        category: "Search",
        algorithm: "Jump Search",
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

function createSnapshot(index, jumpSize, found, observation) {
    template.search.data.push({
        index: index,
        jumpSize: jumpSize,
        found: found,
        observation: observation
    })
}

function jumpSearch(array, target) {
    template.search.input = array
    template.search.target = target
    template.search.result = -1

    let index = 0
    let jumpSize = Math.round(Math.sqrt(array.length))

    while (array[Math.min(jumpSize, array.length) - 1] < target) {
        createSnapshot(index, jumpSize, false, `Jump from index ${index} to index ${jumpSize}`)
        index = jumpSize
        jumpSize += Math.round(Math.sqrt(array.length))
        if (index >= array.length) {
            createSnapshot(index, jumpSize, false, `Block to jump to out of bounds. Did not find target ${target}.`)
            return -1
        }
    }

    createSnapshot(index, jumpSize, false, `Correct block found. Performing linear search.`)
    while (array[index] < target) {
        index += 1
        createSnapshot(index, jumpSize, false, `Target ${target} not at index ${index}. Checking next element.`)
        if (index === Math.min(jumpSize, array.length)) {
            createSnapshot(index, jumpSize, false, `Search has reached end of block. Did not find target ${target}`)
            return -1
        }
    }

    if (array[index] === target) {
        createSnapshot(index, jumpSize, true, `Target ${target} found at index ${index}.`)
        template.search.found = true
        template.search.result = index
        return index
    } else {
        const finalIndexMsg = `Final item = ${array[index]} at index ${index}`
        createSnapshot(index, jumpSize, false, `${finalIndexMsg} does not equal target = ${target}. Did not find target ${target}.`)
        return -1
    }
}

function perform(array, target) {
    template.metadata = {
        date: new Date().toISOString(),
        category: "Search",
        algorithm: "Jump Search",
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
    jumpSearch(array, target)
    const end = now()
    template.metadata.performance = end - start
    return template
}

module.exports = {
    perform,
    data
}

