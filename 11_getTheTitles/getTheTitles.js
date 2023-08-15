const getTheTitles = function(arrayOfBookObj) {
    let bookTitles = []
    for (let book of arrayOfBookObj){
        bookTitles.push(book.title)
    }
    return bookTitles
};

// Do not edit below this line
module.exports = getTheTitles;
