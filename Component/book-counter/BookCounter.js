import { useState } from "react";

function BookCounter({ name, books }) {
  const [numberOfBooks, setNumberOfBooks] = useState(0);

  const handleBookLength = () => {
    setNumberOfBooks(books.length);
  };

  return (
    <div>
      <h2>
        {name}'s Books ({numberOfBooks}) &#8595;
      </h2>
      <button onClick={handleBookLength}>Count Books</button>
      <ul>
        {books.map((book, index) => (
          <li key={index}>{book}</li>
        ))}
      </ul>
    </div>
  );
}
export default BookCounter;









