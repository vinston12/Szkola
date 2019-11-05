var input = document.getElementById("input");
var result = document.getElementById("result");
var inputType = document.getElementById("inputType");
var resultType = document.getElementById("resultType");
var bConver = document.getElementById("bConvert");

const values = {
    dlugosc: {cm: 1, m: 100, km: 100000, mila: 160000, cal: 2.54},
    objetosc: {litr: 1, decylitr: 0.1, galon: 3.7854},
    masa: {kg: 1000, gram: 1, funt: 409.51718},
    powierzchnia: {m2: 10000, cm2: 1, ar: 1000000, ha: 100000000},
    predkosc: {ms: 1, kmh: 3.6, wezel: 1.94384449}
};
const selects = document.querySelectorAll('select');
const aEle = document.querySelectorAll('a');
const keys = Object.keys(values['dlugosc']);
selects.forEach(select => select.innerHTML = '');

selects.forEach(select => {
  keys.forEach(key => {
     const option = document.createElement('option');
     option.value = key;
     option.textContent = key;
     select.appendChild(option.cloneNode(true));
  });
});


bConver.addEventListener("click",function valChange(){
    var inputTypeValue = inputType.value;
    var resultTypeValue = resultType.value;
    
    const from = values['dlugosc'][inputTypeValue];
    const to = values['dlugosc'][resultTypeValue];
    
    result.value = (input.value * from)/to;
    
});