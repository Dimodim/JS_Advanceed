function printCalculatedPrice(fruit,weight,money)
{
    weight = weight/1000;
    money = money*weight;
   console.log(`I need \$${money.toFixed(2)} to buy ${weight.toFixed(2)} kilograms ${fruit}.`)

}

function gcd_two_numbers(x, y) {
    if ((typeof x !== 'number') || (typeof y !== 'number')) 
      return false;
    while(y) {
      var t = y;
      y = x % y;
      x = t;
    }
    return console.log(x);
  }

  function  sameNumbersInNumbeer(num){
    
    numAsString = String(num).split("");

    let digit = numAsString[0];
    let sameNumbers = true;

    for(let i = 0 ; i < num.length ;i++ ){
      sumNums+=sum[i];

        if ( num[i] != digit ){
            sameNumbers = false;
            break;
        }
    }
    
    let sum = numAsString.map(Number).reduce((accumulator, currentValue) => accumulator + currentValue);
        console.log(sameNumbers);
        return console.log(sum); 

  } 
    

    sameNumbersInNumbeer(22222222222);


