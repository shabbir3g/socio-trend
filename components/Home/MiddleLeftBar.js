import axios from "axios";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import PostModal from "./PostModal";
import SinglePost from "./SinglePost";

const MiddleLeftBar = () => {
  const [userData, setUserData] = useState({});
  const [posts, setPosts] = useState([]);
  const user = useSelector((state) => state.states.user);

  useEffect(() => {
    const createPostModal = document.getElementById("create-post-modal");
    const postBtn = document.getElementById("post-modal");
    const closePostModalBtn = document.getElementById("close-post-modal");

    const togglePostModal = () => {
      createPostModal.classList.toggle("hidden");
      createPostModal.classList.toggle("flex");
    };
    postBtn?.addEventListener("click", togglePostModal);
    closePostModalBtn?.addEventListener("click", togglePostModal);
  }, []);

  useEffect(() => {
    fetch(`http://localhost:3000/api/user?email=${user?.email}`)
      .then((result) => result.json())
      .then((data) => setUserData(data));
  }, [user?.email]);

  useEffect(() => {
    axios.get(`http://localhost:3000/api/post`).then((data) => {
      setPosts(data?.data);
    });
  }, [user.email]);
  return (
    <div>
      {/* create post */}
      <div className="bg-white dark:bg-gray-800 p-5 rounded">
        <div className="mb-3">
          <a href="">
            <i className="fa-regular fa-pen-to-square p-2 bg-gray-200 rounded-full text-md text-blue-500"></i>{" "}
            Create post
          </a>
        </div>
        <textarea
          className="border-2 rounded w-full dark:bg-gray-800 p-2"
          onClick={() => console.log("click")}
          name=""
          id="post-modal"
          cols="30"
          rows="3"
          placeholder="Whats on your mind"
        />
        <br />
        <div>
          <div className="flex">
            <a href="#">
              <i className="fa-solid fa-video p-3"></i>Live Video
            </a>
            <a href="#">
              <i className="fa-regular fa-images p-3"></i> Photo/Video
            </a>
            <a href="#">
              <i className="fa-solid fa-camera p-3"></i> Feeling/Activity
            </a>
            <a href="#" className="ml-auto">
              <i className="fa-solid fa-ellipsis p-3 bg-gray-200 rounded-full"></i>
            </a>
          </div>
        </div>
      </div>
      <PostModal userData={userData} />
      {/* <div className="my-5 bg-white dark:bg-gray-800 p-5 rounded">
        <div className="flex">
          <div className="mr-3">
            <Image src="/user-8.png" width={45} height={45} alt="user" />
          </div>
          <div>
            <p className="text-md font-semibold">Surfiya Zakir</p>
            <span className=" text-sm">3 hour ago</span>
          </div>
          <div className="ml-auto">
            <a href="#" className="ml-auto">
              <i className="fa-solid fa-ellipsis p-3 bg-gray-200 rounded-full"></i>
            </a>
          </div>
        </div>
        <p className="my-3">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi nulla
          dolor, ornare at commodo non, feugiat non nisi. Phasellus faucibus
          mollis pharetra. Proin blandit ac massa sed rhoncus{" "}
          <a href="#">See more</a>
        </p>
        <div className="flex gap-4">
          <Image
            className="rounded-lg"
            src="/e-2.jpg"
            height="350"
            width="600"
            alt=""
          />
          <Image
            className="rounded-lg"
            src="/e-2.jpg"
            height="350"
            width="600"
            alt=""
          />
        </div>
        <br />
        <div className="flex">
          <a href="" className="mr-3">
            <i className="fa-solid fa-thumbs-up"></i>{" "}
            <i className="fa-solid fa-heart"></i> 2.8k like
          </a>
          <a href="" className="mr-3">
            <i className="fa-regular fa-comment"></i> 22 Comment
          </a>
          <a href="" className="mr-3 ml-auto">
            <i className="fa-solid fa-share-nodes"></i> Share
          </a>
        </div>
      </div>
      <div className="my-5 bg-white dark:bg-gray-800 p-5 rounded">
        <div className="flex">
          <div className="mr-3">
            <Image src="/user-8.png" width={45} height={45} alt="user" />
          </div>
          <div>
            <p className="text-md font-semibold">Surfiya Zakir</p>
            <span className=" text-sm">3 hour ago</span>
          </div>
          <div className="ml-auto">
            <a href="#" className="ml-auto">
              <i className="fa-solid fa-ellipsis p-3 bg-gray-200 rounded-full"></i>
            </a>
          </div>
        </div>
        <p className="my-3">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi nulla
          dolor, ornare at commodo non, feugiat non nisi. Phasellus faucibus
          mollis pharetra. Proin blandit ac massa sed rhoncus{" "}
          <a href="#">See more</a>
        </p>
        <div className="flex">
          <a href="" className="mr-3">
            <i className="fa-solid fa-thumbs-up"></i>{" "}
            <i className="fa-solid fa-heart"></i> 2.8k like
          </a>
          <a href="" className="mr-3">
            <i className="fa-regular fa-comment"></i> 22 Comment
          </a>
          <a href="" className="mr-3 ml-auto">
            <i className="fa-solid fa-share-nodes"></i> Share
          </a>
        </div>
      </div>
      <div className="my-5 bg-white dark:bg-gray-800 p-5 rounded">
        <div className="flex">
          <div className="mr-3">
            <Image src="/user-8.png" width={45} height={45} alt="user" />
          </div>
          <div>
            <div className="text-md font-semibold">Liton mia</div>
            <div className="text-sm">5 hour age</div>
          </div>
          <div className="ml-auto">
            <a href="#" className="ml-auto">
              <i className="fa-solid fa-ellipsis p-3 bg-gray-200 rounded-full"></i>
            </a>
          </div>
        </div>
        <p className="mt-3">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi nulla
          dolor, ornare at commodo non, feugiat non nisi. Phasellus faucibus
          mollis pharetra. Proin blandit ac massa sed rhoncus
          <button className="text-blue-600 ml-1">see more</button>
        </p>
        <div className="pt-3">
          <Image
            className="rounded-lg"
            src="/e-2.jpg"
            height="350"
            width="600"
            alt=""
          />
        </div>
        <div className="flex justify-between items-center">
          <div className="pt-3 flex items-center">
            <span className="p-1 pb-0 bg-gray-200 dark:bg-gray-600 rounded-full">
              <button>
                <Image
                  src="https://img.icons8.com/external-justicon-flat-justicon/64/000000/external-like-notifications-justicon-flat-justicon.png"
                  alt=""
                  height="25"
                  width="25"
                />
              </button>
            </span>
            <span className="p-1 pb-0 bg-gray-200 dark:bg-gray-600 rounded-full ml-1">
              <button>
                <Image
                  src="https://img.icons8.com/color/48/000000/like--v3.png"
                  alt=""
                  height="25"
                  width="25"
                />
              </button>
            </span>
            <span className="ml-3">2.8K Like</span>
            <div className="ml-5 ">
              <button className="items-center flex">
                <i className="fa-regular fa-comment text-xl"></i>
                <span className="ml-1">22 Comments</span>
              </button>
            </div>
          </div>
          <div>
            <button className="flex items-center">
              <i className="fa-solid fa-share text-xl"></i>
              <span className="ml-1">Share</span>
            </button>
          </div>
        </div>
      </div> */}
      {posts.map((post) => (
        <SinglePost key={post._id} post={post} />
      ))}
    </div>
  );
};

export default MiddleLeftBar;
