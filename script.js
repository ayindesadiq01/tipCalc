'use strict';
let inputBill = document.querySelector('.bill-field');
let inputPeopleNumber = document.querySelector('.people-field');
let inputCustom = document.querySelector('.custom');
let amount = document.querySelector('.amount');
let total = document.querySelector('.total');
let cent = document.querySelectorAll('.cent');
let errorMessage = document.querySelector('.error-message');
let toAmount, amountValue;

// ADD AN EVENT LISTENER TO THE TIP CENT
cent.forEach(tipCent => {
 tipCent.addEventListener('click', function(){

  if(!inputPeopleNumber.value && !inputBill.value) {
   console.log('none')
   errorMessage.textContent = "Can't be zero";
   inputPeopleNumber.style.border = '1px solid red'
  } else {
   errorMessage.textContent = "";
   inputPeopleNumber.style.border = 'none';
   inputBill.style.border = '2px solid hsl(172, 67%, 45%)'

   // WORKING ON TIP AMOUNT
   toAmount = parseInt(tipCent.textContent) * inputBill.value / inputPeopleNumber.value;

   amountValue = +(toAmount / 100).toFixed(2)

   amount.textContent = `$${amountValue}`;

   total.textContent = `$${+(inputBill.value / inputPeopleNumber.value + (+amountValue)).toFixed(2)}`;
  }


   if(!inputBill.value || !inputPeopleNumber.value) {
    inputPeopleNumber.style.border = '1px solid red'
   } else {
    inputPeopleNumber.style.border = ' 1px solid hsl(185, 41%, 84%)'
   }
 })
})

// TO RESET 
const resets = document.querySelector('.reset');

resets.addEventListener('click', function(){
 amount.textContent = '$0.00';
 total.textContent = '$0.00';
 inputPeopleNumber.value = '';
 inputBill.value = '';
 inputCustom.value = '';
})

// WORKING ON CUSTOM BUTTON
document.querySelector('.btn').addEventListener('click', function(){
 if(inputBill.value && inputPeopleNumber.value && inputCustom.value) {
  // CALCULATING VALUE FOR AMOUNT
  toAmount = +inputCustom.value * +inputBill.value / +inputPeopleNumber.value;
  
  amountValue = +(toAmount / 100).toFixed(2);
  
  amount.textContent = `$${amountValue}`;
  
  // CALCULATING TOTAL AMOUNT
  total.textContent = `$${+(inputBill.value / inputPeopleNumber.value + (+amountValue)).toFixed(2)}`;
 }
})