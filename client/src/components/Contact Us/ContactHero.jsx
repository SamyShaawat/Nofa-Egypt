/* eslint-disable react/no-unknown-property */
/* eslint-disable react/no-unescaped-entities */
const ContactHero = () => {
  return (
    <div
      className="relative w-full h-[350px] mt-32 bg-cover bg-center"
      style={{
        backgroundImage:
          "url(https://firebasestorage.googleapis.com/v0/b/nofa-egypt.appspot.com/o/contactUs%2FcontactImage_1.png?alt=media&token=e80eddea-dc9d-4455-a187-95f02718a01a)",
      }}
    >
      <div
        className="absolute inset-0 flex items-start pt-16 pl-10"
        style={{
          background:
            "linear-gradient(to right, rgba(255, 255, 255, 0.7), rgba(255, 255, 255, 0.06))", // Default gradient
        }}
      >
        <style jsx>{`
          @media (max-width: 1024px) {
            /* Mobile and tablet screens */
            .mobile-tablet-background {
              background: rgba(255, 255, 255, 0.7);
            }
          }
        `}</style>
        <div className="absolute inset-0 flex items-start pt-16 pl-10 mobile-tablet-background lg:bg-transparent">
          <div className="max-w-xl lg:ml-20">
            <h1 className="text-5xl font-bold border-l-4 border-black pl-3 text-[#191919]">
              CONTACT US
            </h1>
            <p className="mt-4 text-lg md:text-xl text-slate-900">
              We are here to assist you with our dedicated team, ensuring you
              receive the best possible service. Let's connect and build
              something amazing together.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactHero;
