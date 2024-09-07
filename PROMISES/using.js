myPromise.then(function(message) {
    // This runs if the promise is fulfilled
      console.log(message); 
    }).catch(function(error) {
    // This runs if the promise is rejected
      console.log(error); 
    });
    