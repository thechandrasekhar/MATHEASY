var icon = document.getElementById("icon");
icon.onclick = function(){
        document.body.classList.toggle("dark-theme");
        if(document.body.classList.contains("dark-theme")){
            icon.src = "images/sun.png";
        }else{
            icon.src = "images/moon.png";
        }
}

function getHistory(){
	return document.getElementById("history-value").innerText;
}
function printHistory(num){
	document.getElementById("history-value").innerText=num;
}
function getOutput(){
	return document.getElementById("output-value").innerText;
}
function printOutput(num){
	if(num==""){
		document.getElementById("output-value").innerText=num;
	}
	else{
		document.getElementById("output-value").innerText=getFormattedNumber(num);
	}	
}
function getFormattedNumber(num){
	if(num=="-"){
		return "";
	}
	var n = Number(num);
	var value = n.toLocaleString("en");
	return value;
}
function reverseNumberFormat(num){
	return Number(num.replace(/,/g,''));
}
var operator = document.getElementsByClassName("operator");
for(var i =0;i<operator.length;i++){
	operator[i].addEventListener('click',function(){
		if(this.id=="clear"){
			printHistory("");
			printOutput("");
		}
		else if(this.id=="backspace"){
			var output=reverseNumberFormat(getOutput()).toString();
			if(output){//if output has a value
				output= output.substr(0,output.length-1);
				printOutput(output);
			}
		}
		else{
			var output=getOutput();
			var history=getHistory();
			if(output==""&&history!=""){
				if(isNaN(history[history.length-1])){
					history= history.substr(0,history.length-1);
				}
			}
			if(output!="" || history!=""){
				output= output==""?output:reverseNumberFormat(output);
				history=history+output;
				if(this.id=="="){
					var result=eval(history);
					printOutput(result);
					printHistory("");
				}
				else{
					history=history+this.id;
					printHistory(history);
					printOutput("");
				}
			}
		}
		
	});
}
var number = document.getElementsByClassName("number");
for(var i =0;i<number.length;i++){
	number[i].addEventListener('click',function(){
		var output=reverseNumberFormat(getOutput());
		if(output!=NaN){ //if output is a number
			output=output+this.id;
			printOutput(output);
		}
	});
}
/***********************************************ALGEBRA******************************************************/


function ab1(){
    var a = parseInt(document.getElementById('a1').value);
    var b = parseInt(document.getElementById('b1').value);
    var res = a*a + 2*a*b + b*b;
    console.log(res);
    document.getElementById('res1').innerHTML = res;
}

function ab2(){
    var a = parseInt(document.getElementById('a2').value);
    var b = parseInt(document.getElementById('b2').value);
    var res = a**2 - 2*a*b + b**2;
    console.log(res);
    document.getElementById('res2').innerHTML = res;
}

function ab3(){
    var a = parseInt(document.getElementById('a3').value);
    var b = parseInt(document.getElementById('b3').value);
    var res = a**3 + 3*a*a*b +3*a*b*b + b**3;
    console.log(res);
    document.getElementById('res3').innerHTML = res;
}

function ab4(){
    var a = parseInt(document.getElementById('a4').value);
    var b = parseInt(document.getElementById('b4').value);
    var res = a**3 - 3*a*a*b +3*a*b*b - b**3;
    console.log(res);
    document.getElementById('res4').innerHTML = res;
}

function ab5(){
    var a = parseInt(document.getElementById('a5').value);
    var b = parseInt(document.getElementById('b5').value);
    var c = parseInt(document.getElementById('c5').value);
    var res = a*a + b*b + c*c + 2*a*b + 2*b*c + 2*a*c ;
    console.log(res);
    document.getElementById('res5').innerHTML = res;
}

function ab6(){
    var a = parseInt(document.getElementById('a6').value);
    var b = parseInt(document.getElementById('b6').value);
    var c = parseInt(document.getElementById('c6').value);
    var res = a**3 + b**3 + c**3 + 3*a*a*b + 3*a*a*c + 3*b*b*c + 3*b*b*a + 3*c*c*a + 3*c*c*b + 6*a*b*c ;
    console.log(res);
    document.getElementById('res6').innerHTML = res;
}

function ab7(){
    var a = parseInt(document.getElementById('a7').value);
    var b = parseInt(document.getElementById('b7').value);
    var res = (a+b) * (a-b) ;
    console.log(res);
    document.getElementById('res7').innerHTML = res;
}

