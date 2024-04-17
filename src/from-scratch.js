const myForEach = (arr, callback) => {
  for (const index in arr){
    callback(arr[index])
  }
};

const myMap = (arr, callback) => { 
  newArr = []
  // for (const index in arr){
  //   newArr.push(callback(arr[index]))
  // }
  for(const num of arr)  {
    newArr.push(callback(num))
  }
  return newArr
};

const myFind = (arr, callback) => {
  for (const element of arr){
   if(callback(element)) {
    return element
   } 
   }
  }


const myFilter = (arr, callback) => {
  newArr = []
  for(const element of arr) {
    if(callback(element)) {
      newArr.push(element)
    }
  }return newArr
};

const sortWords = (arr) => {
  newArr = [...arr]
 return newArr.sort()
    }
  

const sortNumbers = (arr) => {
  newArr = [...arr]
  return newArr.sort((a, b) => a - b)
};

const sortNumbersBetter = (arr,isDescending) => {
  newArr = [...arr]
  if(isDescending) {return newArr.sort((a, b) => b - a)}
   return newArr.sort((a, b) => a - b)
  }

//Create a new array to sort the users in ascending order.

const sortUsersByOrder = (arr) => {
  newArr = [...arr]
  return newArr.sort((a, b) => a.order - b.order)
 
};


const sortUsersByName = (arr) => {
  let newArr = [...arr]
  return newArr.sort((a, b) => {
    const nameA = a.name.toUpperCase(); // ignore upper and lowercase
    const nameB = b.name.toUpperCase(); // ignore upper and lowercase
    if (nameA < nameB) {
      return -1;
    }
    if (nameA > nameB) {
      return 1;
    }
  
    
    return 0;
  })
 
};

module.exports = {
  myForEach,
  myMap,
  myFind,
  myFilter,

  sortWords,
  sortNumbers,
  sortNumbersBetter,
  sortUsersByOrder,
  sortUsersByName,
};
