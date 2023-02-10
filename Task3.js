function divideAndSort(number){
    let element=[]
    num = number.toString().split(0)
    for (let index = 0; index < num.length; index++) {
        element[index] = num[index].split('').sort().join('');
    }
    console.log(element.join(''), number);
}

divideAndSort(5956560159466056)