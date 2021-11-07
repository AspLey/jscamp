let sayac
function asalSayi(...Numbers) {
  for (let i = 0; i < Numbers.length; i++) {
    sayac=0
    for (let j = 1; j <=Numbers[i]; j++) {
    if(Numbers[i] % j==0){
    sayac++
    }
      
    }
    if(sayac==2){
      console.log(Numbers[i]+" sayı asaldır.")
    }
    else{
      console.log(Numbers[i]+" sayı asal değil.")
    }
  }
  
}
asalSayi(5,10,19,7,2,1)