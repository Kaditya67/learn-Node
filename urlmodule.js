import url from "url";

const myURL=new URL('https://example.org');
myURL.pathname = '/a/b/c';
myURL.search='?d=e&f=g';
myURL.hash='#h=i';

console.log(myURL);