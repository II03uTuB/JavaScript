let start = prompt("Enter data");

if (start == "admin") {
    let passwd = prompt("Enter password");

    if (passwd == "boss") {
        alert("Hello, admin");
    } else if(passwd =="other") {
        alert("Wrong password");
    } else if (passwd == null || passwd ==""){}
    
} else if(start =="other") {
    alert("I don't know, who are you");
} else if (start == null || start =="") {}

