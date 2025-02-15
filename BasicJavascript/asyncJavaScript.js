//Sync code example

// function otherFunct(){
//     console.log('we are in another funct')
//     console.log('do some stuff')
// }

// console.log('start');
// otherFunct();
// console.log('End');


//async code example

//console.log('start')
// setTimeout(() => {console.log('we are int the timeout')},2000)

// const items = [1,2,3,4,5];
// items.forEach(item => {
//     console.log(item)
// })
// console.log('End');

//loginuser function
/** 
function loginUser(email,password, callback){
    setTimeout(() => {
        console.log('now we have the data');
        callback({userEmail:email})
    },3000)
}

//getUservideos function
function getUserVideoes(email,callback){
    setTimeout(() => {
        callback ( ['video1','video2','video3']);
    },2000)
}

//video detail function
function videoDetails(video,callback){
    setTimeout(() => {
        callback ( 'title of the video');
    },2000)
}
//call this loginuser function
const user = loginUser('sumit@gmail.com',12233,user => {
    console.log(user)
//call the get user videoes function
    getUserVideoes(user.userEmail,videos => {
        console.log(videos);
      //call the video detail function
        videoDetails(videos[0],(title) => {
            console.log(title)
        })
    })
})

**/
//Promise
/**
 * promise is the object
 * give the result of the async 
 * or the falure of the async function
 */


 const promise = new Promise((resolve,reject) => {
     setTimeout(() => {
         //resolve({user:'sumit'})
         reject(new Error('user is not logged in'))
     },2000)
 })

 promise.then((user) => {
     console.log(user)
 }).catch(err => console.log(err.message))

 function loginUser(email,password){
     return new Promise((resolve,reject)=>{
        setTimeout(() => {
            console.log('now we have the data');
            resolve({userEmail:email})
        },3000)
     })
    
}

function getUserVideoes(email){
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            resolve ( ['video1','video2','video3']);
        },2000)

    })
  
}

function videoDetails(video)
{
    return new Promise((resolve,reject) => {
    setTimeout(() => {
        resolve ( 'title of the video');
    },2000)

    })
   
}
/*
loginUser('sumit',"83838").then(user=> getUserVideoes(user.email)).then(videos => videoDetails(videos[0]))
.then(detail => console.log(detail));
*/
//promise all

// const yt = new Promise(resolve => {
//     setTimeout(() => {
//         console.log('getting stuff form youtube')
//         resolve({videos:[1,2,3,4,4,5]})
//     },2000)
// })
// const fb = new Promise(resolve => {
//     setTimeout(() => {
//         console.log('stuff from fb')
//         resolve({user:"name"})
//     },2000)
// })

// Promise.all([yt,fb]).then(result => console.log(result));


async function displayUser(){
    const loggedUser = await loginUser('sumit', 3888);
    const videos = await getUserVideoes(loggedUser.userEmail);
    const detail = await videoDetail(videos[0])
    console.log(detail)
}
