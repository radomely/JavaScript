const expect = require("chai").expect;
const hello = require("../app").hello;
const reduceFunc = require("../app").reduceFunc;

describe("hello_func", function(){
    it ('show hello', function(){
        const result = hello();
        expect(result).to.be.a("string");
        expect(result).equal("hello");
    })
});

describe("reduce", function(){
    it ("empty arr", function(){
        const result = reduceFunc([]);
        expect(result).to.be.a("number");
        expect(result).equals(0);
    });

    it ("one el", function(){
        const result = reduceFunc([5]);
        expect(result).to.be.a("number");
        expect(result).equals(5);
    });

    it ("long arr", function(){
        const result = reduceFunc([1,2,3]);
        expect(result).to.be.a("number");
        expect(result).equals(6);
    });

    it ("is Arr", function(){
        const result = reduceFunc(4);
        expect(result).to.be.a("boolean");
        expect(result).equals(false);
    })
})