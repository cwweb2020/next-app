"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import PostCard from "@/components/postCard/PostCard";
import useScreenSize from "@/hooks/useScreenSize";
import useFetchData from "@/hooks/useFetchData ";
import Skeleton from "@mui/material/Skeleton";
import Box from "@mui/material/Box";
import { useMyContext } from "@/context";

const Home = () => {
  const [isOn, setIsOn] = useState(false);
  const [num, setNum] = useState([]);

  const { data, loading } = useMyContext();

  const isSmallScreen = useScreenSize();

  const router = useRouter();

  const handleClick = (id) => {
    //  setIsOn(!isOn);
    // Llamar a otra función aquí si es necesario
    // router.push("/blog");
    console.log(id);
  };

  return (
    <>
      <br />
      <br />
      <br />

      {!isSmallScreen && (
        <>
          <br />
          <br />
          <br />
          <br />
          <br />
        </>
      )}
      <div className="home">
        {!loading ? (
          data?.map(({ image, description, title, id }) => (
            <PostCard
              handleClick={handleClick}
              image={image}
              title={title}
              description={description}
              loading={loading}
              key={id}
              id={id}
            />
          ))
        ) : (
          <div style={skel} className="home">
            {Array.from({ length: 10 }).map((_, index) => (
              <>
                <div>
                  <Skeleton
                    key={index}
                    sx={{ bgcolor: "#d3d3d366" }}
                    variant="rectangular"
                    // width={289}
                    height={300}
                  />
                  <br />
                  <Box sx={{ pt: 0.5 }}>
                    <Skeleton sx={{ bgcolor: "#d3d3d366" }} />
                    <Skeleton sx={{ bgcolor: "#d3d3d366" }} width="60%" />
                    <Skeleton sx={{ bgcolor: "#d3d3d366" }} width="15%" />
                  </Box>
                </div>
              </>
            ))}
          </div>
        )}
      </div>
      <br />
      <br />
      <br />
      <br />
    </>
  );
};

const load = {
  display: "block",
  gridColumn: "1 / 5",
  textAlign: "center",
};
const skel = {
  gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))",
};

export default Home;
