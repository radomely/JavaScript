module.exports = {
    hello: function () {
        return 'hello';
    },
    reduceFunc: function (arr) {
        if(!Array.isArray(arr)){
            return false;
        }
        return arr.reduce((acc, el)=> acc + el,0)
    },
}