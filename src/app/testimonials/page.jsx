import Link from "next/link";

const getData = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");

  if (!res.ok) {
    throw new Error("Oh no");
  }

  return res.json();
};

const Testimonials = async () => {
  const posts = await getData();

  return (
    <>
      <br />
      <br />
      <br />
      <br />
      <section style={{ minHeight: "100vh" }}>
        {posts?.map(({ title, body, id }) => (
          <>
            <div style={link} className="loading" key={id}>
              <Link href={`testimonials/${id} `}>
                <h2>{title}</h2>
              </Link>
              {/* <p>{body}</p> */}
              {/* <Link href={`testimonials/${id} `}>
                <button>See more</button>
              </Link> */}
            </div>
          </>
        ))}
      </section>
      <br />
      <br />
      <br />
    </>
  );
};

const link = {
  width: "40%",
  padding: "20px",
  border: "2px solid white",
  margin: "50px 0 18px 25px",
};

export default Testimonials;
