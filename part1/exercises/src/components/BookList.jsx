export default function BookList() {
   let pageTitle = "Books to Read";
   let book1 = "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1631251689i/4214.jpg";
   let book2 = "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1317793965i/11468377.jpg";
   let book3 = "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1714630953i/206305528.jpg";

   return (
      <div>
         <h3>{pageTitle}</h3>
         <img src={book1} alt="Life of Pi by Yann Martel" />
         <img src={book2} alt="Thinking Fast and Slow by Daniel Kahneman" />
         <img src={book3} alt="Lessons in Chemistry by Bonnie Garmus" />
      </div>      
   );
}