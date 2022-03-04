import { data } from "autoprefixer";
import React from "react";
import { useForm } from "react-hook-form";
import { useSelector } from "react-redux";
import baseUrl from "../../utilities/baseUrl";

const AboutModal = ({ data }) => {
  const user = useSelector((state) => state.states.user);
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    fetch(`${baseUrl}/api/user/updateAbout?email=${user.email}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => console.log(result));
  };
  return (
    <div
      className="bg-black bg-opacity-50 absolute inset-0 hidden justify-center items-center z-10"
      id="edit-about-modal"
    >
      <div className="bg-gray-200 dark:bg-gray-800 p-5 rounded shadow-xl text-gray-800 md:w-1/4">
        <div className="flex justify-between items-center border-b-2 py-3 mb-5 border-gray-500">
          <h4 className="text-lg font-bold dark:text-white">Edit about</h4>
          <svg
            className="h-6 w-6 cursor-pointer p-1 hover:bg-gray-300 rounded-full dark:text-white dark:hover:bg-gray-600"
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

        <form onSubmit={handleSubmit(onSubmit)}>
          <label className="dark:text-white">Educations</label>
          <input
            className="w-full h-12 mb-3 dark:bg-gray-700 px-2 dark:text-white"
            type="text"
            {...register("education")}
            defaultValue={data.education}
            placeholder={data.education}
          />
          <label className="dark:text-white">Lives in </label>
          <input
            className="w-full h-12 mb-3 dark:bg-gray-700 px-2 dark:text-white"
            type="text"
            {...register("city")}
            defaultValue={data.city}
            placeholder={data.city}
          />
          <label className="dark:text-white">From</label>
          <input
            className="w-full h-12 mb-3 dark:bg-gray-700 px-2 dark:text-white"
            type="text"
            {...register("from")}
            defaultValue={data.from}
            placeholder={data.from}
          />
          <label className="dark:text-white">Workplace</label>
          <input
            className="w-full h-12 mb-3 dark:bg-gray-700 px-2 dark:text-white"
            type="text"
            {...register("workplace")}
            defaultValue={data.workplace}
            placeholder={data.workplace}
          />
          <label className="dark:text-white">Relationship</label>
          <select
            name="relationship"
            id=""
            className="w-full h-12 mb-3 dark:bg-gray-700 dark:text-white px-3"
            {...register("relationship")}
            placeholder={data.relationship}
            defaultValue={data.education}
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
