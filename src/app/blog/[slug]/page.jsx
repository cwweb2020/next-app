import { Just_Me_Again_Down_Here } from "next/font/google";
import Image from "next/image";

const SinglePostPage = ({ params }) => {
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
          <h2 style={{ margin: "0 0 0.5em 0" }}>Titulo del texto</h2>
          <p style={{ lineHeight: "32px" }}>
            A Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia
            distinctio voluptatibus amet omnis quibusdam consectetur vel, ex
            velit magni natus iusto debitis nam provident. Obcaecati aut sint
            consequatur sunt eaque? orem ipsum dolor sit amet, consectetur
            adipisicing elit. Officia distinctio voluptatibus amet omnis
            quibusdam consectetur vel, ex velit magni natus iusto debitis nam
            provident. Obcaecati aut sint consequatur sunt eaque?
          </p>
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
