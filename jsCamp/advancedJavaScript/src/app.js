//var, let, const

let sayi1=10;
sayi1 = "engin demirog"

let student = {id:1, name:"Engin"}

//console.log(student);

function save(puan=10, ogrenci) 
{
  console.log(ogrenci.name+ " " + puan)
}
//save(undefined,student);

let students = ["Engin Demiroğ","Halit Kalaycı","Engin Toprak","Büşra"]

//console.log(students);

let students2 = [student,{id:2, name:"Halit"},"Ankara",{city:"istanbul"}]

//console.log(students2)


//ilk parametre id geri kalan gelen herşey products olacak demek.
//rest
//params
//varArgs - javada böyle kullanılıyor aşağıdaki ...products yapısı
let showProducts = function name(id,...products)
{
  console.log(id)
  console.log(products[0])
}
//console.log(typeof showProducts) //degiskenin tipini verir
//showProducts(10,["Elma","Armut","Karpuz"])

//spread
let points = [1,2,3,44,50,4,60,14]
console.log(...points)
console.log(Math.max(...points))
console.log(..."ABC","D",..."EFG","H")

//Destructuring
let populations = [10000,20000,30000,[4000,10000]]
let [small,medium,high,veryHigh,maximum] = populations
console.log(small)
console.log(medium)
console.log(high)
console.log(veryHigh)
console.log(maximum)

function someFunction([small1],number)
{
  console.log(small1)
}
someFunction(populations)

let category = {id:1, name:"içecek"}
console.log(category.id)
console.log(category["name"])

let {id,name} = category 
console.log(id)
console.log(name)
