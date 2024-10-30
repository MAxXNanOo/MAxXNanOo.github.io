let tmp_Number_Display = ""; 
let sNumber1="",sNumber2="",num1,num2;
let checkcal = 0 ;
let tmp_value =0;
let cal;


function calfunctionNum(num){
    if(checkcal==1){
        checkcal=2;
    }
    tmp_Number_Display += num ;
    document.getElementById("tmp_Num").textContent = tmp_Number_Display;

    if (checkcal==0) {
        sNumber1 += num;
    }
    else if(checkcal==2){
        sNumber2 += num;
    }
}

function calfunction(tmp_cal){
    if(checkcal==2){
        document.getElementById("Value").textContent = "Error";
        return 0;
    }
    else{
        checkcal=1;
    }
    
    
    tmp_Number_Display += tmp_cal;
    document.getElementById("tmp_Num").textContent = tmp_Number_Display;
    cal = tmp_cal ;
    
}

function setfunction(set){
    if(set=='d'){
        if(checkcal==0){
            sNumber1 = sNumber1.slice(0, -1);
        }else
        if(checkcal==1){
            checkcal==0;
        }else
        if(checkcal==2){
            if(tmp_Number_Display[tmp_Number_Display.length-1] == '+' || tmp_Number_Display[tmp_Number_Display.length-1] == '-' || tmp_Number_Display[tmp_Number_Display.length-1] == '*' || tmp_Number_Display[tmp_Number_Display.length-1] == '÷')
                checkcal=0;
            sNumber2 = sNumber2.slice(0, -1);
        }
        tmp_Number_Display = tmp_Number_Display.slice(0, -1);
        
    }
    else if(set=='r'){
        checkcal=0;
        sNumber1="";
        sNumber2="";
        tmp_Number_Display = "";
    }

    document.getElementById("tmp_Num").textContent = tmp_Number_Display;
    document.getElementById("Value").textContent = "0";
    
}
function sumfunction(tmp_sum){
    num1 = parseFloat(sNumber1);
    num2 = parseFloat(sNumber2);
    console.log("num1 = ",num1)
    console.log("num2 = ",num2)
    
    if(cal=='+'){
        tmp_value = num1+num2 ;
    }
    else if(cal=='-'){
        tmp_value = num1-num2 ;
    }
    else if(cal=='*'){
        tmp_value = num1*num2 ;
    }
    else if(cal=='÷'){
        tmp_value = num1 / num2 ;
    }

    document.getElementById("Value").textContent = tmp_value;

    
}


