const fs = require("fs");

const inputFile = "10000-most-common-passwords.csv";
const outputFile = "statistics.csv";
const delimiter = ",";

if (fs.existsSync(outputFile)) { // check for existing output file
  fs.unlinkSync(outputFile); // delete it true. (To start a fresh file)
}

const data = fs.readFileSync(inputFile, "utf-8");
const lines = data.split(/\n/);

const passwordLengthCounts = [];

passwordLengthCounts.forEach(password => { 
  const length = password.length;
  if (!password)
})


console.log("counter:" + counter.length);

for (line of lines) {
  
      elements = line.split(delimiter)
      const statisticsArr = new Array(20).fill(elements);
      let elements = elements.split("");
    
      console.log(elements[1]);
      console.log(Array.length);
}

