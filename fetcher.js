//these get the data from the console
const url = process.argv[2];
const path = process.argv[3];

//this is using request and fs modules
const request = require('request');
//const readline = require('readline');
const fs = require('fs');


    
request(url, (error, response, body) => {
  fs.writeFile(path, body, (err) => {
    if (err) throw err;

    fs.stat(path, (err, stats) => {
      if (err) {
        throw err
      } else {
        console.log(`Downloaded and saved ${stats.size} bytes to ${path}`);
      }
    }) 
  });
});

/*Optional / Stretch: If the file already exists, let the user know and 
prompt them to type in Y(followed by the enter key) to overwrite the 
file, otherwise skip and exit the app. We suggest using the readline 
module, which we've previously used.

What should happen if the local file path given is invalid?

Indeed! We should check to make sure that it's valid. 
Otherwise we should fail and let the user know about this issue.

What should happen if the given URL results in an error or non-200 
result?

Wow, you're on fire! In that case it would make sense to terminate 
the app explaining to the user what went wrong, and not write the 
response body to the file.*/