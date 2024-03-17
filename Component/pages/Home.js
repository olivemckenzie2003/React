import BookCounter from "../book-counter/BookCounter";

const arrayOfBooks = [
  "Half of a Yellow Sun",
  "Black Leopard, Red Wolf",
  "Born a Crime",
  "Americanah",
  "Ghana Must Go",
];

function Home() {
  return (
    <div>
      <h1>Welcome to my Library</h1>
      <BookCounter name="Sarah" books={arrayOfBooks} />
    </div>
  );
}

export default Home;