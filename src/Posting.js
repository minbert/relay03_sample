import React from 'react';

export default function App() {
  const [title, setTitle] = React.useState("");
  const [author, setAuthor] = React.useState("");
  const [content, setContent] = React.useState("");

  const handleSubmit = (event) => {
    console.log(`
      title: ${title}
      author: ${author}
      Accepted Terms: ${content}
    `);

    event.preventDefault();
  }

  return (
    <form onSubmit={handleSubmit}>
      <h1>Create Account</h1>
      <label>
      <div>
        제목:
        <input
          name="title"
          type="title"
          value={title}
          onChange={e => setTitle(e.target.value)}
          required />
      </div>
      </label>

      <label>
        <div>
        글쓴이:
        <input
          name="author"
          type="author"
          value={author}
          onChange={e => setAuthor(e.target.value)}
          required />
          </div>
      </label>

      <label>
        <div>
        내용:
        <input
          name="content"
          type="content"
          value={content}
          onChange={e => setContent(e.target.value)}
          required />
        <p>Don't use bad words</p>
        </div>
      </label>

      <button>Submit</button>
    </form>
  );
}