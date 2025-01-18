import React from "react";

function About() {
  return (
    <div className="about">
      <section className="about-me border-black border-2 p-2  grid grid-cols-2 gap-4 bg-gray-200">
        <div className="about-me-text p-2 grid justify-center items-center">
          <h2 className="text-5xl p-2 -mb-10">Hi!! I'm Frontend Developer</h2>
          <p className="text-3xl p-2 w-3/4">
            My Name Korakod I'm Frontend Developer I'm 20 years old I'm from
            Thailand
          </p>
        </div>
        <div className="image p-2 flex justify-center items-center">
          <img
            src="https://images.unsplash.com/photo-1736598734718-daa665cc511c?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="image"
            className="rounded-full w-80 h-80"
          />
        </div>
      </section>
    </div>
  );
}

export default About;
