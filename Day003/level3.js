/**
 #1 Create a human readable time format using the Date time object.
 The hour and the minute should be all the time two 
 digits(7 hours should be 07 and 5 minutes should be 05 )

    YYY-MM-DD HH:mm eg. 20120-01-02 07:05

*/
const now = new Date()
const year = now.getFullYear()
const month = (now.getMonth() + 1 < 10) ? '0' + (now.getMonth() + 1) : now.getMonth() + 1;
const day = (now.getDate() < 10) ? '0' + now.getDate() : now.getDate(); 
const hour = (now.getHours() < 10 ) ? '0' + now.getHours() : now.getHours();
const minutes = (now.getMinutes() < 10) ? '0' + now.getMinutes() : now.getMinutes();

console.log(`${year}-${month}-${day} ${hour}:${minutes}`); // Output will be in the format "YYYY-MM-DD HH:mm"

  