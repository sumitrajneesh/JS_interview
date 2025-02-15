//callback Queue - Task Queue  
setTimeout(() => { console.log('1', 'is the lonelest number') }, 0)
setTimeout(() => { console.log('2', 'can be as bad as one ') }, 10)


//2
//jOb queue: - Microtask Queue
Promise.resolve('hi').then((data) => console.log('2', data))

//3

console.log('3', 'is a crowd');
/**
 * callback queue - Task queue
 * Job Queue - Microtask Queue
 */

/**
 * what is program
 * allocate memory
 * parse
 * unuse memrory create memory leak
 * const a = 1
 * const  b = 10
 * const c = 100
 */

/**
 * Call Stack
 */

console.log('1');
setTimeout(() => {
    console.log('2')
}, 0)

console.log('3')

//CALL STACK

//WEB API

//CALLBACK QUEUE

//EVENT LOOP

element.addEventListener('click', () => {
    console.log('click')
})