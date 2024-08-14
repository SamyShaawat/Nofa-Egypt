const Mission = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2   gap-5 place-items-center p-5">
      {/* Text */}
      <div className="">
        <p className="text-3xl font-bold mb-5">Our Mission</p>
        <p>
          Is your home missing that extra special thing? We have the spirit We
          have the skill We have the wood And You have the place Let’s do it.
        </p>
      </div>
      {/* Image */}
      <div>
        <img src="../images/aboutUs/aboutImage_3.png" alt="" />
      </div>
    </div>
  );
};
export default Mission;
