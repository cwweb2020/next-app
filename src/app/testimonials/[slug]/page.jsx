import { Just_Me_Again_Down_Here } from "next/font/google";
import Image from "next/image";

const getData = async (slug) => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${slug}`);

  if (!res.ok) {
    throw new Error("Oh no");
  }

  return res.json();
};

const SinglePostPage = async ({ params }) => {
  const { slug } = params;
  const singlePost = await getData(slug);
  const { title, body } = singlePost;

  return (
    <>
      <br />
      <br />
      <br />
      <br />

      <br />
      <br />

      <section style={container}>
        <div className="img-container-blog">
          <Image
            src="/img/picinm2.jpg"
            width={590}
            height={400}
            alt="pic"
            //   fill
          />
        </div>
        <div>
          <h2 style={{ margin: "0 0 0.5em 0" }}>{title}</h2>
          <p style={{ lineHeight: "32px" }}>{body}</p>
        </div>
      </section>
    </>
  );
};

const container = {
  minHeight: "100vh",
  display: "grid",
  gridTemplateColumns: "1fr 1fr",
  width: "80%",
  margin: "auto",
  gap: "35px",
};

export default SinglePostPage;
