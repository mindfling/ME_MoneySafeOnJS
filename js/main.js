'use strict';

import { conventStringNumber } from "./convertStringNumber.js";
console.log('conventStringNumber: ', conventStringNumber('345acbd'));


console.log('Hellllo Finance');


const report = document.querySelector('.report')

const financeReportBtn = document.querySelector('.finance__report');
console.log('financeReportBtn: ', financeReportBtn);
financeReportBtn.addEventListener('click', e => {
  e.preventDefault();
  console.log(e.target);
  report.classList.toggle('report__open');
});


const financeForm = document.querySelector('.finance__form');
console.log('форма financeForm: ', financeForm);


const financeAmount = financeForm.querySelector('.finance__amount');
console.log('financeAmount: ', financeAmount);

let amount = 22;

financeAmount.textContent = amount;


financeForm.addEventListener('submit', e => {
  e.preventDefault();
  const target = e.target;
  const submitter = e.submitter;
  const typeOperation = submitter?.dataset?.typeOperation;
  console.log(target, e.submitter, typeOperation);
});



// const report = document.querySelector('.report')
// report.addEventListener('click', (e) => {
//   e.preventDefault();
//   const target = e.target;
  
// })

