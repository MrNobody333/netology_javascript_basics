// Задача 1
class PrintEditionItem {
  constructor(name, releaseDate, pagesCount) {
    this.name = name;
    this.releaseDate = releaseDate;
    this.pagesCount = pagesCount;
    this.state = 100;
    this.type = null;
  }

  fix() {
    return this.state *= 1.5;
  }

  set state(num) {
    if (num < 0) {
      this._state = 0;
    } else if (num > 100) {
      this._state = 100;
    } else {
      this._state = num;
    }
  }

  get state() {
    return this._state;
  }
}

class Magazine extends PrintEditionItem {
  constructor(name, releaseDate, pagesCount) {
    super(name, releaseDate, pagesCount);
    this.type = 'magazine';
  }
}

class Book extends PrintEditionItem {
  constructor(author, name, releaseDate, pagesCount) {
    super(name, releaseDate, pagesCount);
    this.author = author;
    this.type = 'book';
  }
}

class NovelBook extends Book {
  constructor(author, name, releaseDate, pagesCount) {
    super(author, name, releaseDate, pagesCount);
    this.type = 'novel';
  }
}

class FantasticBook extends Book {
  constructor(author, name, releaseDate, pagesCount) {
    super(author, name, releaseDate, pagesCount);
    this.type = 'fantastic';
  }
}

class DetectiveBook extends Book {
  constructor(author, name, releaseDate, pagesCount) {
    super(author, name, releaseDate, pagesCount);
    this.type = 'detective';
  }
}

// Задача 2
class Library {
  constructor(name) {
    this.name = name;
    this.books = [];
  }

  addBook(book) {
    book.state > 30? this.books.push(book) : '';
  }

  findBookBy(type, value) {
    for (let el in this.books) {
      if (this.books[el][type] === value) {
        return this.books[el];
      } 
    }
    return null;
  }

  giveBookByName(bookName) {
    for (let el in this.books) {
      if (this.books[el].name === bookName) {
        return this.books.splice(el, 1)[0];
      }
    }
    return null;
  }
}

// Задача 3
class Student {
  constructor(name) {
    this.name = name;
    this.marks = {};
  }

  addMark(mark, subject) {
    if (mark < 2 || mark > 5) return;
    if (!this.marks.hasOwnProperty(subject)) {
      this.marks[subject] = [];
    } 
    this.marks[subject].push(mark);
  }

  getAverageBySubject(subject) {
    if (!this.marks.hasOwnProperty(subject)) return 0;
    return this.marks[subject].reduce((acc, el, index, arr) => {
      acc += el;
      return index === arr.length -1? acc / arr.length : acc;
    }, 0);
  }

  getAverage() {
    return Object.keys(this.marks).reduce((acc, el, index, arr) => {
      acc += this.getAverageBySubject(el);
      return index === arr.length -1? acc / arr.length : acc;
    }, 0);
  }
}