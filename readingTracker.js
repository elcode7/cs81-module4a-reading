// This array stores reading data for the five days in a week.
// Each object represents one reading session with a day, book title, and minutes read.
// Weekly reading log
const readingLog = [
  { day: "Monday", book: "Dune", minutes: 30 },
  { day: "Tuesday", book: "1984", minutes: 20 },
  { day: "Wednesday", book: "Dune", minutes: 25 },
  { day: "Thursday", book: "The Hobbit", minutes: 40 },
  { day: "Friday", book: "1984", minutes: 15 }
];

// Adds a new reading entry to the log
function addReadBook(day, book, minutes) {
  
  // Creates a new object using the function parameters.
  const newEntry = { day, book, minutes };
  
  // Push adds the new reading session to the end of the readingLog array.
  readingLog.push(newEntry);
}

// Returns total minutes spent reading all week
function totalReadingMinutes(log) {
  let total = 0;
  
  // This loop goes through each reading entry in the log.
  for (let entry of log) {
    total += entry.minutes;
  }
  // Returning the final total.
  return total;
}

// Returns the book read most frequently
function mostReadBook(log) {
  const bookCounts = {};
  
  // Loop counts how many times each book appears in the log.
  for (let entry of log) {
    if (!bookCounts[entry.book]) {
      bookCounts[entry.book] = 1;
    } else {
      bookCounts[entry.book]++;
    }
  }

  let maxBook = null;
  let maxCount = 0;

  // This loop checks which book has the highest count.
  for (let book in bookCounts) {
    if (bookCounts[book] > maxCount) {
      maxBook = book;
      maxCount = bookCounts[book];
    }
  }
   // Returns the book title with the highest frequency.
  return maxBook;
}

// Prints a summary of minutes read per day
function printDailySummary(log) {
  for (let entry of log) {
    console.log(`${entry.day}: ${entry.minutes} mins reading "${entry.book}"`);
  }
}

// Example usage
// Existing test case: adds a Saturday reading entry.
addReadBook("Saturday", "Dune", 50);
// Prints a summary of all reading entries.
printDailySummary(readingLog);

// Displays the total minutes read during the week.
console.log("Total minutes read:", totalReadingMinutes(readingLog));

// Displays the total minutes read during the week.
console.log("Most read book:", mostReadBook(readingLog));
