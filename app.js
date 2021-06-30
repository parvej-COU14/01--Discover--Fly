
function InputFistCase(isIncrease){
    const firstCase=document.getElementById("firstClass");
    const firstCaseValue=parseInt(firstCase.value);
    let firstCaseValueNew=firstCaseValue;
    if(isIncrease==true){
        firstCaseValueNew=firstCaseValue+1;
    }
    if(isIncrease==false&&firstCaseValue>0){
        firstCaseValueNew=firstCaseValue-1;
    }
   
    firstCase.value=firstCaseValueNew;
    TotalAmount();
}
function InputEconomicCase(isDecrease){
    const firstCase=document.getElementById("economicClass");
    const firstCaseValue=parseInt(firstCase.value);
    let firstCaseValueNew=firstCaseValue;
    if(isDecrease==true){
        firstCaseValueNew=firstCaseValue+1;
    }
    if(isDecrease==false&&firstCaseValue>0){
        firstCaseValueNew=firstCaseValue-1;
    }
   
    firstCase.value=firstCaseValueNew;
    TotalAmount();
}

function TotalAmount(){
    const firstCase=document.getElementById("firstClass");
    const firstCaseValue=parseInt(firstCase.value); 

    const economicCase=document.getElementById("economicClass");
    const economicCaseValue=parseInt(economicCase.value);

    const subTotal=firstCaseValue*150+economicCaseValue*100;
    document.getElementById("subTotal").innerText=subTotal;
    const taxAmount=subTotal*0.1;
    document.getElementById("tax").innerText=taxAmount;
    const total=subTotal-taxAmount;
    document.getElementById("total").innerText=total;

}

