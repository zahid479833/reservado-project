import { useReducer, useState } from "react";
import { BiPlus, BiSearch } from "react-icons/bi";
import Bug from "./bug";

const formReducer = (state: any, event: any) => {
  return {
    ...state,
    [event.target.name]: event.target.value,
  };
};
const cities = ["San Francisco", "New York", "Los Angeles", "Chicago"];
const homeTypes = ["Apartment", "House", "Condo"];
const areas = [
  "0-500",
  "500-1000",
  "1000-1500",
  "1500-2000",
  "2000-2500",
  "2500-3000",
  "3000+",
];
const bedRooms = [1, 2, 3, 4, 5, 6];
export default function SearchPropertyForm() {
  const [formData, setFormData] = useReducer(formReducer, {});
  const [city, setCity] = useState("");
  const [homeType, setHomeType] = useState("");
  const [area, setArea] = useState("");
  const [price, setPrice] = useState([0, 5000]);
  const [bedroom, setBedroom] = useState(1);

  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <form
      className="grid lg:grid-cols-2 w-6/6 gap-4 mb-7 p-7"
      onSubmit={handleSubmit}
    >
      <div className="input-type">
        <div>
          <label htmlFor="city" className="inline-block mr-5">
            City:
          </label>
          <select
            id="city"
            value={city}
            className="border w-1/2 px-5 py-3 focus:outline-none rounded-md"
            onChange={(e) => setCity(e.target.value)}
          >
            <option value="">Select a city</option>
            {cities.map((city) => (
              <option key={city} value={city}>
                {city}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="input-type">
        <div>
          <label htmlFor="homeType" className="inline-block mr-5">
            Home Type:
          </label>
          <select
            id="homeType"
            value={homeType}
            className="border w-1/2 px-5 py-3 focus:outline-none rounded-md"
            onChange={(e) => setHomeType(e.target.value)}
          >
            <option value="">Select a home type</option>
            {homeTypes.map((homeType) => (
              <option key={homeType} value={homeType}>
                {homeType}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="input-type">
        <div>
          <label htmlFor="area" className="inline-block mr-5">
            Area:
          </label>
          <select
            id="area"
            value={area}
            className="border w-1/2 px-5 py-3 focus:outline-none rounded-md"
            onChange={(e) => setArea(e.target.value)}
          >
            <option value="">Select an area</option>
            {areas.map((area) => (
              <option key={area} value={area}>
                {area}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="input-type">
        <div>
          <label htmlFor="bedroom" className="inline-block mr-5">
            Bedroom:
          </label>
          <select
            id="bedroom"
            value={bedroom}
            className="border w-1/2 px-5 py-3 focus:outline-none rounded-md"
            onChange={(e) => setBedroom(Number(e.target.value))}
          >
            {bedRooms.map((bedroom) => (
              <option key={bedroom} value={bedroom}>
                {bedroom}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="input-type">
        <div>
          <label htmlFor="price" className="inline-block mr-5">
            Price:
          </label>
          <input
            type="range"
            id="price"
            min="0"
            max="5000"
            className="w-1/2"
            value={price[1]}
            onChange={(e) => setPrice([price[0], Number(e.target.value)])}
          />
          <span>${price[0]}</span> - <span>${price[1]}</span>
        </div>
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

      <button className="flex justify-center items-center text-md w-3/6 bg-green-500 text-white px-4 py-2 border rounded-md hover:bg-gray-50 hover:border-green-500 hover:text-green-500">
        Search{" "}
        <span className="px-1">
          <BiSearch size={24}></BiSearch>
        </span>
      </button>
    </form>
  );
}
