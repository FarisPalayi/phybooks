function setCharLimit(str, limit) {
  return str.length > limit ? str.substring(0, limit) + "..." : str;
}

function getBooksBySemester(books, semester) {
  return books.filter((book) => book.semester === semester);
}

function getBooksBySubject(books, subject) {
  return books.filter((book) => book.subject.includes(subject.toLowerCase()));
}

function getBookByTitle(books, title) {
  return books.filter(
    (book) => book.title.toLowerCase() === title.toLowerCase()
  );
}

function getBookTitles(books) {
  return books.map((book) => book.title.toLowerCase());
}

function titleCase(str) {
  return str.replace(/\w\S*/g, function (txt) {
    return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
  });
}

function title() {
  return this.replace(/\w\S*/g, function (txt) {
    return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
  });
}

function sortBooksByTitle() {
  return this.sort((a, b) => a.title.localeCompare(b.title));
}

String.prototype.title = title; // monkey patching
Array.prototype.sortBooksByTitle = sortBooksByTitle; // monkey patching

export {
  setCharLimit,
  getBooksBySemester,
  getBooksBySubject,
  getBookByTitle,
  getBookTitles,
  titleCase,
};
