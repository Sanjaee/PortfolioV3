import React from "react";
import ProjectCard from "../sub/ProjectCard";

const Projects = () => {
  return (
    <div
      className="flex flex-col items-center justify-center py-20"
      id="projects"
    >
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
        My Projects
      </h1>
      <div className="h-full w-full flex flex-col md:flex-row gap-10 px-10">
        <ProjectCard
          src="/ai.png"
          title="AI Generator with Express.js"
          description="ExpressAI menggabungkan kecepatan Express.js dan kecerdasan . Sambut masa depan web cerdas bersama ExpressAI!"
        />
        <ProjectCard
          src="/ecommers.png"
          title="Modern Next.js ecommers"
          description=" untuk pengalaman e-commerce terkini. Kecepatan dan desain yang unggul, hadirkan solusi e-commerce yang dinamis dan memukau."
        />
        <ProjectCard
          src="/cod.png"
          title="Modern React.js ecommers"
          description="E-commerce React.js yang modern dan inovatif. Desain responsif, antarmuka yang memukau, dan pengalaman belanja yang dinamis."
        />
      </div>
    </div>
  );
};

export default Projects;
