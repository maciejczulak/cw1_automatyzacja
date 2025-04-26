const {add} = require('./index');

if (add(2,3) !==5) {
    console.error('Test faild: add(2,3) shold be 5')
    process.exit(1)
}
else {
    console.log('Test passed: add(2,3) is 5');
}