let menu = {
    width: 200,
    height: 300,
    title: "My menu"
  };

let res = multiplyNumeric(menu);

for ( let prop in res ){
    console.log( res[prop] )
}

function multiplyNumeric(object){
    for ( let prop in object ){
        let res = object[prop];

        if ( typeof(res) == 'number') {
            res *= 2;
        }
        object[prop] = res;
    }
    return object
}