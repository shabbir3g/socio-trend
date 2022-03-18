import { useEffect, useRef, useState } from "react";
import autosize from "autosize";
import { BsX } from "react-icons/bs";
import { BiMessageSquareEdit } from "react-icons/bi";
import { MdOutlinePhotoSizeSelectActual } from "react-icons/md";
import Image from "next/image";
import { useForm } from "react-hook-form";
import axios from "axios";
import { toast } from "react-toastify";

const CreatePost = ({ user, setNewPost }) => {
  const [postImages, setPostImages] = useState([]);
  const [postImagePreview, setPostImagePreview] = useState([]);
  const [postContents, setPostContents] = useState("");

  const textareaRef = useRef(null);
  const filePickerRef = useRef(null);

  useEffect(() => {
    autosize(textareaRef.current);
  }, []);

  const { register, handleSubmit } = useForm();
  const onSubmit = async (data) => {
    toast("Posting....");
    data.userId = user._id;
    data.displayName = user.displayName;
    data.email = user.email;
    data.photoURL = user.photoURL;
    data.userName = user.userName;

    const formData = new FormData();
    formData.append("upload_preset", "my-uploads");

    if (postImages) {
      formData.append("file", postImages);
      await fetch(`https://api.cloudinary.com/v1_1/dtkl4ic8s/image/upload`, {
        method: "POST",
        body: formData,
      })
        .then((res) => res.json())
        .then((result) => (data.img = result.url));
    }

    if (!data.img && !data.postContent) return;

    const response = await axios.post(`/api/post`, {
      data,
    });
    if (response.status === 200) {
      setNewPost(true);
      toast("Your Post has been successfully created");
      setPostImages([]);
      setPostImagePreview([]);
      setPostContents("");
    }
  };

  return (
    <div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="sm:rounded-lg bg-white dark:bg-black overflow-hidden"
      >
        <div className="px-2 sm:px-4 pb-2 pt-5 sm:pb-6">
          <div className="flex gap-1 items-start">
            <div className="flex-shrink-0 relative mx-auto sm:h-14 sm:w-14 h-12 w-12 rounded-full overflow-hidden bg-gray-300 dark:bg-zinc-800">
              {user?.photoURL && (
                <Image
                  src={user.photoURL}
                  alt={user.displayName}
                  layout="fill"
                  objectFit="cover"
                />
              )}
            </div>
            <div className="flex flex-col w-full space-y-2">
              <div className="pl-3">
                <h1 className="font-medium sm:text-lg leading-6">
                  {user?.displayName}
                </h1>
              </div>
              <textarea
                name="postContent"
                {...register("postContent")}
                id="postContent"
                value={postContents}
                onChange={(e) => setPostContents(e.target.value)}
                placeholder="What's on your mind?"
                rows={2}
                className="w-full placeholder:text-sm dark:text-zinc-200 resize-none max-h-40 focus:outline-none focus:border-none focus:ring-0 bg-transparent border-none"
              ></textarea>
            </div>
          </div>
        </div>
        {/* image preview */}
        {postImagePreview.length > 0 && (
          <div className="relative w-full">
            {/* <CreatePostImageGrid images={postImages} /> */}
            <div className="sm:p-2">
              <div className="relative h-72 w-full sm:rounded-lg overflow-hidden border border-gray-300 dark:border-zinc-600">
                <Image
                  src={postImagePreview[0]}
                  alt="image01"
                  layout="fill"
                  objectFit="cover"
                />
              </div>
            </div>
            <button
              className="absolute top-3 right-1 mr-2.5"
              type="button"
              onClick={() => {
                setPostImagePreview([]);
                setPostImages([]);
              }}
            >
              <BsX className="h-5 w-5 box-content p-2 rounded-full bg-white border dark:border-zinc-600 dark:bg-zinc-700" />
            </button>
          </div>
        )}
        {/* buttons */}
        <div className="border m-2 rounded-lg overflow-hidden border-gray-200 dark:border-zinc-700 bg-gray-50 dark:bg-black grid divide-gray-200 dark:divide-zinc-700 grid-cols-2 divide-y-0 divide-x">
          <button
            type="button"
            onClick={() => filePickerRef.current.click()}
            className="py-2.5 text-sm font-medium flex gap-2 items-center justify-center hover:bg-gray-100 dark:hover:bg-zinc-800"
          >
            <MdOutlinePhotoSizeSelectActual className="text-green-400 w-7 h-7" />
            <span className="hidden sm:block text-gray-600 dark:text-zinc-200">
              Image
            </span>
            <input
              ref={filePickerRef}
              accept="image/*"
              type="file"
              name="file"
              id="file"
              onChange={(e) => {
                const files = e.target.files;
                const images = [];
                for (let i = 0; i < files.length; i++) {
                  images.push(URL.createObjectURL(files[i]));
                }
                setPostImagePreview([...postImages, ...images]);
                setPostImages(e.target.files[0]);
              }}
              className="hidden"
            />
          </button>
          <button
            disabled={!postContents && !postImagePreview.length}
            type="submit"
            className="py-2.5 disabled:cursor-not-allowed disabled:hover:bg-transparent disabled:dark:hover:bg-transparent text-sm font-medium flex gap-2 items-center justify-center hover:bg-gray-100 dark:hover:bg-zinc-800"
          >
            <BiMessageSquareEdit className="text-red-500 w-7 h-7" />
            <span className="hidden sm:block text-gray-600 dark:text-zinc-200">
              Post
            </span>
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreatePost;
