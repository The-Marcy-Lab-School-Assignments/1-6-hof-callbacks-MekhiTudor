// const sortUsersByOrder = (arr2) => {
//     let arr = [...arr2]
//     for (let i = 0; i < arr.length; i++) {
//         for (let j = 0; j < arr.length; j++) {
//             if (arr[i].order < arr[j].order) {
//                 let temp = arr[i]
//                 arr[i] = arr[j]
//                 arr[j] = temp
//             }
//         }
//     }

//     return arr
//   };

  const users = [
    { name: 'Alice', order: 2 },
    { name: 'Bob', order: 4 },
    { name: 'Charlie', order: 1 },
    { name: 'Diana', order: 3 },
  ];

  const sortUsersByOrder = (arr) => {
    newArr = [...arr]
    return newArr.sort((a, b) => a.order - b.order)
   
  };

  
  console.log(sortUsersByOrder(users))

  const sortUsersByName = (arr) => {
    newArr = [...arr]
    return newArr.sort((a, b) => a.name - b.name)
   
  };
  console.log(sortUsersByName(users))


