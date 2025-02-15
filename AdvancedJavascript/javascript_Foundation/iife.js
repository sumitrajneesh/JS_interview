//Immediate invoke function expression
//a function without name is anonymous() function

var script1 = (function () {
    function a(){
        return 5;
    }
    return {
        a:a
    }
})()
console.log(script1.a)
//we can not call fuction after declartion
 //function add(){}()  