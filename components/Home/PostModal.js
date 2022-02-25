import React, { useState } from "react";
import Image from "next/image";
import { useForm } from "react-hook-form";
import axios from "axios";

const PostModal = ({ userData }) => {
  const [postImg, setPostImg] = useState([]);
  const [prePostImg, setPrePostImg] = useState(null);

  const handlePostImg = (file) => {
    setPostImg(file);
    setPrePostImg(URL.createObjectURL(file));
  };

  const { register, handleSubmit } = useForm();
  const onSubmit = async (data) => {
    data.displayName = userData.displayName;
    data.email = userData.email;
    data.photoURL = userData.photoURL;

    const formData = new FormData();
    formData.append("upload_preset", "my-uploads");

    if (postImg) {
      formData.append("file", postImg);
      await fetch(` https://api.cloudinary.com/v1_1/dtkl4ic8s/image/upload`, {
        method: "POST",
        body: formData,
      })
        .then((res) => res.json())
        .then((result) => (data.img = result.url));
    }
    // console.log(data);

    const response = await axios.post(`/api/post`, {
      data,
    });
    if (response.status === 201) {
      alert("Updated Success");
    }
    console.log(response);
  };
  return (
    <div
      className="bg-black bg-opacity-50 absolute inset-0 hidden justify-center items-center z-10"
      id="create-post-modal"
    >
      <div className="bg-gray-200 dark:bg-gray-800 px-7 py-3 rounded shadow-xl text-gray-800">
        <div className="flex justify-between items-center border-b-2 py-3 border-gray-500">
          <h4 className="text-lg font-bold dark:text-white">
            Create a new post
          </h4>
          <svg
            className="h-6 w-6 cursor-pointer p-1 hover:bg-gray-300 rounded-full dark:text-white dark:hover:bg-gray-600"
            id="close-post-modal"
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
        <div className="flex items-center pt-3">
          <Image
            src={userData?.photoURL || "/user-8.png"}
            alt=""
            height="40"
            width="40"
            className="rounded-full"
          />
          <h2 className="text-gray-200 font-semibold ml-3">
            {userData?.displayName}
          </h2>
        </div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="flex justify-between items-center pt-5">
            <textarea
              className="rounded w-full dark:bg-gray-800 dark:text-white outline-none border-2 border-gray-700 focus:border-blue-600  p-2"
              name=""
              id="post-modal"
              cols="30"
              rows="3"
              placeholder="Whats on your mind"
              {...register("postContent")}
            />
          </div>
          <label htmlFor="files2">
            <div className="flex justify-center p-3 border-2 border-gray-700 rounded-lg mt-5">
              <Image
                className="object-content cursor-pointer rounded-lg object-content"
                src={prePostImg || "https://i.ibb.co/58tWhzt/images.png"}
                alt="images"
                width="450"
                height="300"
              />
            </div>
          </label>
          <input
            type="file"
            name="file"
            id="files2"
            accept="image/*"
            className="hidden"
            onChange={(e) => handlePostImg(e.target.files[0])}
          />
          <button
            type="submit"
            className="px-3 py-2 my-5 w-full bg-blue-500 text-gray-200 hover:bg-green-700 rounded-md"
          >
            Post
          </button>
        </form>
      </div>
    </div>
  );
};

export default PostModal;
