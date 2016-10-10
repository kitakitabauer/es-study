/* eslint no-new: 0 */

// argument function is required
new Promise(() => {});

// new Promise()
//  TypeError: Promise resolver undefined is not a function↲

// new Promise(1)
//  TypeError: Promise resolver 1 is not a function↲

function success() {
  console.log('success');
}
function failure() {
  console.log('failure');
}

// the first argument is function for success.
// the second argument is function for failure.
new Promise((success, failure) => {});

// to be success
new Promise((success, failure) => success);

// to be failure
new Promise((success, failure) => failure);

// to be success
new Promise((success, failure) => {
  success();
})
.then(() => {
  console.log('through success block, should pass');
})
.catch(() => {});

// to be failure
new Promise((success, failure) => {
  failure();
})
.then(() => {})
.catch(() => {
  console.log('through catch block, should pass');
});

const createPromise = () => {
  new Promise((resolve, reject) => {});
};

const makePromise = (isSuccess) => {
  new Promise((resolve, reject) => {
    if (isSuccess) {
      resolve();
    } else {
      reject();
    }
  });
};

const brokenPromise = makePromise(false);
brokenPromise
  .then(() => {
  })
  .catch(() => {
    console.log('should pass');
  });

const promiseAgain = (isSuccess, reason) => {
  new Promise((resolve, reject) => {
    if (isSuccess) {
      resolve(reason);
    } else {
      reject(reason);
    }
  });
};

const brokenPromiseAgain = promiseAgain(false, 'for reason');
brokenPromiseAgain
  .then((result) => {
  })
  .catch((err) => {
    console.log(`to be failure ${err}.`);
  });
