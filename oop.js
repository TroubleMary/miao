//一个Complex表示一个负数
//他有两个属性，一个real和imag,real表示实部，imag表示虚部
class Complex {
  constructor(real, imag) {
    this.real = real
    this.imag = imag
  }
  plus(c) {
    return new Complex(this.real + c.real, this.imag + c.imag)
  }
  minus(c) {
    return new Complex(this.real - c.real, this.imag - c.imag)
  }
  mul(c) {
    return new Complex((this.real * c.real - this.imag * c.imag), (this.real * c.imag + this.imag * c.real))
  }
  div(c) {
    return new Complex((this.real * c.real + this.imag * c.imag) / (c.real * c.real + c.imag * c.imag), (this.imag * c.real - this.real * c.imag) / (c.real * c.real + c.imag * c.imag))
  }

}
var e = new Complex(1, 2) // 代表1+2i
var f = new Complex(3, -4) // 代表3-4i
var g = e.plus(f) // 4-2i
var j = f.mul(g)
console.log(j.real)
console.log(j.imag)






// 用单向链表实现一个先进先出的队列
class Queue {
  constructor() {
    this.tail = null
    this.length = 0
    this.head = null
  }
  // 将val放进队列，放进队列的元素会先进先出
  enqueue(val) {
    this.length++
    var node = {
      val: val,
      next: null
    }
    if (this.head == null) {
      this.head = node
      this.tail = node
      return this
    } else {
      this.tail.next = node
      this.tail = node
      return this
    }
  }
  // 返回队头元素，当队列为空时，返回undefined
  dequeue() {
    if (this.head === null) {
      return undefined
    } else {
      var renode = this.head
      this.head = this.head.next
      this.length--
      if (this.head === null) {
        this.head = null
      }
      return renode.val
    }
  }
  //返回但不删除队头元素
  peek() {
    if (this.head === null) {
      return undefined
    } else {
      return this.head.val
    }
  }
  //返回队列的长度
  get size() {
    return this.length
  }
}
var q = new Queue()
q.enqueue(5)
q.enqueue(6)
console.log(q)
console.log(q.dequeue()) // 5
q.enqueue(8)
q.enqueue(9)
console.log(q.dequeue()) // 6
console.log(q.dequeue()) // 8
console.log(q.size) // 1








//表达一个映射
//每组映射有一个key和一个value确定
//增删改查
//实现过程中不能将对象作为映射来使用（意思是不能使用对象“随意增减属性”的功能）
class MyMap {
  constructor() {
    this.obj = []
    this.size = 0
  }
  //把key的值设为value
  //如果存在key，就会把旧的存为新的
  //如果不存在，则新增这一组
  //obj[key] = val
  set(key, value) {
    for (var i = 0; i < this.size; i++) {
      if (this.obj[i].key == key) {
        this.obj[i].val = value
        return
      }
    }
    this.obj.push({ key: key, val: value })
    this.size++
    return
  }
  //获取key的映射目标      obj[key[]]
  get(key) {
    for (var i = 0; i < this.size; i++) {
      if (this.obj[i].key == key) {
        return this.obj[i].val
      }
    }
    return undefined
  }
  //判断当前map中是否存在key    类似key in obj
  has(key) {
    for (var i = 0; i < this.size; i++) {
      if (this.obj[i].key == key) {
        return true
      }
    }
    return false
  }
  //删除key对应的映射对
  delete(key) {
    for (var i = 0; i < this.size; i++) {
      if (this.obj[i].key == key) {
        for (var j = i; j < this.size - 1; j++) {
          this.obj[j] = this.obj[j + 1]
        }
        this.obj.length = this.size - 1
        this.size--
      }
    }
  }
  //返回当前map中映射对的数量
  get len() {
    return this.size
  }
}
var q = new MyMap()
q.set("xiaoming", 15)
q.set("xiaozhang", 16)
q.set("xiaohong", 17)
q.set("xiaoqiang", 18)
q.set("xiaodong", 19)
console.log(q.has("xiaodong")) // true
q.delete("xiaohong")
console.log(q.len) // 4
console.log(q.get("xiaoqiang")) // 18
console.log(q.obj)







// 表达一个"集合"
// 即元素不重复的合集
class MySet {
  constructor() {
    this.data = []
    this.length = 0
  }
  // 往集合里增加一个元素，但元素如果重复就不用再增加了
  add(val) {
    var tf = false
    for (var i = 0; i < this.length; i++) {
      if (this.data[i] === val) {
        tf = true
        break
      }
    }
    if (tf == false) {
      this.data.push(val)
      this.length++
    }
  }
  //判断一个元素是否在集合里
  has(val) {
    for (var i = 0; i < this.length; i++) {
      if (this.data[i] === val) {
        return true
      }
    }
    return false
  }
  //从集合里删除一个元素
  delete(val) {
    for (var i = 0; i < this.length; i++) {
      if (this.data[i] === val) {
        for (var j = i; j < this.length - 1; j++) {
          this.data[j] = this.data[j + 1]
        }
        this.length--
      }
    }
  }
  //清空
  clear() {
    var newData = []
    this.data = newData
    this.length = 0
  }
  // 返回集合中的元素数量
  get size() {
    return this.length
  }
}
var s = new MySet()
s.add(1)
s.add(1)
console.log(s.size) // 1
s.add(2)
console.log(s.size) // 2
s.delete(1)
console.log(s.size) // 1
console.log(s.has(2)) // true
console.log(s.has(1)) // false




class Vector {
  constructor(x, y) {
    this.x = x
    this.y = y
  }
  plus(v) {
    var sumx = this.x + v.x
    var sumy = this.y + v.y
    return new Vector(this.x + v.x, this.y + v.y)
  }
  minus(v) {
    var sumx = this.x - v.x
    var sumy = this.y - v.y
    return new Vector(this.x - v.x, this.y - v.y)
  }
  get length() {
    return Math.sqrt(this.x * this.x + this.y * this.y)
  }

}
var a = new Vector(1, 2)
var b = new Vector(4, 5)
var c = a.plus(b) // new Vector(4，6)
var d = a.minus(b)
console.log(c.x) // 4
console.log(c.y) // 6
console.log(d.x) // -2
console.log(d.x) // -2
console.log(c.length) // result in math.sqrt(5*5 + 7*7)
