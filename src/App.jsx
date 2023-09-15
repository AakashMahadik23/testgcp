import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [books, setBooks] = useState(null);
  const findBook = async () => {
    const response = await fetch(
      "https://server-dot-rollingslate-web.el.r.appspot.com/api/v1/book/getBooks",
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const books = await response.json();
    if (books) {
      setBooks(books);
    }
    //console.log(books);
  };

  useEffect(() => {
    findBook();
  }, []);
  return (
    <>
      <div className="container">
        <h1>Welcome to Rolling slate from node version 16</h1>
        <h2>Some of Popular books</h2>
        {books?.map((book, index) => {
          return <h4 key={index}>{book.title}</h4>;
        })}
      </div>
    </>
  );
}

export default App;
