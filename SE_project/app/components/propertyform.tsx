import AddPropertyForm from "./addProperty";
import SearchPropertyForm from "./searchProperty";
import UpdatePropertyForm from "./updateProperty";

const flag = true;
export default function Form() {
  return (
    <div className="container mx-auto">
      {flag ? <SearchPropertyForm /> : <UpdatePropertyForm />}
    </div>
  );
}
