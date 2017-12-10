/**
 * Created by Akshat on 05-12-2017.
 */
//Recursion example
// When function calls itself

function computeFactorial(number) {
    if(number ===1){
        return 1
    }
    return number * computeFactorial(number-1)
}

//1. Write a function that loops through the numbers n down to 0.
// If you haven't done so try using a while loop to do this.


function whileLoopExample(num) {
    var n = num;
    while(n>0){
        //do whatever you want
        n++
    }
}



//2. Next, try looping just like above except using recursion
function loopFromNtoZero(number) {
    if(number===0){
        return 0;
    }
    //do whatever you want
    number--;
    return loopFromNtoZero(number);
}

//3.Write a function 'exponent' that takes two arguments base, and expo,
// uses a while loop to return the exponenet value of the base.

function calculateExp (base, exponent) {

    while(exponent>1){
        base *= base;
    }
    return base;
}

//4. Write a function 'RecursiveExponent' that takes two arguments base,
// and expo, recursively returns exponent value of the base.

function recursiveExponent(base, exponent){
    if(exponent<1){
        return 1;
    }
    return base * recursiveExponent(base, exponent-1)
}

//5. Write a function 'recursiveMultiplier' that takes two arguments, 'arr and num',
// and multiplies each arr value  by num and returns an array of the values.
function recursiveMultiplier(arr, num) {
    var len = arr.length;
    var i = 0;
    function recursion() {
        if(i===len){
            return "completed"
        }
        arr[i] = arr[i]*num;
        i++;
        recursion();
    }
    recursion();
    return arr;


}

//6. Write a function 'recursiveReverse' that takes an array and uses recursion to return its contents in reverse
function  recursiveReverse(arr) {
    var len = arr.length;
    var revArr =[];
    function recursion() {
        len--;
        if(len<0){
            return "completed";
        }
        revArr.push(arr[len]);
        recursion();
    }

    recursion();

    return revArr;

}

