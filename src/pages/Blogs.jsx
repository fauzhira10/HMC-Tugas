import { Link } from "react-router";

const articles = [
  {
    id: 1,
    title: "Belajar React Router",
    image: "https://placehold.co/300x100",
  },
  {
    id: 2,
    title: "Belajar Matematika",
    image: "https://placehold.co/300x100",
  },
  { id: 3, title: "Belajar IPA", image: "https://placehold.co/300x100" },
  { id: 4, title: "Belajar IPS", image: "https://placehold.co/300x100" },
];

export default function Blogs() {
  return (
    <div>
      <h1>BLOG LIST</h1>
      <div
        style={{
          padding: "1em",
          display: "grid",
          gridTemplateColumns: "auto auto auto",
          gap: "6px",
        }}
      >
        {articles.map((blog) => (
          <div
            key={blog.id}
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "8px",
              padding: "10px",
              border: "solid 1px black",
              justifyContent: "center",
            }}
          >
            <img src={blog.image} alt={blog.title} />
            <h2>{blog.title}</h2>
            <Link to={`/blog/${blog.id}`}>
              <button>Detail Blog</button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
