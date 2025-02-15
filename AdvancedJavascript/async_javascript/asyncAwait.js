//  movePlayer(100,'Left')
//   .then(() => movePlayer(400,'Left'))
//   .then(() => movePlayer(10,'Right'))
//   .then(() => movePlayer(330, 'Left'))

// async function playerStart(){
//     const firstMove  = await movePlayer(100, 'Left');
//     const secondMove = await movePlayer(400, 'Left');
//    const thereMove =   await movePlayer(10, 'Right');
//     const fourMove = await movePlayer(330, 'Left');
// }


// fetch('https://jsonplaceholder.typicode.com/users').then(res => res.json()
// ).then(console.log)

// async function fetchUsers(){
//    const resp = await fetch('https://jsonplaceholder.typicode.com/users').then(res => res.json())
//    const data = await resp.json()
//    console.log(data)
// }

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





    
