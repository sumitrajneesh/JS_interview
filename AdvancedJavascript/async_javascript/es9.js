//Object spread operator

const { reject } = require("async")

// const animals = {
//     tiger:23,
//     lion:5,
//     monkey:2
// }

// const {tiger,...rest} = animals
// console.log(rest)

// const array = [1,2,3,4,5];
// function sum(a,b,c,d,e){
//     return a + b + c +d +e ;
// }

// console.log(sum(...array))

/**
 * new es9 feature
 * 
 * finally:don't care error and success, it will execute
 * 
 * for await of 
 * 
 */
const urls = [
    'https://jsonplaceholder.typicode.com/users',  
    'https://jsonplaceholder.typicode.com/posts',  
    'https://jsonplaceholder.typicode.com/albums'  
  ]
 
  Promise.all(urls.map(url => {
      return fetch(url).then(resp => resp.json())
  })).then(results => {
      console.log(results[0])
      console.log(results[1])
      console.log(results[2])
  })
  .catch(() => console.log('error'))
  .finallY(() => console.log('extra'))



const urls = [
    'https://jsonplaceholder.typicode.com/users',  
    'https://jsonplaceholder.typicode.com/posts',  
    'https://jsonplaceholder.typicode.com/albums'  
  ]
 
  const getData = async function(){
  try{

      {
        const [users,posts,albums] = await Promise.all(urls.map(url => 
             fetch(url).then(resp => resp.json())
        ))
        console.log('users',users)
        console.log('posts',posts)
        console.log('albums',albums)
      }
  } catch(err){
      console.log('oops',err)
  }
}




const getData2 = async function(){
    const arrayOfPromises = urls.map(url => fetch(url));
    for await (let request of arrayOfPromises){
        const data = await request.json()
        console.log(data)
    }
}


