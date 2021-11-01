// console.log("merhaba kodlama.io")
// let dolarDun=9.20
// dolarDun="ankara"
// let dolarBugun=9.30
// console.log(dolarBugun)

// const euro=11

// //euro=12  bunu yapamayız const olduğu için.

// //array
// let konutKredileri=["Konut kredisi","Emlak Konut Kredisi","Kamu Konut Kredisi"]
// console.log("<ul>")
// for(let i=0;i<3;i++){
//     console.log("<li>"+ konutKredileri[i]+"</li>")
// }0
// console.log("</ul>")

let sayi1=10;
sayi1="ümit düzgün"
let student={id:1,name:"mehmet"}
//console.log(student)

function save(puan=10,ogrenci){
    //console.log(ogrenci.name +" :"+ puan)
}
//save(undefined,student);

let students= ["Engin Demirog","Halit Kalaycı","Engin Toprak","Büşra Topal"]
//console.log(students)

let students2= [student,{id:2,name:"ümit"}]

//console.log(students2)


//rest  =geriye kalanlar demek
let showProducts=function(id,...products){
    console.log(id)
    console.log(products[0])
}
//console.log(typeof showProducts)
//showProducts(10,["elma","armut"])


//spread ayrıştırmak
let points= [1,2,5,7,89,75]

console.log(...points)

console.log(Math.max(...points))

console.log(..."ABC","D",..."EFG","H")


//Destructuring  bir arraydeki değerleri sırasıyla
// değişkenlere atamak

let populations=[10000,20000,30000,[40000,50000]]
let [small,medium,high,[verhigt,maximum]]=populations
console.log(small)
console.log(medium)
console.log(high)
console.log(verhigt)
console.log(maximum)


function someFunction([small1]){   //fonkiyonsa yukarıdaki ilk değeri alma


console.log(small1)

}
someFunction(populations)


let category={id:1,name:"mehmet"}
console.log(category.id)
console.log(category["name"])


let{id,name}=category
console.log(id)
console.log(name);
































