function insertionSort(array) {
  // Only change code below this line
  let size = array.length
  for(let i = 1; i < size; i++){
    let anchor = array[i]
    let j = i-1
    while(j >= 0 && anchor < array[j]){
      array[j+1] = array[j]
      j = j - 1
    }
    array[j+1] = anchor
  }
  return array;
  // Only change code above this line
}