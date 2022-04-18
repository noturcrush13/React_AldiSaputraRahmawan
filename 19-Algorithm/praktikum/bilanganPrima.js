const bilanganPrima = (n) => {
    let pembagi = 0;
    for (let i = 1; i <= n; i++) {
        if (n % i === 0) {
            pembagi++;
        }
    }
    // console.log(pembagi)
    if (pembagi==2){
        console.log(n + " adalah bilangan prima");
    } else {
        console.log(n + " bukan bilangan prima");
    }
    
}

bilanganPrima(7)
bilanganPrima(28)
bilanganPrima(23)
bilanganPrima(99)
