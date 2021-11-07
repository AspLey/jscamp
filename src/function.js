function AddToCart(quantity,productName="elma") {  // default değer verirken en sona tanımla

    console.log("sepete eklendi: "+ productName+ " Adedi:" +quantity)
    
}
//AddToCart("elma")
AddToCart(30)
//AddToCart("yumurta")



let sayHello=()=>{

    console.log("hello world")
}
sayHello()

let sayHello2=function () {
console.log("hello world 2")    
}
sayHello2()



let product1= {producttName:"çekirdek",unitPrice:10 ,quantity:5}

function AddToCart3(product) {
    console.log("ürün :"+product.producttName)
    console.log("fiyat :"+product.unitPrice)
    console.log("adet :"+product.quantity)
}
AddToCart3(product1)

let product2= {productName:"elma",unitPrice:10 ,quantity:5}
let product3= {productName:"elma",unitPrice:10 ,quantity:5}
product2=product3
product2.productName="KARPUZ"
console.log(product3.productName)



function AddToCart4(products) {
console.log(products)
}

let products= [

    {productName:"elma",unitPrice:50 ,quantity:5},
    {productName:"meybuz",unitPrice:40 ,quantity:4},
    {productName:"dondurma",unitPrice:50 ,quantity:1}
]

AddToCart4(products)


function add(bisey,...numbers) {  //rest
let total=0
    for (let i = 0; i < numbers.length; i++) {
        console.log(numbers[i])
        total=total+numbers[i]
        
    }
    console.log(total) 
    console.log(bisey)
}
add(20,50)

let numbers=[20,50,70,80,100]
console.log(Math.max(...numbers))


let [icAnadolu,marmara,karadeniz,[icAnadolusehirleri]]=[
    {name:"iç Anadolu",population:"20M"},
    {name:"marmara",population:"50M"},
    {name:"karadeniz",population:"10M"},
    [

        ["ankara","konya"],
        ["yozgat","sinop"],
        ["bilecik","rize"],

    ]
]

console.log(icAnadolu)
console.log(icAnadolusehirleri)


let newProductName,newUnitPrice,newQuantity = ({productName:newProductName,unitPrice:newUnitPrice,quantity:newQuantity} = {productName:"Elma" , unitPrice:10,quantity:5})

console.log(newProductName)
console.log(newUnitPrice)
console.log(newQuantity)



























































