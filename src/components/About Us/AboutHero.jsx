function AboutHero() {
  return (
    <div
      className="relative w-full h-[400px] bg-cover bg-center"
      style={{ backgroundImage: "url(../images/aboutUs/aboutImage_1.png)" }}
    >
      {/* <img className="" src="../images/aboutUs/aboutImage_1.png" alt="" /> */}
      <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center pl-10">
        <div>
          <div className="flex items-center">
            <div className="text-4xl font-bold tracking-wide border-l-4 border-blue-500 pl-3">
              ABOUT US
            </div>
          </div>
          <div className="mt-4 text-lg">
            <p>
              Our Journey establishing the name, crafting quality & Excellence
              Since 1950 — Showcasing Dedication ,Innovation, and Expertise
            </p>
          </div>
        </div>
      </div>
    </div>

    // <div>
    //   <h2 className="relative">About Us</h2>
    //
    // </div>
  );
}

export default AboutHero;