function ab8(){
    var a = parseInt(document.getElementById('a8').value);
    var b = parseInt(document.getElementById('b8').value);
    var res = (a+b)*(a*a - a*b + b*b);
    console.log(res);
    document.getElementById('res8').innerHTML = res;
}

function ab9(){
    var a = parseInt(document.getElementById('a9').value);
    var b = parseInt(document.getElementById('b9').value);
    var res = (a-b)*(a*a + a*b + b*b);
    console.log(res);
    document.getElementById('res9').innerHTML = res;
}


/***********************************************GEOMETRY******************************************************/

function s_peri(){
    var a = parseFloat(document.getElementById('s_side1').value);
    var res = 4*a;
    console.log(res);
    document.getElementById('s_res1').innerHTML = res;
}

function s_area(){
    var a = parseFloat(document.getElementById('s_side2').value);
    var res = a*a;
    console.log(res);
    document.getElementById('s_res2').innerHTML = res;
}

function s_dia(){
    var a = parseFloat(document.getElementById('s_side3').value);
    var res = a*Math.sqrt(2);
    console.log(res);
    document.getElementById('s_res3').innerHTML = res;
}

function r_peri(){
    var l = parseInt(document.getElementById('r_len1').value);
    var b = parseInt(document.getElementById('r_wid1').value);
    var res = 2*(l+b);
    console.log(res);
    document.getElementById('r_res1').innerHTML = res;
}

function r_area(){
    var l = parseInt(document.getElementById('r_len2').value);
    var b = parseInt(document.getElementById('r_wid2').value);
    var res = l*b;
    console.log(res);
    document.getElementById('r_res2').innerHTML = res;
}

function r_dia(){
    var l = parseInt(document.getElementById('r_len3').value);
    var b = parseInt(document.getElementById('r_wid3').value);
    var res = Math.sqrt(l*l + b*b);
    console.log(res);
    document.getElementById('r_res3').innerHTML = res;
}

function c_cir(){
    var r = parseFloat(document.getElementById('c_rad1').value);
    var res = 2*3.14*r;
    console.log(res);
    document.getElementById('c_res1').innerHTML = res;
}

function c_area(){
    var r = parseInt(document.getElementById('c_rad2').value);
    var res = 3.14*r*r;
    console.log(res);
    document.getElementById('c_res2').innerHTML = res;
}

function c_dia(){
    var r = parseFloat(document.getElementById('c_rad3').value);
    var res = 2*r;
    console.log(res);
    document.getElementById('c_res3').innerHTML = res;
}

/***********************************************TRIGONOMETRY******************************************************/

