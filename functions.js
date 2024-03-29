// Given an array of strings, use a function to reverse all the elements in the string in ascending order and the specific elements in descending order
function sort(){
    let arr1 = ["cat", "fish", "snake", "python"];
    console.log(arr1.sort());
    console.log(arr1.reverse());
}
sort()
// Using JS functions and an array of numbers, return positive if an element within the array is positive, negative if an element is negative, else zero

   var arr = [5,2,30,-5,-7,5,0]
   function numbers(arr){
    let negative = arr.filter((element)=> element<0)
    let postive = arr.filter((element)=> element>0)
    let zero = arr.filter((element)=> element==0)
    return{
        negative:negative,
        postive:postive,
        zero:zero
    }
    
}
console.log(numbers(arr))
// Given an array of objects, where each object represents an employee with an id, name, and salary property, write a function that returns a new array of employee objects sorted by their salary in ascending order.
let employees = [
    { "id": 202,
     "name": "Kemper" ,
    "salary": 4000 
   },

    { "id": 203,
    "name": "edd" ,
     "salary": 2000 
    },

    { "id": 204,
    "name": "Ted" ,
     "salary":  3000 
    }


  ];
   let sortedObjects = employees.sort(
    (salary1,salary2)=>(salary1.salary<salary2.salary)? -1 : (salary1.salary > salary2.salary)? 1 : 0)
   console.log(sortedObjects)
// Write a function that accepts an array of numbers and uses the forEach() method to console.log each number multiplied by 2.
function multiply(numbers) {
    numbers.forEach((number) => {
       console.log(number * 2);
    });
   }
   multiply([1, 2, 3, 4]);
// Write a function that takes in an array of numbers and consoles the first four items multiplied by 8 and the last two added by 5. Console the array with the new values
function changeArray2(arr) {
    const firstFour = arr.slice(0, 4).map(item => item * 8);
    const lastTwo = arr.slice(-2).map(item => item + 5);
    const newArr = firstFour.concat(lastTwo);
    console.log(newArr);
   }
   changeArray2([10, 20, 30, 40, 50, 60])