let spanNumber = 0;

const buttonNumberOne = document.getElementById("number-one");
buttonNumberOne.addEventListener('click', ()=>{
    if(spanNumber != 0){
        spanNumber.classList.remove("numberSelect")
    }
        spanNumberSelect(buttonNumberOne);
}) 

const buttonNumberTwo = document.getElementById("number-two");
buttonNumberTwo.addEventListener('click', ()=>{
        if(spanNumber != 0){
        spanNumber.classList.remove("numberSelect")
        }
        spanNumberSelect(buttonNumberTwo);
}) 

const buttonNumberThree = document.getElementById("number-three");
buttonNumberThree.addEventListener('click', ()=>{
        if(spanNumber != 0){
        spanNumber.classList.remove("numberSelect")
        }
        spanNumberSelect(buttonNumberThree);
}) 

const buttonNumberFour = document.getElementById("number-four");
buttonNumberFour.addEventListener('click', ()=>{
        if(spanNumber != 0){
        spanNumber.classList.remove("numberSelect")
        }
        spanNumberSelect(buttonNumberFour);
}) 

const buttonNumberFive = document.getElementById("number-five");
buttonNumberFive.addEventListener('click', ()=>{
        if(spanNumber != 0){
        spanNumber.classList.remove("numberSelect")
        }
        spanNumberSelect(buttonNumberFive);
}) 

function spanNumberSelect(elementBtnNumber){
    spanNumber = elementBtnNumber;
    spanNumber.classList.add("numberSelect");
}

const btnSubmit = document.getElementById('btnSubmit');
btnSubmit.addEventListener('click', ()=>{
        const containerInitial = document.getElementById('initial-container');

        containerInitial.style.display = "none";
        numSelected();
        showFinalContainer();
})

let informedValue = document.getElementById('informedValue');
const numSelected = ()=>{
        informedValue = spanNumber.value;

        text_NumberSelected();
}

const text_NumberSelected = ()=>{
        const result = document.getElementById('result');
        result.innerHTML = `You selected ${informedValue} out of 5`;
}

const showFinalContainer = ()=>{
        const containerFinal = document.getElementById('container-final');
        containerFinal.style.display = 'block';
        containerFinal.style.marginTop = '10%';
        containerFinal.style.animation = "showContainer 600ms ease 200ms 1 normal backwards";
}

