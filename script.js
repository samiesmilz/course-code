/* A function called countdown that accepts a number as a parameter 
and every 1000 milliseconds decrements the value and console.logs it. 
Once the value is 0 it should log “DONE!” and stop. */

function countDown(arg) {
  const id = setInterval(function () {
    arg = arg - 1;
    if (arg !== 0) {
      console.log(arg);
    } else {
      console.log("DONE!");
      clearInterval(id);
    }
  }, 1000);
}

countDown(4);
