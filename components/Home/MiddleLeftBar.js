import React from "react";

const MiddleLeftBar = () => {
  return (
    <div>
      <div className="bg-white p-5 rounded">
        <div className="mb-3">
          <a href=""><i className="fa-regular fa-pen-to-square p-3"></i> Create post</a>
        </div>
        <textarea
          className="border-2 rounded w-full"
          name=""
          id=""
          cols="30"
          rows="3"
          placeholder="Whats on your mind"
        ></textarea>
        <br />
        <div>
          <div className="flex">
            <a href="#"><i className="fa-solid fa-video p-3"></i>Live Video</a>
            <a href="#"><i className="fa-regular fa-images p-3"></i> Photo/Video</a>
            <a href="#"><i className="fa-solid fa-camera p-3"></i> Feeling/Activity</a>
            <a href="#" className="ml-auto"><i className="fa-solid fa-ellipsis p-3 bg-gray-200 rounded-full"></i></a>
          </div>
        </div>
      </div>
      <div className="my-5 bg-white p-5 rounded">
        <div className="flex">
          <img className="mr-3 w-12" src="/user-8.png" alt="user" />
          <div>
            <p className="font-medium">Surfiya Zakir</p>
            <span className="text-gray-500 font-normal text-sm">
            3 hour ago
            </span>
          </div>
          <div className="ml-auto">
            <a href="#" className="ml-auto"><i className="fa-solid fa-ellipsis p-3 bg-gray-200 rounded-full"></i></a>
          </div>
        </div>
        <p className="my-3">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi nulla
          dolor, ornare at commodo non, feugiat non nisi. Phasellus faucibus
          mollis pharetra. Proin blandit ac massa sed rhoncus{" "}
          <a href="#">See more</a>
        </p>
        {/* <Image src="/e-2.jpg" width="200" height="130" alt=""></Image> */}
        <div className="flex gap-4">
          <img className="w-5/12" src="/e-2.jpg" alt="image" />
          <img className="w-5/12" src="/e-2.jpg" alt="image" />
        </div>
        <br />
        <div className="flex">
          <a href="" className="mr-3"><i className="fa-solid fa-thumbs-up"></i>2.8k like</a>
          <a href="" className="mr-3"><i className="fa-regular fa-comment"></i>22 Comment</a>
          <a href="" className="mr-3"><i className="fa-thin fa-circle-heart"></i> Comment</a>
          <a href="" className="mr-3 ml-auto"><i className="fa-solid fa-share-nodes"></i> Share</a>
        </div>
      </div>
      <div className="my-5 bg-white p-5 rounded">
        <div className="flex">
          <div className="mr-3">
            <img className="mr-3 w-12" src="/user-8.png" alt="user" />
          </div>
          <div>
            <div>Liton mia</div>
            <div>5 hour age</div>
          </div>
          <div className="ml-auto">
          <a href="#" className="ml-auto"><i className="fa-solid fa-ellipsis p-3 bg-gray-200 rounded-full"></i></a>
          </div>
        </div>
        <p className="my-3">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi nulla
          dolor, ornare at commodo non, feugiat non nisi. Phasellus faucibus
          mollis pharetra. Proin blandit ac massa sed rhoncus{" "}
          <a href="#">See more</a>
        </p>
        <br />
        <div className="flex">
          <div className="mr-3">
            <img className="mr-3 w-12" src="/user-8.png" alt="user" /> Like
          </div>
          <div>
            <img className="mr-3 w-12" src="/user-8.png" alt="user" /> Comment
          </div>
          <div className="ml-auto">
            <img className="mr-3 w-12" src="/user-8.png" alt="user" /> Share
          </div>
        </div>
      </div>
      <div className="my-5 bg-white p-5 rounded">
        <div className="flex">
          <div className="mr-3">
            <img className="mr-3 w-12" src="/user-8.png" alt="user" />
          </div>
          <div>
            <div>Liton mia</div>
            <div>5 hour age</div>
          </div>
          <div className="ml-auto">
          <a href="#" className="ml-auto"><i className="fa-solid fa-ellipsis p-3 bg-gray-200 rounded-full"></i></a>
          </div>
        </div>
        <p className="my-3">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi nulla
          dolor, ornare at commodo non, feugiat non nisi. Phasellus faucibus
          mollis pharetra. Proin blandit ac massa sed rhoncus{" "}
          <a href="#">See more</a>
        </p>
        {/* <Image src="/e-2.jpg" width="500" height="300" alt=""></Image> */}
        <img className="w-screen" src="/e-2.jpg" alt="image" />
        <br />
        <div className="flex">
          <div className="mr-3">
            <img className="mr-3 w-12" src="/user-8.png" alt="user" /> Like
          </div>
          <div>
            <img className="mr-3 w-12" src="/user-8.png" alt="user" /> Comment
          </div>
          <div className="ml-auto">
            <img className="mr-3 w-12" src="/user-8.png" alt="user" /> Share
          </div>
        </div>
      </div>
    </div>
  );
};

export default MiddleLeftBar;
