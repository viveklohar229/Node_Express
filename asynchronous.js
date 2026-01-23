// console.log("a")
// // console.log("b")
// setTimeout(() => {
//     console.log("b")
// })
// console.log("c")


// Drawback of asynchronous

// let first = "Vini";
// let last = "";

// setTimeout(()  => {
//      last =  "Vivek";
// },2000);

// console.log(first + " " + last);


// Resolve this drawback from using Promises

let first = "Pullu";
let last = "";

const setLastName = new Promise((resolve, reject) => {
    setTimeout(() => {
        // last = "Vivek";
        resolve("Vivek");
    }, 2000);

})

// setLastName.then((data) => {
//     last = data;
//     // console.log(first + " " + last); 
//     console.log(first + " " + data);
// })

// console.log("Hello")

const displayLastName = async () => {
    last = await setLastName;
    console.log(`${first} ${last}`);
}

displayLastName();
