const HistoryNofa = () => {
  return (
    <div>
      <div className=" p-6 grid grip-cols-1 gap-5 place-items-center">
        <div>
          <img src="../images/aboutUs/graphIcon.png" alt="" />
        </div>
        <p>
          NOFA is a family business established in 1950 with a stellar projects
          record. With decades of experience and growth to testify for our
          exceptional work.
        </p>
      </div>
      {/* Image and Text */}
      <div className="p-6 grid grip-cols-1 sm:grid-cols-2 gap-5 place-items-center">
        {/* Text */}
        <div>
          NOFA is a family business established in 1950 with a stellar projects
          record. Over the decades, our flooring company has seen remarkable
          growth and expansion, as demonstrated in the chart. From a modest
          beginning in 1950, completing just around 10,000 square meters of
          flooring, we have consistently increased our capacity and reach. By
          1990, we had expanded our operations significantly, completing over
          40,000 square meters. Today, as we enter 2024, we're proud to achieve
          an impressive milestone, with our team handling more than 80,000
          square meters of projects. This growth reflects our commitment to
          quality, customer satisfaction, and innovation in the flooring
          industry.
        </div>
        {/* image */}
        <div>
          <img src="../images/aboutUs/Graph.gif" />
        </div>
      </div>
    </div>
  );
};

export default HistoryNofa;
