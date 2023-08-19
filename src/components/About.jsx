import React from "react";
import profile from "./armaan1-removebg-preview.png";

const About = () => {
  return (
    <div>
      <section className=" font-mono text-slate-900 bg-gradient-to-br from-cyan-900 to-gray-200 dark:bg-gray-80 body-font">
        <div className="container   mx-auto flex px-5 py-24 items-center justify-center flex-col">
          <img
            className="lg:w-2/6 shadow-lg  rounded-md px-24  md:w-3/6 w-5/6 mb-10 object-cover object-center rounded"
            alt="hero"
            src={profile}
          />
          <div className="text-center lg:w-2/3 w-full">
            <h1 className="title-font text-cyan-400  sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
              Armaan Khan
            </h1>
            <p className="mb-8 shadow-md p-4 capitalize leading-relaxed">
              Absolutely, here's a bio for a full-stack developer who is
              currently in their 4th year of studying Data Science Engineering:
              --- 👋 Hey there! I'm [Your Name], a passionate Full-Stack
              Developer with a strong foundation in Data Science Engineering. 🚀
              🎓 Currently in my 4th year of pursuing a degree in Data Science
              Engineering, I'm all about creating innovative solutions that
              bridge the gap between data and user experience. 📊💻 🌐 My
              journey into the world of tech started with a fascination for both
              data insights and creative problem-solving. Over the years, I've
              honed my skills in crafting intuitive user interfaces and writing
              robust backend code, giving life to my vision of seamless digital
              experiences. 🛠️ 🔍 The realm of data science has equipped me with
              the ability to decipher complex datasets and translate them into
              meaningful insights. Whether it's analyzing trends, building
              predictive models, or designing interactive data visualizations, I
              thrive on extracting value from data to drive informed decisions.
              📈📊 💼 When I'm not immersed in lines of code or analyzing
              datasets, you'll often find me collaborating with diverse teams,
              learning from peers, and contributing to open-source projects. I
              believe in continuous learning and staying ahead in the
              ever-evolving tech landscape. 🌱 🚀 As I stride into the world of
              software development, my goal is to build elegant, efficient, and
              user-centric applications that have a positive impact on people's
              lives. With a passion for both the front-end and back-end, I'm
              excited to contribute to projects that challenge and inspire me.
              💡 🌟 Let's connect and explore how we can create amazing things
              together. Feel free to reach out for collaborations, discussions,
              or even a good old tech chat! 🤝 --- Feel free to personalize this
              bio with your own experiences, skills, and aspirations. Good luck
              on your journey as a Full-Stack Developer and Data Science
              Engineering enthusiast!
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
