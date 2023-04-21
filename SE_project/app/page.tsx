"use client";
import React, { useState, useEffect } from "react";
import Form from "./components/propertyform";
import ShowProperty from "./components/showProperty";
import Table from "./components/table";

interface Property {
  user_id: number;
  name: string;
  email: string;
  password: string;
  mobileNo: string;
  properties: [
    {
      id: string;
      images: string[];
      price: number;
      area: string;
      rent: boolean;
      bedRooms: number;
      bathRooms: number;
      diningRooms: number;
      kitchen: number;
      storeRoom: number;
      location: string;
    }
  ];
}

function PropertyList() {
  const [properties, setProperties] = useState<Property[]>([]);
  const [visible, setVisible] = useState(false);
  const [searchVisible, setsearchVisible] = useState(false);
  const handler = () => {
    setVisible(!visible);
  };
  const searchHandler = () => {
    setsearchVisible(!searchVisible);
  };

  return (
    <main>
      <section className="py-5 text-black">
        <h1 className="text-xl md:text-5xl text-center font-bold py-10">
          Rental Management System
        </h1>
        <div className="container mx-auto flex justify-between py-5 border-b">
          <div className="left flex gap-3">
            <button
              onClick={handler}
              className="flex text-white bg-indigo-800 px-4 py-2 border rounded-md hover:bg-gray-50 hover:border-indigo-500 hover:text-gray-800"
            >
              Add Property
            </button>
            <button
              onClick={searchHandler}
              className="flex text-white bg-indigo-800 px-4 py-2 border rounded-md hover:bg-gray-50 hover:border-indigo-500 hover:text-gray-800"
            >
              Search Property
            </button>
          </div>
        </div>

        {/* collapsable form */}
        {visible ? <Form /> : <></>}
        {searchVisible ? <Form /> : <></>}

        {/* Table */}
        <div className="container mx-auto">
          <Table />
        </div>
      </section>
    </main>
  );
}

export default PropertyList;
