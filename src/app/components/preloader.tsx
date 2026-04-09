
"use client";
import Image from "next/image";
export default function Preloader() {
  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        backgroundColor: "#ffffff",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        zIndex: 9999,
      }}
    >
      <div>
      <Image src="/images/logov2.png" alt="Logo Image" width={100} height={100} />
      {/* <h1>Loading....</h1> */}
      </div>
    </div>
  );
}
