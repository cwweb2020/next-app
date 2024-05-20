"use client";

import { useRouter } from "next/navigation";

const Contact = () => {
  const router = useRouter();
  return (
    <div style={{ minHeight: "100vh" }}>
      <h1>contact</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas quae
        doloribus ut vitae, commodi ab velit dolorem culpa odio at accusantium
        architecto nihil iure eaque minima, voluptate cumque placeat aperiam?
      </p>
      <button onClick={() => router.back()}>back</button>
    </div>
  );
};

export default Contact;
