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
    { name: 'Alice', order: 22 },
    { name: 'Charlie', order: 28 },
    { name: 'Diana', order: 40 },
    { name: 'Bob', order: 32 },
]

  const sortUsersByOrder = (arr) => {
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
      
        // names must be equal
        return 0;
      });
   
  };

  
 console.log(sortUsersByOrder(users))

  const sortUsersByName = (arr) => {
    newArr = [...arr]
    return newArr.sort((a, b) => b - a)
   
  };
//   console.log(sortUsersByName(users))


