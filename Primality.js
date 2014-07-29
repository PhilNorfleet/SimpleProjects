var primes = new Array;
buildPrimeList();
var currentNum1;
function oneButtonChange(){
	
	var elem = document.getElementById("oneButton");
	var num = Math.floor(parseInt(prompt("enter number up to 1 million... last number was " + currentNum1)));
	currentNum1 = num;
	if(num>0 && num<=1000000){
		elem.value = "prime number " + num + " is " + parseInt(primes[num-1]);
	}
	else{
		elem.value = "Please enter an integer 1-1000000!"
	}
}
var currentNum2;
function twoButtonChange(){
	
	var elem = document.getElementById("twoButton");
	var num = Math.floor(parseInt(prompt("enter number... last number was " + currentNum2)));
	//elem.value = isPrime(num);
	currentNum2 = num
	
	if(isPrime(num)){
		elem.value = num + " is prime number " + parseInt(primes.indexOf(num)+1);
	}
	else{
		elem.value = num + " is not prime";
	}
}
function isPrime(n) {
 if (isNaN(n) || !isFinite(n) || n%1 || n<2) return false; 
 if (n%2==0) return (n==2);
 if (n%3==0) return (n==3);
 var m=Math.sqrt(n);
 for (var i=5;i<=m;i+=6) {
  if (n%i==0)     return false;
  if (n%(i+2)==0) return false;
 }
 return true;
}

function whichPrime(num){
	return primes.indexOf(num);
}

function buildPrimeList() {
	primes.push(2);
	primes.push(3);
	primes.push(5);
	for (var i = 5; i < 15485864; i += 6){
		if (isPrime(i)) {primes.push(i)};
	}
}
