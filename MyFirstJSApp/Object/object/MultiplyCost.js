let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
  }

console.log(MultiplyCost(salaries))

function MultiplyCost(object) {
    let sum = 0;

    for (let prop in object) {
        sum += object[prop];
    }

    return sum;
}
