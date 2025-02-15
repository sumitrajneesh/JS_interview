// console.log('control Flow')

//condition ?exp1:exp2

function isUserValid(bool){
    return bool
}

var answer = isUserValid(false)? " you may enter ": 'Access Denied'
console.log(answer)

var automatedAnswer = "your account # is " + (isUserValid(false) ? "1234": "not available")
console.log(automatedAnswer)

function condition(){
    if(isUserValid(true)){
        return 'You may enter';
    }else {
        return "access denied"
    }
}

var answer2 = condition();
console.log(answer2)

/**
 * switch
 */

 function moveCommand(direction){
     var whatHappens;
     switch(direction){
         case 'forward':
             whatHappens = "you encounter a monster";
             break;
             case 'back':
                 whatHappens = "you arrived home";
                 break;
                 case 'right':
                     whatHappens = "you found a river";
                     break;
                     case 'left':
                         whatHappens = "you run into a troll";
                         break;
          default:
              whatHappens = "please enter a valid direction";   
     }
     return whatHappens;
 }

 console.log(moveCommand('right'))