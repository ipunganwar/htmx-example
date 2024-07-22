const createHomePageTemplate = () => /*html*/ `
  <!DOCTYPE html>
  <html>
    <head>
      <title>My Reading List</title>
      <script src="https://unpkg.com/htmx.org@2.0.1" integrity="sha384-QWGpdj554B4ETpJJC9z+ZHJcA/i59TyjxEPXiiUgN2WmTyV5OEZWCD6gQhgkdpB/" crossorigin="anonymous"></script>
      <!-- <script src="https://cdn.tailwindcss.com"></script> -->
      <link rel="stylesheet" href="/styles.css">
    </head>
    <body>
      <header>
        <h1>My Reading List</h1>
      </header>

      <main>
        <div class="book-list">
          <button hx-get="/books" hx-target=".book-list">Show Books</button>
        </div>

        <div class="add-book-form">
          <h2>What do you want to read?</h2>
          <form>
            <input 
              type="text"
              name="title"
              placeholder="title"
            />
            <input 
              type="text"
              name="author"
              placeholder="author"
            />
            <button hx-post="/books" hx-target=".book-list ul" hx-swap="beforeend">Add Book</button>
          </form>
        </div>
      </main>
    </body>
  </html>
`;

export default createHomePageTemplate;
