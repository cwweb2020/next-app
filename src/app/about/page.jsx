"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const About = () => {
  const pathName = usePathname();
  const withoutBar = pathName.replace(/\//g, "");

  return (
    <>
      <div style={{ minHeight: "100vh" }}>
        {/* <img src="/img/il1.svg" alt="" width="300px" /> */}
        <br />
        <br />
        <br />
        <br />
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
        <section>
          <div className="text">
            <h2>Sorteamos dinero en efectivo</h2>
            <img src="/img/$.png" alt="" width={400} />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis
              saepe exercitationem sed deserunt totam asperiores debitis
              pariatur corrupti recusandae autem. Ipsa illum, assumenda facere
              placeat laborum unde sed! Sequi, ipsa!
            </p>
          </div>
          <div style={{ width: "100%", position: "relative", height: "auto" }}>
            <Image
              style={{ width: "100%", objectFit: "contain" }}
              // layout="responsive"
              src="/img/il1.svg"
              // width={400}
              // height={400}
              alt="pic"
              fill
            />
            {/* <Image
            //  layout="responsive"
            src="/img/il1.svg"
            // width={400}
            // height={400}
            alt="pic"
            fill
          /> */}
          </div>
        </section>
      </div>
      <br />
      <br />
      <br />
    </>
  );
};

export default About;
