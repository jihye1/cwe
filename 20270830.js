function say(msg) {
    return (() => {
        console.log(msg);
        return 'Done';
    });
}
function doSomethingAfter1Sec(something) {
    setTimeout(() => {
        something();
    }, 1000);
}
async function asyncCall() {
    console.log('Start');
    var result = await doSomethingAfter1Sec(say('Hi')); // AWAIT_NON_PROMISE alarm because 'doSomethingAfter1Sec(...)' is not Promise.
    console.log('Result: ' + result);
    console.log('End');

    console.log('Start');
    await [1, 2, 3].map(x => doSomethingAfter1Sec(say(x))); // AWAIT_NON_PROMISE alarm because awaiting an array has no effect.
    console.log('End');
}
