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

function getReferenceBooks(books) {
  return books.filter((book) => book.isReference);
}

function removeReferenceBooks(books) {
  return books.filter((book) => !book.isReference);
}

function getBookTitles(books) {
  return books.map((book) => book.title.toLowerCase());
}

function getBookSubjects(books) {
  const subjectNames = new Set();

  books.forEach((book) => 
    book.subject.forEach((subjectName) => subjectNames.add(subjectName))
  );

  return Array.from(subjectNames); // to convert to an array
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

function isNumeric() {
  if (typeof this != "string") return false; // we only process strings!
  return (
    !isNaN(this) && // use type coercion to parse the _entirety_ of the string (`parseFloat` alone does not do this)...
    !isNaN(parseFloat(this))
  ); // ...and ensure strings of whitespace fail
}

String.prototype.title = title; // monkey patching
Array.prototype.sortBooksByTitle = sortBooksByTitle; // monkey patching
String.prototype.isNumeric = isNumeric;

export {
  setCharLimit,
  getBooksBySemester,
  getBooksBySubject,
  getBookByTitle,
  getBookTitles,
  getBookSubjects,
  titleCase,
  getReferenceBooks,
  removeReferenceBooks,
};
