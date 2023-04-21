import React from "react";

export default function ShowProperty({ data }: any) {
  return (
    <div>
      <h2>Properties</h2>
      <div>
        {data.map((user: any) => {
          const { user_id, name, email, password, mobileNo, properties } = user;
          return (
            <div key={user_id} className="flex flex-wrap md:flex-nowrap">
              {properties.map((property: any) => {
                return (
                  <div key={property.id} className="w-full md:w-1/2">
                    <div className=" m-4 p-12 flex justify-center items-center">
                      <div className="max-w-[24rem] md:max-w-xl bg-white rounded-xl flex flex-col md:flex-row flex-nowrap">
                        <div className="flex-[50%]">
                          <img
                            className="w-full h-full object-cover rounded-t-xl md:rounded-t-none md:rounded-l-xl"
                            src={
                              property.images[0] ||
                              "https://res.cloudinary.com/thirus/image/upload/v1632854291/logos/drawers_gr2wn5.jpg"
                            }
                            alt="Furniture"
                          />
                        </div>
                        <div className="p-9 flex-[50%]">
                          <h1 className="text-[1.4rem] leading-snug font-bold text-gray-600">
                            PKR {property.price || 10000} Thousand
                          </h1>
                          <h2 className="mt-3 text-gray-500 text-sm">
                            {property.Location || "Location Unknown"}
                          </h2>
                          <div className="mt-3 text-black text-sm flex flex-wrap">
                            <div>
                              <span className="mr-3">
                                Area: {property.area || 200} sq. feet
                              </span>
                              <span>Bedrooms: {property.bedRooms || 1} </span>
                            </div>

                            <div className="mt-3">
                              <span className="mr-5">
                                Bathrooms: {property.bathRooms || 1}
                              </span>
                              <span>
                                Store Rooms: {property.storeRoom || 1}
                              </span>
                            </div>
                          </div>

                          <p className="mt-3 text-gray-500 text-sm">
                            {property.Location}
                          </p>
                          <div className="mt-6 leading-none flex iGround Portion Available For Rent in DHA phase 2tems-center">
                            <div className="flex justify-between">
                              <p className=" border border-cyan-400 hover:bg-white hover:text-blue-600 mr-4 bg-blue-600 px-6 py-1 rounded-lg text-2xl  text-white">
                                Email
                              </p>
                              <p className="border border-cyan-400 hover:bg-blue-600 hover:text-white bg-white px-6 py-1 rounded-lg text-2xl  text-blue-800">
                                Call
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          );
        })}
      </div>
    </div>
  );
}

{
  /* <div className="border border-cyan-500">
        <div className=" m-4 bg-black p-12 flex justify-center items-center">
          <div className="max-w-[24rem] md:max-w-3xl bg-white rounded-xl flex flex-col md:flex-row">
            <div className="flex-[40%]">
              <img
                className="w-full h-full object-cover rounded-t-xl md:rounded-t-none md:rounded-l-xl"
                src="https://res.cloudinary.com/thirus/image/upload/v1632854291/logos/drawers_gr2wn5.jpg"
                alt="Furniture"
              />
            </div>
            <div className="p-9 flex-[60%]">
              <h1 className="text-[1.4rem] leading-snug font-bold text-gray-600">
                PKR 85 Thousand
              </h1>
              <h2 className="mt-3 text-gray-500 text-sm">
                DHA Defence Phase 2, DHA Defence
              </h2>
              <div className="mt-3 text-black text-sm ">
                <span className="mr-4">1 - Kanal</span>
                <span className="mr-4">3 - Bedrooms</span>
                <span className="mr-4">3 - Bathrooms</span>
              </div>

              <p className="mt-3 text-gray-500 text-sm">
                Ground Portion Available For Rent in DHA phase 2
              </p>
              <div className="mt-6 leading-none flex iGround Portion Available For Rent in DHA phase 2tems-center">
                <div className="flex justify-between">
                  <p className=" border border-cyan-400 hover:bg-white hover:text-blue-600 mr-4 bg-blue-600 px-6 py-1 rounded-lg text-2xl  text-white">
                    Email
                  </p>
                  <p className="border border-cyan-400 hover:bg-blue-600 hover:text-white bg-white px-6 py-1 rounded-lg text-2xl  text-blue-800">
                    Call
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> */
}
