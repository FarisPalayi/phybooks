function setCharLimit(str, limit) {
  return str.length > limit ? str.substring(0, limit) + "..." : str;
}

function getBooksBySemester(books, semester) {
  return books.filter((book) => book.semester === semester);
}

function getBooksBySubject(books, subject) {
  return books.filter((book) => book.subject.includes(subject.toLowerCase()));
}

function getBookTitles(books) {
  return books.map((book) => book.title.toLowerCase());
}

function title() {
  return this.charAt(0).toUpperCase() + this.slice(1);
}

function sortBookByTitle() {
  return this.sort((a, b) => a.title.localeCompare(b.title));
}

String.prototype.title = title; // monkey patching
Array.prototype.sortBooksByTitle = sortBookByTitle; // monkey patching

export { setCharLimit, getBooksBySemester, getBooksBySubject, getBookTitles };
