const AboutCertificate = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2   gap-5 place-items-center p-5">
      <div>
        <img
          className="w-24 h-24 scale-100 hover:scale-150 hover:cursor-pointer duration-300 "
          src="../images/certificates/ISO.png"
          alt="ISO Certifiate"
        />
      </div>
      <div>
        <p>
          NOFA Egypt is a certified designer, manufacturer, and supplier of
          natural wood flooring That is recognized globally and is certified
          from more than one entity, ensuring the quality of our products, the
          safety of our work environment, and assures our customers of a great
          choice and a perfect delivery whatever the criteria.
        </p>
      </div>
    </div>
  );
};
export default AboutCertificate;
