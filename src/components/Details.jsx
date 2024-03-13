import React from "react";

const Details = ({ exerciseDetail }) => {
  const { name, target, bodyPart, gifUrl, equipment } = exerciseDetail;

  const extraDetail = [
    { name: bodyPart },
    { name: target },
    { name: equipment },
  ];

  return (
    <div className="flex flex-col md:flex-row md:justify-around mx-3 items-center gap-[40px] lg:gap-[120px] p-[20px] mt-24  ">
      <div className="shadow-md detail-card w-full sm:w-[450px] md:w-[900px]">
        <img
          src={gifUrl}
          alt={name}
          loading="lazy"
          className="rounded-bl-[35px] sm:w-full md:w-[406px] rounded-tr-[35px]"
        />
      </div>

      <div className="flex flex-col gap-[20px] w-full lg:gap-[35px]">
        <h3 className="text-4xl md:text-5xl font-Ojuju font-bold text-[#001219] dark:text-[#fff]">
          {name}
        </h3>
        <h6 className="md:text-xl font-semibold text-[#001219] dark:text-[#fefcfbb1]">
          Physical activity maintains your strength. A great way to work on your{" "}
          {target} is with {name}. You'll feel more upbeat and energized after
          doing it.
        </h6>

        <div className="flex flex-wrap w-full gap-5">
        {extraDetail.map((item) => (
          <div key={item.name} className=" w-fit">
            <p className="p-2 md:text-xl bg-[#370617] text-[#fff] font-Marker capitalize md:p-3 rounded-full">
              {item.name}
            </p>
          </div>
        ))}
        </div>
        
      </div>
    </div>
  );
};

export default Details;
