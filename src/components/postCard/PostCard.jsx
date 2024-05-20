import Image from "next/image";

const PostCard = ({ handleClick, image, title, id }) => {
  return (
    <>
      <section style={cont}>
        <div className="img-container">
          <Image
            style={{ aspectRatio: "4/4" }}
            // layout="responsive"
            src={image}
            width={400}
            height={420}
            //  fill
            alt="pic"
          />{" "}
          {/* <img src="/img/$.png" alt="pic" /> */}
        </div>
        <h2 style={{ fontSize: "14px" }} className="card__title">
          {title}
        </h2>
        <p style={{ fontSize: "14px" }} className="card__text">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eos, autem
          voluptatum incidunt aperiam repellendus
        </p>
        <div style={{ flex: "1", display: "flex", alignItems: "flex-end" }}>
          <button
            style={button}
            onClick={() => handleClick(id)}
            aria-label="Leer más sobre el post"
          >
            Read more
          </button>
        </div>
      </section>
    </>
  );
};

const cont = {
  display: "flex",
  flexDirection: "column",
  gap: "8px",
  margin: "0 0 10px 0",
  border: "2px solid white",
  padding: "12px",
  borderRadius: "8px",
};

const button = {
  display: "flex",
  alignItems: "end",
  width: "100%",
  justifyContent: "center",
};
export default PostCard;
