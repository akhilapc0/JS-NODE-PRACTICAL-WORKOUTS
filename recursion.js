
function count(n){

    if(n===0) return;
    console.log(n)
    count(n-1)
}

count(5)