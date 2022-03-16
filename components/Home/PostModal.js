import React, { useState } from "react";
import Image from "next/image";
import { useForm } from "react-hook-form";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Modal from "react-responsive-modal";
import "react-responsive-modal/styles.css";

const PostModal = ({
  userData,
  openPostModal,
  setOpenPostModal,
  setNewPost,
}) => {
  const [postImg, setPostImg] = useState([]);
  const [prePostImg, setPrePostImg] = useState(null);
  const [updating, setUpdating] = useState(false);

  const handlePostImg = (file) => {
    setPostImg(file);
    setPrePostImg(URL.createObjectURL(file));
  };

  const { register, handleSubmit } = useForm();
  const onSubmit = async (data) => {
    setUpdating(true);
    data.displayName = userData.displayName;
    data.email = userData.email;
    data.photoURL = userData.photoURL;
    data.userName = userData.userName;

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

    const response = await axios.post(`/api/post`, {
      data,
    });
    if (response.status === 200) {
      setUpdating(false);
      setNewPost(true);
      setOpenPostModal(false);
      toast("Your Post successfully Done");
    }
  };
  if (updating) {
    toast("Posting pending");
  }
  return (
    <Modal
      open={openPostModal}
      onClose={() => setOpenPostModal(false)}
      center
      classNames={{
        modal: "customModal",
      }}
    >
      <div className="bg-gray-200 dark:bg-gray-800 px-7 py-3 rounded shadow-xl text-gray-800 md:w-[500px]">
        <div className="flex justify-between items-center border-b-2 py-3 border-gray-500">
          <h4 className="text-lg font-bold dark:text-white">
            Create a new post
          </h4>
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
              className="rounded w-full dark:bg-gray-800 dark:text-white outline-none border-2 border-gray-400 dark:border-gray-700 focus:border-blue-600  p-2"
              name=""
              id="post-modal"
              cols="30"
              rows="3"
              placeholder="Whats on your mind"
              {...register("postContent")}
            />
          </div>
          <label htmlFor="files2">
            <div className="flex justify-center p-3 border-2 border-gray-400 dark:border-gray-700 rounded-lg mt-5">
              <Image
                className="object-content cursor-pointer rounded-lg object-content"
                src={prePostImg || "/post.jpg"}
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
            id="post-submit"
            type="submit"
            className="px-3 py-2 my-5 w-full bg-blue-500 text-gray-200 hover:bg-green-700 rounded-md"
          >
            Post
          </button>
        </form>
      </div>
    </Modal>
  );
};

export default PostModal;
