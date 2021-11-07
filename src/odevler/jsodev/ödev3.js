let toplam
for (let i = 1; i <1000; i++) {
    toplam=0
    for(let j=1;j<i;j++){
        if(i%j==0){
        toplam+=j;
        }
        
    }
    if(toplam==i){
        console.log(i)
    }
    
}

