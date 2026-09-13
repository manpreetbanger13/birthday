let value1 = document.getElementById("input1")
let value2 = document.getElementById("input2")

let value3 = document.getElementById("input3")

let value4 = document.getElementById("input4")

function enter(value) {
    if (value1.value === "") {
        value1.value = value;
    }
    else if (value2.value == "") {
        value2.value = value;
    }
    else if (value3.value == "") {
        value3.value = value;
    }
    else if (value4.value == "") {
        value4.value = value;

        let password = value1.value + value2.value + value3.value + value4.value;
        if (password == "1316") {
            window.location.href = "3.html"
        }
        else {
            // alert("Wrong Password");
            let b = document.getElementById("incorrect")
            b.innerHTML = "Wrong Passcode"
            clearr();

        }
    }
}

function clearr() {
    value1.value = "";
    value2.value = "";
    value3.value = "";
    value4.value = "";

}

function DeleteLast() {
    if(value4.value!=="")
    {
        value4.value=""
    }
    else if(value3.value!=="")
    {
        value3.value=""
    }
    else if(value2.value!=="")
    {
            value2.value=""
    }
    else if(value1.value!=="")
    {
        value1.value=""
    }
}

let d = document.getElementById("box")
function change() {

    d.src = "images/7f9d65868a73a9674f82004c848f5224.jpg"
}

function ToNormal() {
    d.src = "images/958d1659b08620dfaf25961b36104ffc.jpg"
}