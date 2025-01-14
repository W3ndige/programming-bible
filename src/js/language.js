require('../css/language.scss');
require('./courses');
import hljs from 'highlight.js';
hljs.highlightAll();

const books = document.querySelectorAll('.book');

books.forEach((book) => {
  const title = book.querySelector('.helion-ksiazkasm4');
  if (!title) return;
  if (title.innerText.startsWith('nak')) {
    book.parentElement.removeChild(book);
    return;
  }
  const bookId = book.getAttribute('data-book-id');
  const bookLink = document.createElement('a');
  bookLink.classList.add('book-link', 'darker-overlay-on-hover');
  bookLink.target = '_blank';
  bookLink.href = `https://helion.pl/view/9102Q/${bookId}.htm`;
  wrap(book, bookLink);
});

function wrap(el, wrapper) {
  el.parentNode.insertBefore(wrapper, el);
  wrapper.appendChild(el);
}
