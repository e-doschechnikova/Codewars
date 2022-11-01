function sumOfDifferences(arr) {
    let result = 0

    if (arr.length === 0 || arr.length === 1) {
        return 0
    }

    arr.sort((a, b) => {
        return b - a
    })

    for (let i = 0; i < arr.length - 1; i++) {
        result += arr[i] - arr[i + 1]
    }
    return result
}