function CWE_398() { // IDENTICAL_BRANCHES
    if (x >= 0) {
        y = x;
    } else {
        y = x;
    }
}
function CWE_476() { // NULL_POINTER
    var obj;
    var y = obj.x;  // UNINITIALIZED_LOCAL_VAR
    console.log(y);
}

function CWE_480() { // BAD_BITWISE_OPERATOR
    var obj = null;
    if (obj & obj.prop) {
        console.log(obj.prop);
    }
}

const a = 12;
a = 3;
