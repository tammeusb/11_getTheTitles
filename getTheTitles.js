const getTheTitles = function(books) {
    titles = [];
    books.forEach((book) => {
        titles = titles.concat(book.title);
    })
    return titles
};

const booksTest = [
    {
      title: 'Book',
      author: 'Name'
    },
    {
      title: 'Book2',
      author: 'Name2'
    }
  ]


//iterate through 'books' array with books.forEach() and find each item.title,
//arr.concat each title into a new array?

// Do not edit below this line
module.exports = getTheTitles;
