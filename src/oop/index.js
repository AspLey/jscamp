class Customer{
    constructor(id,customerNumber){
        this.id=id
        this.customerNumber=customerNumber

    }
}
let customer = new Customer(1,"12542");
console.log(customer.id)
console.log(customer.customerNumber)

class IndividualCustomer extends Customer{
    constructor(Firstname,id,customerNumber){
             super(id,customerNumber)
             this.Firstname=Firstname;
    }
}

class CorparateCustomer extends Customer{
    constructor(companyName,id,customerNumber){
             super(id,customerNumber)
             this.companyName=companyName;
    }
}

let customer1 = new IndividualCustomer();
console.log(IndividualCustomer.Firstname)


let customer2 = new CorparateCustomer();
console.log(CorparateCustomer.companyName)

