const findMin = (arr) => {
  let min = arr[0]
  for(let i = 1; i < arr.length; i++){
    if (arr[i] < min){
      min = arr[i]
    }
    
  }
  return min
}


function selectionSort(array) {
  // Only change code below this line
  let size = array.length
  for(let i = 0; i < size-1; i++){
    let min_index = i
    for(let j = min_index+1; j < size; j++){
      if (array[j] < array[min_index]){
        min_index = j
      }
    }
    if(i !== min_index){
      let temp = array[i]
      array[i] = array[min_index]
      array[min_index] = temp;
    }
   
  }
  return array;
  // Only change code above this line
}


// console.log(findMin([9,6,3,2]))