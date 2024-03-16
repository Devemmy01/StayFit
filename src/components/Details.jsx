// Importing React module
import React from "react";

// Defining Details functional component with props
const Details = ({ exerciseDetail }) => {
  // Destructuring exerciseDetail object
  const { name, target, bodyPart, gifUrl, equipment } = exerciseDetail;

  // Array of extra details
  const extraDetail = [
    { name: bodyPart },
    { name: target },
    { name: equipment },
  ];

  // Rendering JSX elements
  return (
    <div className="flex flex-col md:flex-row md:justify-around mx-3 items-center gap-[40px] lg:gap-[120px] p-[20px] mt-24  ">
      {/* Image container */}
      <div className="shadow-md detail-card w-full sm:w-[450px] md:w-[900px]">
        <img
          src={gifUrl}
          alt={name}
          loading="lazy"
          className="rounded-bl-[35px] sm:w-full md:w-[406px] rounded-tr-[35px]"
        />
      </div>

      {/* Details container */}
      <div className="flex flex-col gap-[20px] w-full lg:gap-[35px]">
        {/* Exercise name */}
        <h3 className="text-4xl md:text-5xl font-Ojuju font-bold text-[#001219] dark:text-[#fff]">
          {name}
        </h3>
        {/* Exercise description */}
        <h6 className="md:text-xl font-semibold text-[#001219] dark:text-[#fefcfbb1]">
          Physical activity maintains your strength. A great way to work on your{" "}
          {target} is with {name}. You'll feel more upbeat and energized after
          doing it.
        </h6>

        {/* Extra details */}
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

// Exporting Details component
export default Details;
