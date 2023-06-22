

export function add(x, y){
    return x + y;
}


export function addRepeatedly(num, timesToAdd){
    let sum = 0;
    for(let i = 0; i < timesToAdd; i++){
        sum += num;
    }
    return sum;
}