function sinA(){
    var a =parseInt(document.getElementById('A').value);
    var res = Math.sin(a) ;
    console.log(res);
    document.getElementById('tres7').innerHTML = res;
}
function cosA(){
    var a =parseInt(document.getElementById('B').value);
    var res = Math.cos(a) ;
    console.log(res);
    document.getElementById('tres8').innerHTML = res;

}
function tanA(){
    var a =parseInt(document.getElementById('C').value);
    var res = Math.tan(a) ;
    console.log(res);
    document.getElementById('tres9').innerHTML = res;

}
function sinAB(){
    var a = parseInt(document.getElementById('p').value);
    var b = parseInt(document.getElementById('q').value);
    var res = Math.sin(a) * Math.cos(b) + Math.sin(b) * Math.cos(a);
    console.log(res);
    document.getElementById('res10').innerHTML =res ;
}
function sinA_B(){
    var a = parseInt(document.getElementById('p1').value);
    var b = parseInt(document.getElementById('q1').value);
    var res = Math.sin(a) * Math.cos(b) - Math.sin(b) * Math.cos(a);
    console.log(res);
    document.getElementById('res11').innerHTML =res ;
}
function cosAB(){
    var a = parseInt(document.getElementById('p2').value);
    var b = parseInt(document.getElementById('q2').value);
    var res = Math.cos(a) * Math.cos(b) - Math.sin(a) * Math.cos(b);
    console.log(res);
    document.getElementById('res12').innerHTML =res ;
}
function cosA_B(){
    var a = parseInt(document.getElementById('p3').value);
    var b = parseInt(document.getElementById('q3').value);
    var res = Math.cos(a) * Math.cos(b) + Math.sin(a) * Math.cos(b);
    console.log(res);
    document.getElementById('res13').innerHTML =res ;
}
function tanAB(){
    var a = parseInt(document.getElementById('p4').value);
    var b = parseInt(document.getElementById('q4').value);
    var res = (Math.tan(a) + Math.tan(b)) /( 1 - Math.tan(a) * Math.tan(b));
    console.log(res);
    document.getElementById('res14').innerHTML =res ;
} 
function tanA_B(){
    var a = parseInt(document.getElementById('p5').value);
    var b = parseInt(document.getElementById('q5').value);
    var res = (Math.tan(a) - Math.tan(b)) /( 1 +  Math.tan(a) * Math.tan(b));
    console.log(res);
    document.getElementById('res15').innerHTML =res ;
}  
function sin2A(){
    var a = parseInt(document.getElementById('p6').value);
    var res = 2 * Math.sin(a) * Math.cos(a);
    console.log(res);
    document.getElementById('res16').innerHTML =res ;
}  
function cos2A(){
    var a = parseInt(document.getElementById('p7').value);
    var res = Math.cos**2(a) - Math.sin**2(a);
    console.log(res);
    document.getElementById('res17').innerHTML =res ;
}  
function sAsB(){
    var a = parseInt(document.getElementById('p8').value);
    var b = parseInt(document.getElementById('q8').value);
    var res = 2 * Math.sin( 1/2 * (a+b)) * Math.cos( 1/2 * (a-b));
    console.log(res);
    document.getElementById('res18').innerHTML =res;
}
function sA_sB(){
    var a = parseInt(document.getElementById('p9').value);
    var b = parseInt(document.getElementById('q9').value);
    var res = 2 * Math.sin( 1/2 * (a-b)) * Math.cos( 1/2 * (a+b));
    console.log(res);
    document.getElementById('res19').innerHTML =res;
}
function cAcB(){
    var a = parseInt(document.getElementById('p10').value);
    var b = parseInt(document.getElementById('q10').value);
    var res = 2 * Math.cos( 1/2 * (a+b)) * Math.cos( 1/2 * (a-b));
    console.log(res);
    document.getElementById('res20').innerHTML =res;
}
function cA_cB(){
    var a = parseInt(document.getElementById('p11').value);
    var b = parseInt(document.getElementById('q11').value);
    var res = -2 * Math.sin( 1/2 * (a+b)) * Math.sin( 1/2 * (a-b));
    console.log(res);
    document.getElementById('res21').innerHTML =res;
}
function cotAB(){
    var a = parseInt(document.getElementById('p12').value);
    var b = parseInt(document.getElementById('q12').value);
    var res =(((1/Math.tan(a)) *(1/ Math.tan(b))) - 1 ) / ((1/ Math.tan(a) )+ (1/Math.tan(b)) );
    console.log(res);
    document.getElementById('res22').innerHTML =res;
}
function cotA_B(){
    var a = parseInt(document.getElementById('p13').value);
    var b = parseInt(document.getElementById('q13').value);
    var res = (1 + ((1/Math.tan(a)) * (1/Math.tan(b))))/ ((1/Math.tan(b)) - (1/Math.tan(a)));
    console.log(res);
    document.getElementById('res23').innerHTML =res ;
}  
function siAsiB(){
    var a = parseInt(document.getElementById('p14').value);
    var b = parseInt(document.getElementById('q14').value);
    var res = 0.5 * (Math.cos(a-b) - Math.cos(a+b));
    console.log(res);
    document.getElementById('res24').innerHTML =res;
}
function siAcoB(){
    var a = parseInt(document.getElementById('p15').value);
    var b = parseInt(document.getElementById('q15').value);
    var res = 0.5 * (Math.sin(a+b) + Math.sin(a-b));
    console.log(res);
    document.getElementById('res25').innerHTML =res;
}
function coAcoB(){
    var a = parseInt(document.getElementById('p16').value);
    var b = parseInt(document.getElementById('q16').value);
    var res = 0.5 * (Math.cos(a-b) + Math.cos(a+b));
    console.log(res);
    document.getElementById('res26').innerHTML =res;
}
function coAsiB(){
    var a = parseInt(document.getElementById('p17').value);
    var b = parseInt(document.getElementById('q17').value);
    var res = 0.5 * (Math.sin(a+b) - Math.sin(a-b));
    console.log(res);
    document.getElementById('res27').innerHTML =res;
}