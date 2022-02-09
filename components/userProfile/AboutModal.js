import React, { useState } from "react";

const AboutModal = () => {
  const handleOnChangeAbout = (e) => {
    e.preventDefault();
    console.log(e.target.name, e.target.value);
  };
  return (
    <div
      className="bg-black bg-opacity-50 absolute inset-0 hidden justify-center items-center "
      id="edit-about-modal"
    >
      <div className="bg-gray-200 p-5 rounded shadow-xl text-gray-800 md:w-1/4">
        <div className="flex justify-between items-center border-b-2 py-3 mb-5 border-gray-500">
          <h4 className="text-lg font-bold">Edit about</h4>
          <svg
            className="h-6 w-6 cursor-pointer p-1 hover:bg-gray-300 rounded-full"
            id="close-about-modal"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path
              fillRule="evenodd"
              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
              clipRule="evenodd"
            ></path>
          </svg>
        </div>

        <form onSubmit={handleOnChangeAbout}>
          <label>Educations</label>
          <input
            className="w-full h-12 mb-3"
            type="text"
            name="siam"
            onChange={handleOnChangeAbout}
          />
          <label>Lives in </label>
          <input
            className="w-full h-12 mb-3"
            type="text"
            name="naim"
            onChange={handleOnChangeAbout}
          />
          <label>From</label>
          <input
            className="w-full h-12 mb-3"
            type="text"
            name="sumon"
            onChange={handleOnChangeAbout}
          />
          <label>Workplace</label>
          <input
            className="w-full h-12 mb-3"
            type="text"
            name="sumon"
            onChange={handleOnChangeAbout}
          />
          <label>Relationship</label>
          <select
            name="relationship"
            id=""
            className="w-full h-12 mb-3 px-3"
            onChange={handleOnChangeAbout}
          >
            <option value="Single">Single</option>
            <option value="In a relationship">In a relationship </option>
            <option value="Engaged">Engaged </option>
            <option value="Married">Married </option>
          </select>

          <div className="my-3 flex justify-end space-x-3 ">
            <button
              type="submit"
              className="px-5 py-2 font-semibold bg-green-500 text-gray-200 hover:bg-green-700 rounded-md"
            >
              Update
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AboutModal;
