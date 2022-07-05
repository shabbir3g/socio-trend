import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { FiChevronRight } from 'react-icons/fi';
import Image from 'next/image';
import Link from 'next/link';
import UserListSkeleton from '../Loaders/UserListSkeleton';

const RightSideBar = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const fetchData = async () => {
      const res = await axios.get('/api/user/allUsers');
      setUsers(res.data);
      setLoading(false);
    };
    fetchData();
    // axios.get('/api/user/allUsers').then(({ data }) => setUsers(data));
  }, []);
  return (
    <div>
      <div className="bg-white dark:bg-black drop-shadow-sm p-3 rounded-lg">
        <p className="mb-3">You may know</p>
        <ul className="space-y-2">
          {loading && <UserListSkeleton />}
          {users.map((user) => (
            <Link href={`${user.userName}`} key={user._id} passHref>
              <li className="dark:hover:bg-zinc-900 hover:bg-gray-200 p-2 rounded-md">
                <span className="flex items-center cursor-pointer">
                  <Image
                    src={
                      user.photoURL ||
                      'http://uitheme.net/sociala/images/profile-4.png'
                    }
                    width="40"
                    height="40"
                    alt="user"
                    className="rounded-full"
                  />
                  <span className="ml-3 contact-users" title={user.displayName}>
                    {user.displayName}
                  </span>
                  <FiChevronRight className="ml-auto" />
                </span>
              </li>
            </Link>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default RightSideBar;
