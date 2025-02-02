import React, { useEffect, useState } from "react";
import { forwardRef } from "react";
const Home = forwardRef((props, homeRef) => {
  const text = "Hi! I'm Frontend Developer.";
  const [ShowText, setShowText] = useState("");
  const [isDeleting, setDeleting] = useState(false);
  const [bg, setbg] = useState(true);
  useEffect(() => {
    const interval = setInterval(() => {
      setShowText((prev) => {
        if (!isDeleting) {
          if (prev.length < text.length) {
            return text.slice(0, prev.length + 1);
          } else {
            setDeleting(true);

            return prev;
          }
        } else {
          if (prev.length > 0) {
            return text.slice(0, prev.length - 1);
          } else {
            setDeleting(false);
            setbg(false);
            setTimeout(() => setbg(true), 1000);
            return prev;
          }
        }
      });
    }, 150);
    return () => clearInterval(interval);
  }, [isDeleting]); //

  return (
    <div className="about" ref={homeRef}>
      <section className="about-me bg-[#011627]  border-black border-2 grid grid-cols-1 md:grid-cols-2 gap-4 md:h-[680px] p-4 md:p-0">
        <div className="about-me-text flex flex-col justify-center items-center text-center  md:text-left md:ml-16 space-y-4  p-4">
          <div className="">
            <h2
              className={`text-white text-3xl md:text-6xl p-2 overflow-hidden w-fit text-wrap rounded-sm bg-[#011627] ${
                ShowText
                  ? "border-[#e71d36] border-r-4 border-l-4 border-2"
                  : "border-none"
              }`}
            >
              {setbg ? ShowText : ""}
            </h2>
          </div>
          <div className="text-center md:text-left">
            <p className="text-xl md:text-3xl p-2  text-white w-full  md:w-3/4">
              My Name is Korakod.
            </p>
            <p
              className="text-xl md:text-3xl p-2  text-white  w-full  md:w-3/4
             "
            >
              I'm Junior Frontend Developer i'm 20 years old i have learning by
              myself and I have interested in Frontend Developer.
            </p>
          </div>
        </div>
        <div className="image flex justify-center items-center p-4">
          <img
            src="https://imgcdn.stablediffusionweb.com/2024/12/31/3bcc3d08-6edb-4182-8fa0-8a3fde401455.jpg"
            alt="image"
            className=" w-[250px] h-[250px] md:w-[400px] md:h-[400px]  object-cover"
          />
        </div>
      </section>
      <hr className="border border-gray-600 w-full"></hr>
    </div>
  );
});
Home.displayName = "About";
export default Home;
