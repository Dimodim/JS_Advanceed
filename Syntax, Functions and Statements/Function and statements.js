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

function TimeToWalk(arg1, arg2, arg3) {
  let stepsNumber = Number(arg1);
  let stepsMetersHr = Number(arg2);
  let studentSpeed = Number(arg3);

  let distanceMeters = stepsNumber * stepsMetersHr;
  let speedMetersSec = studentSpeed / 3.6;
  let time = distanceMeters / speedMetersSec;
  let rest = Math.floor(distanceMeters / 500);

  let timeMin = Math.floor(time / 60);
  let timeSec = Math.round(time - (timeMin * 60));
  let timeHr = Math.floor(time / 3600);


  console.log((timeHr < 10 ? "0" : "") + timeHr + ":" 
  + (timeMin + rest < 10 ? "0" : "") 
  + (timeMin + rest) + ":" 
  + (timeSec < 10 ? "0" : "") 
  + timeSec);

}


