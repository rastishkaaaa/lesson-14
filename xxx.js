function countNumbers(start, end) {
   if (start <= end) {
      console.log(start);
      start++;
      setTimeout(function () {
         countNumbers(start, end);
      }, 1000);
   }
}
countNumbers(1, 13);