/* A function called countdown that accepts a number as a parameter 
and every 1000 milliseconds decrements the value and console.logs it. 
Once the value is 0 it should log “DONE!” and stop. */

function countDown(arg) {
  const id = setInterval(function () {
    arg = arg - 1;
    if (arg > 0) {
      console.log(arg);
    } else {
      console.log("DONE!");
      clearInterval(id);
    }
  }, 1000);
}

countDown(4);

/*## **randomGame**
Write a function called randomGame that selects a random number between 0 and 1 every 1000 milliseconds 
and each time that a random number is picked, add 1 to a counter. If the number is greater than .75, 
stop the timer and console.log the number of tries it took before we found a number greater than .75. */

function randomGame() {
  let counter = 1;
  const id = setInterval(function () {
    const randomNumber = Math.random();
    console.log(`Try ${counter}: ${randomNumber}`);

    if (randomNumber > 0.75) {
      clearInterval(id);
      console.log(
        `It took ${counter} tries to find the number greater than .75`
      );
    }
    counter = counter + 1;
  }, 1000);
}

setTimeout(randomGame, 5000);
