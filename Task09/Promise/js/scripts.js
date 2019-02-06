let obj = new Promise(function (ok, fatal) {
    let i = 1;
    let arr = [];
    while (i < 10000000) {
        arr.push(i);
        i++
    }
    if (arr.length === 99999995) {
        ok(arr)
    } else {
        let f = new Error('error in while loop')
        // console.error(f);
        fatal(f)
    }
});

// // console.log(obj);

obj
    .then(data => console.log(data))
    .catch(err => console.error(err))