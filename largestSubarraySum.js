let largestSubarraySum = (array) => {
    let currentSum = 0
    let largestSum = 0

    for(let number of array){
        currentSum = Math.max(0, (currentSum + number))
        largestSum = Math.max(largestSum, currentSum)
    }
    
    return largestSum
  
}

module.exports = largestSubarraySum
