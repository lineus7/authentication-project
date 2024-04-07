const MiddleContentHomepage = () => {
  return (
    <>
      <div className="flex gap-4">
        {/* BarChart */}
        <div className="card w-2/3 bg-white p-6 text-black">
          <p className=" font-semibold">Aging - Account Receivable</p>
        </div>
        {/* BarChart End */}

        {/* PieChart */}
        <div className="card w-1/3 bg-white p-6 text-black"></div>
        {/* PieChart End */}
      </div>
    </>
  );
};

export default MiddleContentHomepage;
