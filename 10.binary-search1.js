function binarySearch(searchList, value) {
  let arrayPath = [];
  let left_index = 0;
  let right_index = searchList.length-1;
  while (left_index<= right_index){
    let mid_index = Math.floor((left_index+right_index)/2)
    let mid_number = searchList[mid_index]
    arrayPath.push(mid_number)

    if (mid_number === value){
      return arrayPath;
    }

    if (mid_number < value){
      left_index = mid_index+1
  
    }

    else{
      left_index = 0
      right_index = mid_index-1
    }
  }
  return "Value Not Found"

  return arrayPath;
}