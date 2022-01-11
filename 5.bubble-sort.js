function bubbleSort(array) {
  // Only change code below this line
  let size = array.length
  for (let i = 0; i < size-1; i++){
    for(let j = 0; j < size - 1 - i; j++){
      if (array[j] > array[j+1]){
        let temp = array[j]
        array[j] = array[j+1]
        array[j+1] = temp;
      }
    }
  }
  return array;
  // Only change code above this line
}


console.log(bubbleSort([7,4,2,1]))