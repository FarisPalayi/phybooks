function setCharLimit(str, limit) {
  return str.length > limit ? str.substring(0, limit) + "..." : str;
}

function getBooksBySemester(books, semester) {
  return books.filter((book) => book.semester === semester);
}

function getBooksBuySubject(books, subject) {
  return books.filter((book) => book.subject.includes(subject));
}

function title() {
  return this.charAt(0).toUpperCase() + this.slice(1);
}

String.prototype.title = title; // monkey patching

export { setCharLimit, getBooksBySemester, getBooksBuySubject };
