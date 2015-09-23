//Write 4 functions and call them all in one long chain

// Function 1
function cubeIt(a){
	return a * a * a;
}

// Function2
function subtractTwoHundred(b){
	return b - 100;
}

// Function 3
function cutItInHalf(c){
	return c / 2;
}

// Function 4
function multiplyTimesSix(d){
	return d * 6;
}

// Call all 4 functions in one chain
var output = multiplyTimesSix(cutItInHalf(subtractTwoHundred(cubeIt(6))));

//output result
console.log(output);
// 648

