//Write an asynchronous function that accepts a message string and a delay time in milliseconds. 
//The function should log the message to the console after the specified delay time.

const messaging  = (word) => {
console.log("this will delay");
}
setTimeout(messaging,500)

//You have an array of user IDs and a function getUserData(id) that returns a Promise with user data when given a user ID. 
//Write an asynchronous function that fetches and logs the data for each user ID one by one, in sequence.

const arraoOfIds = [331, 222, 565, 349, 500]; // Example array of user IDs
async function fetchAndLogs(arraoOfIds) {
    for (const arraoOfId of arraoOfIds) {
      const userInfo = await(arraoOfId);
      console.log(userInfo);
    }
  }
async function info() {
  try {
    await fetchAndLogs(arraoOfIds);
  } catch (e) {
    console.error(e);
  }
}
info();
//You have an asynchronous function performTask() that returns a Promise. 
//The Promise resolves if the task is successful and rejects if there's an error.
// Write a function that calls performTask() and logs a custom success message 
//if the task is successful, and a custom error message if there's an error.
function Task() {
    performTask()
      .then(() => {
        console.log("Task is successful.");
      })
      .catch((error) => {
        console.log("Error occurred", error);
      });
  }
  function performTask() {                                 //  asynchronous function that returns a Promise
    return new Promise((resolve, reject) => {
      setTimeout(() => {                                   // Simulating an asynchronous operation
        const isSuccess = Math.random() < 0.5;
        if (isSuccess) {
          resolve();
        } else {
          reject("Task failed due to an error.");
        }
      }, 2000);
    });
  }
  function Task() {
    performTask()
      .then(() => {
        console.log("Task is successful.");
      })
      .catch((error) => {
        console.log("Error occurred", error);
      });
  }
  function performTask() {                                            //  asynchronous function that returns a Promise                              
    return new Promise((resolve, reject) => {
      setTimeout(() => {                                             // Simulating an asynchronous operation
        const isSuccess = Math.random() < 0.5;
        if (isSuccess) {
          resolve();
        } else {
          reject("Task failed due to an error.");
        }
      }, 2000);
    });
  }
  function Task() {
    performTask()
      .then(() => {
        console.log("Task is successful.");
      })
      .catch((error) => {
        console.log("Error occurred", error);
      });
  }
  function performTask() {                                     //  asynchronous function that returns a Promise
    return new Promise((resolve, reject) => {
      setTimeout(() => {                                       // Simulating an asynchronous operation
        const isSuccess = Math.random() < 0.5;
        if (isSuccess) {
          resolve();
        } else {
          reject("Task failed due to an error.");
        }
      }, 2000);
    });
  }
  Task();
 