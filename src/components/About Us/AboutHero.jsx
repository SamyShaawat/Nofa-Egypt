const AboutHero = () => {
  return (
    <div
      className="relative w-full h-[300px] bg-cover bg-center"
      style={{ backgroundImage: "url(../images/aboutUs/aboutImage_1.jpg)" }}
    >
      <div
        className="absolute inset-0 flex items-start pt-16 pl-10 lg:bg-transparent"
        style={{
          background: "linear-gradient(to right, rgba(255, 255, 255, 0.7), rgba(255, 255, 255, 0.06))"
        }}
      >
        <div className="max-w-xl lg:ml-20">
          <h1 className="text-5xl font-bold border-l-4 border-black pl-3 text-[#191919]">ABOUT US</h1>
          <p className="mt-4 text-xl text-slate-800">
            Our Journey establishing the name, crafting quality & Excellence
            Since <span className="font-bold">1950</span> — Showcasing Dedication, Innovation, and Expertise
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutHero;
