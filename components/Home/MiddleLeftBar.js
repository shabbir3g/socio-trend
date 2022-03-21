import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import CreatePost from "./CreatePost";
import SinglePost from "./SinglePost";

const MiddleLeftBar = () => {
  const [userData, setUserData] = useState({});
  const [posts, setPosts] = useState([]);
  const [isLike, setIsLike] = useState(false);
  const [deletePost, setDeletePost] = useState(false);
  const [newPost, setNewPost] = useState(false);
  const user = useSelector((state) => state.states.user);

  useEffect(() => {
    axios.get(`/api/user?email=${user?.email}`).then((data) => {
      setUserData(data?.data);
    });
  }, [user?.email]);

  useEffect(() => {
    axios.get(`/api/post`).then((data) => {
      setPosts(data?.data);
      setDeletePost(false);
      setNewPost(false);
    });
  }, [user?.email, isLike, deletePost, newPost]);

  const shuffle = (array) => {
    return array.sort(() => 0.5 - Math.random());
  };

  const postShuffle = (array, first) => {
    if (first) {
      const newArray = shuffle(array).filter((element) => element !== first);
      return [first, ...newArray];
    }
    return shuffle(array);
  };

  return (
    <div>
      <CreatePost user={userData} setNewPost={setNewPost} />
      {posts
        .map((post) => (
          <SinglePost
            key={post._id}
            post={post}
            isLike={isLike}
            setIsLike={setIsLike}
            deletePost={deletePost}
            setDeletePost={setDeletePost}
            userData={userData}
          />
        ))
        .reverse()}
    </div>
  );
};

export default MiddleLeftBar;
