/*
    Write a function that returns a promise that resolves after n seconds have passed, where n is passed as an argument to the function.
*/

function wait(n) {

    return new Promise((res,rej)=>{
        setTimeout(()=>{res("promise resolved")},n*1000);
    })
}

//console.log(wait(3));

wait(3).then((data)=>{
    console.log(data);
})

async function callwait(n){

    console.log("before wait call");

    const response = await wait(n);

    console.log(response);

} 

callwait(5)