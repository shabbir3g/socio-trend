import { data } from "autoprefixer";
import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";
import { useSelector } from "react-redux";
import Modal from "react-responsive-modal";
import { toast } from "react-toastify";

const AboutModal = ({ data, open, setOpenDetailsModal, setUpdateUserData }) => {
  const user = useSelector((state) => state.states.user);
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    axios
      .put(`/api/user/updateAbout?email=${user.email}`, data)
      .then((data) => {
        if (data.status === 200) {
          setUpdateUserData(true);
          toast("Update successfully your information");
          setOpenDetailsModal(false);
        }
      });
  };
  return (
    <Modal
      open={open}
      onClose={() => setOpenDetailsModal(false)}
      center
      classNames={{
        modal: "customModal",
      }}
    >
      <div className="bg-gray-200 dark:bg-gray-800 p-5 rounded shadow-xl text-gray-800 md:w-[500px]">
        <div className="flex justify-between items-center border-b-2 py-3 mb-5 border-gray-500">
          <h4 className="text-lg font-bold dark:text-white">Edit about</h4>
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
    </Modal>
  );
};

export default AboutModal;
