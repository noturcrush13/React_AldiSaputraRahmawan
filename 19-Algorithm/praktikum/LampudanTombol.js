const lampu = (n) => {
    let lampu = false
    for (let i = 1; i <= n; i++) {
        if (i%2 === 0) {
            lampu = true
        }
        else {
            lampu = false
        }
    // console.log(lampu)
    }
    if(lampu === true){
        console.log("lampu menyala")
    }
    else{
        console.log("lampu tidak menyala")
    }
}

lampu(4)
lampu(7)
lampu(10)
lampu(11)
