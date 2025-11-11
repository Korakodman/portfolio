import { useEffect, useState } from "react";

const TypeWriter = () => {
  const text = "I'm a Frontend Developer.";
  const [showText, setShowText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [index, setIndex] = useState(0);
  const [pause, setPause] = useState(false);

  useEffect(() => {
    if (pause) return;

    const delay = isDeleting ? 75 : 150;

    const timeout = setTimeout(() => {
      setShowText(text.slice(0, index));

      if (!isDeleting) {
        if (index < text.length) {
          setIndex(index + 1);
        } else {
          setPause(true);
          setTimeout(() => {
            setIsDeleting(true);
            setPause(false);
          }, 3000); // รอ 3 วิหลังพิมพ์จบ
        }
      } else {
        if (index > 0) {
          setIndex(index - 1);
        } else {
          setPause(true);
          setTimeout(() => {
            setIsDeleting(false);
            setPause(false);
          }, 1000); // รอ 1 วิก่อนเริ่มพิมพ์ใหม่
        }
      }
    }, delay);

    return () => clearTimeout(timeout);
  }, [index, isDeleting, pause]);

  return (
    <div className=" flex">
      <h2 className="text-2xl md:text-[56px] ">{showText}</h2>
      <h2
        className="relative after:absolute after:inset-0  after:animate-caret after:bg-white
        text-white text-sm md:text-6xl md:p-0.5 md:h-12 h-8 p-0.5
        w-max rounded-sm bg-[#222831]overflow-hidden whitespace-nowrap"
      ></h2>
    </div>
  );
};

export default TypeWriter;
