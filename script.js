
const billInput=document.getElementById('billTotalInput');
const tipInput=document.getElementById('tipInput');
const numberOfPeopleDiv=document.getElementById('numberOfPeople');
const perPersonTotalDiv=document.getElementById('perPersonTotal');



let numberOfPeople=Number(numberOfPeopleDiv.innerText);

const calculateBill = () => {

  const bill=Number(billInput.value);


  const tipPercentage=Number(tipInput.value)/100

  
  const tipAmount=bill*tipPercentage;

  
  const total=tipAmount+bill;

  
const perPersonTotal=total/numberOfPeople;

  
perPersonTotalDiv.innerText=`$${perPersonTotal}`;
}


const increasePeople = () => {
  
  numberOfPeople+=1;

numberOfPeopleDiv.innerText=numberOfPeople;


calculateBill()
}


const decreasePeople = () => {
  
if(numberOfPeople<=1){
  console.log('Its less than 1 therefore I need to stop');
}
  
  
else{
numberOfPeople-=1;
  

numberOfPeopleDiv.innerText=numberOfPeople;
}
  calculateBill()

}