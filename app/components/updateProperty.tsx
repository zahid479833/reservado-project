import { useReducer } from "react";
import { BiBrush } from "react-icons/bi";
import Bug from "./bug";

const formReducer = (state: any, event: any) => {
  return {
    ...state,
    [event.target.name]: event.target.value,
  };
};

export default function UpdatePropertyForm() {
  const [formData, setFormData] = useReducer(formReducer, {});

  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <form
      className="grid lg:grid-cols-4 w-6/6 gap-4 mb-7 p-7"
      onSubmit={handleSubmit}
    >
      <div className="input-type">
        <input
          type="text"
          onChange={setFormData}
          name="price"
          className="border w-full px-5 py-3 focus:outline-none rounded-md"
          placeholder="Price"
        />
      </div>
      <div className="input-type">
        <input
          type="text"
          onChange={setFormData}
          name="city"
          className="border w-full px-5 py-3 focus:outline-none rounded-md"
          placeholder="City"
        />
      </div>
      <div className="input-type">
        <input
          type="text"
          onChange={setFormData}
          name="area"
          className="border w-full px-5 py-3 focus:outline-none rounded-md"
          placeholder="Area"
        />
      </div>
      <div className="input-type">
        <input
          type="text"
          onChange={setFormData}
          name="location"
          className="border w-full px-5 py-3 focus:outline-none rounded-md"
          placeholder="Map Location"
        />
      </div>
      <div className="input-type">
        <input
          type="text"
          onChange={setFormData}
          name="bedrooms"
          className="border w-full px-5 py-3 focus:outline-none rounded-md"
          placeholder="BedRooms"
        />
      </div>
      <div className="input-type">
        <input
          type="text"
          onChange={setFormData}
          name="bathrooms"
          className="border w-full px-5 py-3 focus:outline-none rounded-md"
          placeholder="Bathrooms"
        />
      </div>
      <div className="input-type">
        <input
          type="text"
          onChange={setFormData}
          name="floor"
          className="border w-full px-5 py-3 focus:outline-none rounded-md"
          placeholder="Floor (ground, 1st, 2nd ,basement)"
        />
      </div>
      <div className="input-type">
        <input
          type="text"
          onChange={setFormData}
          name="description"
          className="border w-full px-5 py-3 focus:outline-none rounded-md"
          placeholder="Description"
        />
      </div>

      <div className="flex gap-10 items-center">
        <div className="form-check">
          <input
            type="radio"
            onChange={setFormData}
            value="Active"
            id="radioDefault1"
            name="status"
            className="form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300  bg-white checked:bg-green-500 checked:border-green-500 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
          />
          <label htmlFor="radioDefault1" className="inline-block tet-gray-800">
            Active
          </label>
        </div>
        <div className="form-check">
          <input
            type="radio"
            onChange={setFormData}
            value="Inactive"
            id="radioDefault2"
            name="status"
            className="form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300  bg-white checked:bg-green-500 checked:border-green-500 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
          />
          <label htmlFor="radioDefault2" className="inline-block tet-gray-800">
            Inactive
          </label>
        </div>
      </div>

      <button className="flex justify-center items-center text-md w-3/6 bg-yellow-500 text-white px-4 py-2 border rounded-md hover:bg-gray-50 hover:border-green-500 hover:text-green-500">
        Update{" "}
        <span className="px-1">
          <BiBrush size={24}></BiBrush>
        </span>
      </button>
    </form>
  );
}
