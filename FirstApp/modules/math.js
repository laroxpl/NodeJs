function add(...numbers){
    let sum = 0;
    for(let number of numbers){
        sum+=number
    }
    return sum;
}
function multi(...numbers){
    let product=1;
    for(let number of numbers){
        product*=number
    }
    return product;
}

module.exports={
    add:add,
    multi:multi
}