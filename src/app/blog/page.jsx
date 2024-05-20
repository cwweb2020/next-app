"use client";
import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";

const SinglePostPag = () => {
  const pathName = usePathname();

  const withoutBar = pathName.replace(/\//g, "");

  // para obtener parametros de la url
  const searchParams = useSearchParams();

  const q = searchParams.get("q");

  return (
    <>
      <br />
      <br />
      <br />
      <br />
      <section style={{ minHeight: "100vh" }}>
        <div
          style={{
            display: "flex",
            gap: "5px",
            padding: "0 15px",
            alignItems: "center",
          }}
          className="link-container"
        >
          <Link className="blog-link" href="/">
            home
          </Link>
          <span style={{ color: "#fff" }}>|</span>
          <p style={{ fontSize: "17px" }}>{withoutBar} </p>
        </div>
        <h2 style={{ margin: "50px 0", textAlign: "center" }}>
          Bienvenido al blog
        </h2>
        <div className="loading">
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Optio
            possimus accusamus ipsum, nulla voluptatem laboriosam corrupti ipsa,
            autem, obcaecati error repellendus. Eos qui amet veniam voluptatem
            nostrum, commodi quasi incidunt!
          </p>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Optio
            possimus accusamus ipsum, nulla voluptatem laboriosam corrupti ipsa,
            autem, obcaecati error repellendus. Eos qui amet veniam voluptatem
            nostrum, commodi quasi incidunt!
          </p>
        </div>
      </section>
      <br />
      <br />
      <br />
    </>
  );
};

// const link = {
//   color: "white",
//   fontSize: "18px",
// };

export default SinglePostPag;
