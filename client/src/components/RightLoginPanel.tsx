import logisticImage from "/logistic.png";

const RightLoginPanel = () => {
  return (
    <div className="h-full">
      {/* Image Container */}
      <div className=" h-2/3 flex justify-center items-center">
        <img
          src={logisticImage}
          alt="logistic-image"
          className=" h-full w-full object-contain"
        />
      </div>
      {/* End of Image Container */}
      {/* Text Container */}
      <div className="h-1/3  flex flex-col items-center py-4 px-24 text-white">
        <p className=" font-semibold text-3xl text-center">
          Empowering your business with the tool of succeed
        </p>
        <p className=" text-center text-xl mt-4">
          Such as easy-to-use collaboration tools, advanced data analytics, and
          streamlined communication channels
        </p>
      </div>
      {/* End of Text Container */}
    </div>
  );
};

export default RightLoginPanel;
