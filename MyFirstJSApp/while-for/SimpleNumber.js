let number = 32;  //you number

for (let i = 2; i <= number; i++) {
    if( i == number){
        console.log("Simple");
        break;
    }
    if ((number % i) == 0) {
        console.log("not Simple");
        break;
    }
}
