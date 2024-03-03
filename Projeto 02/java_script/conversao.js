function converter() {
    let input = document.getElementById("input").value;
    let from = document.getElementById("from").value;
    let to = document.getElementById("to").value;
    let result;

    if (from == "mm" && to == "cm") {
        result = input / 10;
    } else if (from == "mm" && to == "dm") {
        result = input / 100;
    } else if (from == "mm" && to == "m") {
        result = input / 1000;
    } else if (from == "mm" && to == "dam") {
        result = input / 10000;
    } else if (from == "mm" && to == "hm") {
        result = input / 100000;
    } else if (from == "mm" && to == "km") {
        result = input / 1000000;
    } else if (from == "mm" && to == "in") {
        result = input / 25.4;
    } else if (from == "mm" && to == "ft") {
        result = input / 304.8;
    } else if (from == "mm" && to == "mi") {
        result = input / 1.609;

    } else if (from == "cm" && to == "mm") {
        result = input * 10;
    } else if (from == "cm" && to == "dm") {
        result = input / 10;
    } else if (from == "cm" && to == "m") {
        result = input / 100;
    } else if (from == "cm" && to == "dam") {
        result = input / 1000;
    } else if (from == "cm" && to == "hm") {
        result = input / 10000;
    } else if (from == "cm" && to == "km") {
        result = input / 100000
    } else if (from == "cm" && to == "in") {
        result = input / 2.54
    } else if (from == "cm" && to == "ft") {
        result = input / 30.48
    } else if (from == "cm" && to == "mi") {
        result = input / 160900
    
    } else if (from == "dm" && to == "mm") {
        result = input * 100;
    } else if (from == "dm" && to == "cm") {
        result = input * 10;
    } else if (from == "dm" && to == "m") {
        result = input / 10;
    } else if (from == "dm" && to == "dam") {
        result = input / 100;
    } else if (from == "dm" && to == "hm") {
        result = input / 1000;
    } else if (from == "dm" && to == "km") {
        result = input / 10000
    } else if (from == "dm" && to == "in") {
        result = input * 3.937
    } else if (from == "dm" && to == "ft") {
        result = input / 3.048
    } else if (from == "dm" && to == "mi") {
        result = input / 16090
        
    } else if (from == "m" && to == "mm") {
        result = input * 1000;
    } else if (from == "m" && to == "cm") {
        result = input * 100;
    } else if (from == "m" && to == "dm") {
        result = input * 10;
    } else if (from == "m" && to == "dam") {
        result = input / 10;
    } else if (from == "m" && to == "hm") {
        result = input / 100;
    } else if (from == "m" && to == "km") {
        result = input / 1000
    } else if (from == "m" && to == "in") {
        result = input * 39,37
    } else if (from == "m" && to == "ft") {
        result = input * 3.281
    } else if (from == "m" && to == "mi") {
        result = input / 1609

    } else if (from == "dam" && to == "mm") {
        result = input * 10000;
    } else if (from == "dam" && to == "cm") {
        result = input * 1000;
    } else if (from == "dam" && to == "dm") {
        result = input * 100;
    } else if (from == "dam" && to == "m") {
        result = input * 10;
    } else if (from == "dam" && to == "hm") {
        result = input / 10;
    } else if (from == "dam" && to == "km") {
        result = input / 100
    } else if (from == "dam" && to == "in") {
        result = input * 393.7
    } else if (from == "dam" && to == "ft") {
        result = input * 32.808
    } else if (from == "dam" && to == "mi") {
        result = input / 160.9

    } else if (from == "hm" && to == "mm") {
        result = input * 100000;
    } else if (from == "hm" && to == "cm") {
        result = input * 10000;
    } else if (from == "hm" && to == "dm") {
        result = input * 1000;
    } else if (from == "hm" && to == "m") {
        result = input * 100;
    } else if (from == "hm" && to == "dam") {
        result = input * 10;
    } else if (from == "hm" && to == "km") {
        result = input / 10
    } else if (from == "hm" && to == "in") {
        result = input * 3937
    } else if (from == "hm" && to == "ft") {
        result = input * 328.1
    } else if (from == "hm" && to == "mi") {
        result = input / 16.09

    } else if (from == "km" && to == "mm") {
        result = input * 1000000;
    } else if (from == "km" && to == "cm") {
        result = input * 100000;
    } else if (from == "km" && to == "dm") {
        result = input * 10000;
    } else if (from == "km" && to == "m") {
        result = input * 1000;
    } else if (from == "km" && to == "dam") {
        result = input * 100;
    } else if (from == "km" && to == "hm") {
        result = input / 10
    } else if (from == "km" && to == "in") {
        result = input * 39370
    } else if (from == "km" && to == "ft") {
        result = input * 3281
    } else if (from == "km" && to == "mi") {
        result = input / 1.609

    } else if (from == "in" && to == "mm") {
        result = input * 25.4;
    } else if (from == "in" && to == "cm") {
        result = input * 2.54;
    } else if (from == "in" && to == "dm") {
        result = input / 3.934;
    } else if (from == "in" && to == "m") {
        result = input / 39.37;
    } else if (from == "in" && to == "dam") {
        result = input / 393;
    } else if (from == "in" && to == "hm") {
        result = input / 10
    } else if (from == "in" && to == "in") {
        result = input * 39370
    } else if (from == "in" && to == "ft") {
        result = input * 3281
    } else if (from == "in" && to == "mi") {
        result = input / 1.609

    } else if (from == "ft" && to == "mm") {
        result = input * 304.8;
    } else if (from == "ft" && to == "cm") {
        result = input * 30.48;
    } else if (from == "ft" && to == "dm") {
        result = input * 3.048;
    } else if (from == "ft" && to == "m") {
        result = input * 0.3048;
    } else if (from == "ft" && to == "dam") {
        result = input / 32.808;
    } else if (from == "ft" && to == "hm") {
        result = input / 328.1;
    } else if (from == "ft" && to == "km") {
        result = input / 3281;
    } else if (from == "ft" && to == "mi") {
        result = input / 5280;
    } else if (from == "ft" && to == "in") {
        result = input / 12;

    } else if (from == "mi" && to == "mm") {
        result = input * 1609344;
    } else if (from == "mi" && to == "cm") {
        result = input * 160900;
    } else if (from == "mi" && to == "dm") {
        result = input * 16090;
    } else if (from == "mi" && to == "m") {
        result = input * 1609;
    } else if (from == "mi" && to == "dam") {
        result = input * 160.9
    } else if (from == "mi" && to == "hm") {
        result = input * 16.0934
    } else if (from == "mi" && to == "km") {
        result = input * 1.609;
    } else if (from == "mi" && to == "in") {
        result = input * 63360;
    } else if (from == "mi" && to == "ft") {
        result = input * 5280;
    
    }

    document.getElementById("result").value = result.toFixed(5);
}