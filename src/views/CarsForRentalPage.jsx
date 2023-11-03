import React from "react";

const CarsForRentalPage = () => {
  return (
    <div>
      <div class=" space-x-2">
        <input
          type="checkbox"
          name="checkbox"
          className="text-[#ff0000] rounded focus:ring-0 cursor-pointer"
          id="cat-1"
        />
        <label class="text-gray-600 ml-2">Remember Me</label>
      </div>
    </div>
  );
};

export default CarsForRentalPage;
