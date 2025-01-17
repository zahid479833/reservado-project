import { BiEdit, BiTrash } from "react-icons/bi";
import properties from "../../database/properties.json";

export default function Table() {
  return (
    <table className="min-w-full table-auto">
      <thead>
        <tr className="bg-gray-800">
          <th className="px-12 py-2">
            <span className="text-gray-200">Price (Rupees)</span>
          </th>
          <th className="px-12 py-2">
            <span className="text-gray-200">City</span>
          </th>
          <th className="px-12 py-2">
            <span className="text-gray-200">Area (Sq. Feet)</span>
          </th>

          <th className="px-12 py-2">
            <span className="text-gray-200">Status</span>
          </th>
          <th className="px-12 py-2">
            <span className="text-gray-200">Actions</span>
          </th>
        </tr>
      </thead>
      <tbody className="bg-gray-200">
        {properties.map((property, i) => (
          <TR {...property} key={i} />
        ))}
      </tbody>
    </table>
  );
}

function TR({ price, city, area, status }: any) {
  /* price, city, area, status */
  return (
    <tr className="bg-gray-50 text-center">
      <td className="px-16 py-2">
        <span>{price || 5000}</span>
      </td>
      <td className="px-16 py-2">
        <span>{city || "UnKnown"}</span>
      </td>
      <td className="px-16 py-2">
        <span>{area} sq. feet</span>
      </td>
      <td className="px-16 py-2">
        <button className="cursor">
          <span className="bg-green-500 text-white px-5 py-1 rounded-full">
            {status || "Active"}
          </span>
        </button>
      </td>
      <td className="px-16 py-2 flex justify-around gap-5 ">
        <button className="cursor">
          <BiEdit size={25} color={"rgb(34,197,94)"} />
        </button>
        <button>
          <BiTrash size={25} color="rgb(244,63,94)" />
        </button>
      </td>
    </tr>
  );
}
