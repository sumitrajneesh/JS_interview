
const obj = {
    name:'sumit',
    sing(){
        console.log('a',this);
        // var anotherFunc = function(){
        //     console.log('b',this)
        // }
        // var anotherFunc = () => {
        //     console.log('b',this)
        // }
        // var anotherFunc = function(){
        //     console.log('b',this)
        // }
        var self = this;
        var anotherFunc = function(){
            console.log('b',this)
        }
        return anotherFunc.bind(this)
    }
}

console.log(obj.sing()())



/*

const a = function(){
  console.log('a' + this)
  const b = function(){
      console.log('b' + this)
      const c = {
          hi:function(){
              console.log('c' + this)
          }
      }
     console.log(c.hi());
  }
  b()
}

a()

*/