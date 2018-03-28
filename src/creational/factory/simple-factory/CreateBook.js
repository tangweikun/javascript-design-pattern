// 通过创建一个新对象然后包装增强其属性和功能来实现的

function createBook(name, time, type) {
  const o = new Object()
  o.name = name
  o.time = time
  o.type = type

  o.getName = function() {
    console.log(this.name)
  }

  return o
}

const book1 = createBook('js book', 2014, 'js')
const book2 = createBook('css book', 2015, 'css')
book1.getName()
book2.getName()
