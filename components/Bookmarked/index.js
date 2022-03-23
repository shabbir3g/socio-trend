import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { BsBookmarkX } from 'react-icons/bs';
import { useSelector } from 'react-redux';
import SinglePost from '../Home/SinglePost';
import Navigation from '../Share/Navigation';

const BookmarkedPosts = () => {
  const [controller, setController] = useState(false);
  const [isLike, setIsLike] = useState(false);
  const [deletePost, setDeletePost] = useState(false);
  const [bookmarkedPostsId, setBookmarkedPostsId] = useState([]);
  const [currentUser, setCurrentUser] = useState(null);
  const [bookmarkedPosts, setBookmarkedPosts] = useState([]);
  const { user } = useSelector((state) => state.states);

  useEffect(() => {
    axios.get(`/api/user?email=${user.email}`).then(({ data }) => {
      setCurrentUser(data);
      setBookmarkedPostsId(data.bookmark);
    });
  }, [user.email]);

  useEffect(() => {
    if (currentUser) {
      axios
        .get(`/api/user/allBookmarkPost?userId=${currentUser._id}`)
        .then(({ data }) => setBookmarkedPosts(data));
    }
  }, [currentUser, controller, isLike, deletePost]);

  return (
    <>
      <Navigation />
      <div className="max-w-3xl mx-auto">
        
        {bookmarkedPosts.filter((p) => p).length === 0 ? (
          <div className="px-3 h-full flex items-center justify-center py-10">
            <div className="relative col-span-4 block max-w-2xl w-full mx-auto border-2 border-gray-300 border-dashed rounded-lg p-12 text-center hover:border-gray-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
              <BsBookmarkX className="mx-auto h-12 w-12 dark:text-white text-black" />
              <span className="mt-2 block text-lg font-medium text-gray-900 dark:text-gray-50">
                You have no post bookmarked!
              </span>
            </div>
          </div>
        ) : (
          bookmarkedPosts
            .filter((post) => post)
            .map((post) => (
              <SinglePost
                key={post._id}
                isBookmarkPage
                isLike={isLike}
                setIsLike={setIsLike}
                post={post}
                setController={setController}
                bookmarkedPostsId={bookmarkedPostsId}
                userData={currentUser}
              />
            ))
        )}
      </div>
    </>
  );
};

export default BookmarkedPosts;
