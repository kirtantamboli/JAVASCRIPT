//The async function allows us to write promise-based code as if it were synchronous. This ensures that the execution thread is not blocked.

//Promise Handling: Async functions always return a promise. If a value is returned that is not a promise, JavaScript automatically wraps it in a resolved promise.

const getData = async () => {
    let data = "Hello World";
    return data;
}

getData().then(data => console.log(data));
