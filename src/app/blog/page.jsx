"use client";
import useFetchData from "@/hooks/useFetchData ";
import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";

const SinglePostPag = () => {
  const pathName = usePathname();

  const withoutBar = pathName.replace(/\//g, "");

  // para obtener parametros de la url
  const searchParams = useSearchParams();

  const q = searchParams.get("q");

  const { data, loading } = useFetchData(
    "https://jsonplaceholder.typicode.com/posts"
  );

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

        {data?.map(({ title, body, userId, id }) => (
          <>
            <div style={link} className="loading" key={userId}>
              <h2>{title}</h2>
              <p>{body}</p>
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

export default SinglePostPag;
