let [foo, [[bar], baz]] = [1, [[2], 3]];
console.log(foo);
console.log(bar);
console.log(baz);
const sum = (a, b)=>a + b;
console.log(sum(1, 2));


function timeout(ms) {
    return new Promise((resolve, reject)=> {
        setTimeout(resolve, ms, 'done');
    })
}

timeout(100).then((value)=> {
    console.log(value);
})

function loadImageAsync(url) {
    return new Promise(function (resolve, reject) {
        var image = new Image();

        image.onload = function () {
            resolve(image);
        };

        image.onerror = function () {
            reject(new Error('Could not load image at ' + url));
        };

        image.src = url;
    })
}
loadImageAsync('http://pic.baike.soso.com/p/20100205/20100205165903-630558999.jpg').then(function(e){
    console.log(e);
},function(e){
    console.log(e);
})