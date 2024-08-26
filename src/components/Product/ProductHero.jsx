/* eslint-disable react/no-unknown-property */
/* eslint-disable react/no-unescaped-entities */
const ProductHero = () => {
  return (
    <div
      className="relative w-full h-[350px] mt-32 bg-cover bg-center"
      style={{
        backgroundImage:
          "url(https://firebasestorage.googleapis.com/v0/b/nofa-egypt.appspot.com/o/aboutUs%2FaboutImage_1.png?alt=media&token=8d07b471-e809-4194-b506-1a9e2bbcf888)",
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
            .background-solid {
              background: rgba(255, 255, 255, 0.7);
            }
          }
        `}</style>
        <div className="absolute inset-0 flex items-start pt-16 pl-10 background-solid lg:bg-transparent">
          <div className="max-w-xl lg:ml-20">
            <h1 className="text-5xl font-bold border-l-4 border-black pl-3 text-[#191919]">
              PRODUCTS & FINISHES
            </h1>
            <p className="mt-4 text-xl text-slate-800">
              Choose from our diverse array of flooring
              <span className="font-bold text-xl"> Products and Finishes </span>
              that combine both elegance and beauty for all your needs.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ProductHero;
