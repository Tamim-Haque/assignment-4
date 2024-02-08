

function calculateMoney(ticketSale) {
    if (ticketSale<0){
        return 'Invalid Number'
    }
    const cost = 500 + (8*50);
    const earn = ticketSale*120;
    const totalEarn = earn-cost;
    return totalEarn; 
}
 


function checkName(names ){
    if (typeof names!=="String"){
        return 'invalid'
    }
    names = names.toLowerCase()
    const words =["a", "y", "i" , "e" , "o" , "u", "w"];
    const lastCharacter = names[names.length-1]
    if(words.includes(lastCharacter)) {return 'good name'}
    else{
        return 'bad name'
    }
}



function deleteInvalids(arr){
    if(!Array.isArray(arr)){
        return 'Invalid Array'
    }
    const validNumber = [];
    for(let i=0;i<arr.length;i++){
        if(typeof arr[i] === 'number' && !isNaN(arr[i])){
            validNumber.push(arr[i]);
        }
    }
    return validNumber
}



function password(obj){
    let count = 0;
    let year = obj.birthYear.toString();
    for( let i in obj){
        count ++;
    }
    if(count < 3 || year.length < 4){
        return 'invalid';
    }
    const newSiteName = obj.siteName[0].toUpperCase()+obj.siteName.slice(1);
    const password = newSiteName+ '#'+ obj.name + '@'+ obj.birthYear;
    return password;
}



function monthlySavings(arr, nums){
    if(!Array.isArray(arr) || typeof nums !== 'number'){
        return 'invalid input';
    }
    let totalMoney=0;
    for(let i=0;i<arr.length;i++){
        if(arr[i]>3000){
            arr[i] -= arr [i]*0.2
        }
        else if(arr[i]===3000){
            arr[i] -= arr [i]*0.2
        }
        totalMoney += arr[i]
    }
    const savings = totalMoney-nums;
    if(savings>=0){
        return savings;
    }
    else{
        return 'earn more'
    }
}