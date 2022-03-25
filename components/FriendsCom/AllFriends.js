import React, { useEffect, useState } from 'react';
import SingleFrends from './SingleFrends';
import axios from 'axios';

const AllFrends = () => {
  // const [members, setMembers] = useState([]);
  const [searchText, setSearchText] = useState('');
  // const [searchMember, setSearchMember] = useState([]);

  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get('/api/user/allUsers').then(({ data }) => setUsers(data));
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    // setLoading(true);
    if (searchText !== '') {
      axios.get(`/api/user/allUsers?search=${searchText}`).then(({ data }) => {
        setUsers(data);
        console.log(data);
      });
      // setLoading(false);
    }
  };

  return (
    <div className=" pb-20">
      <div className="mx-8 md:mx-18 sm:mx-11 xs:mx-8 lg:mx-1 pt-5">
        <div className="bg-white dark:bg-black my-5 flex flex-col xs:flex-col sm:flex-row justify-between justify-items-center py-8 px-8 rounded-md">
          <div className="text-2xl font-bold pt-1.5 text-center mb-4 lg:mb-0 md:mb-0 sm:mb-0">
            {' '}
            Friends{' '}
          </div>

          <div className="flex justify-center justify-items-center">
            <div className=" bg-gray-100 w-72 h-12 rounded-lg relative">
              <form onSubmit={handleSubmit}>
                <input
                  // onChange={searchFiealdhandle}
                  type="text"
                  value={searchText}
                  onChange={(e) => setSearchText(e.target.value)}
                  placeholder="Search here."
                  className="w-full h-12 block rounded-lg pl-4 text-lg border dark:border-zinc-600 outline-0 bg-gray-100 dark:bg-zinc-900 dark:text-black"
                />
                <button
                  type="submit"
                  className="absolute right-0 top-0 w-16 h-full rounded-full text-xl "
                >
                  <i className="fa-solid fa-magnifying-glass dark:text-white text-gray-700"></i>{' '}
                </button>
              </form>
            </div>
            {/* <div className="text-center bg-gray-100 border dark:border-zinc-600 dark:bg-zinc-900 w-12 ml-4 rounded-lg">
              <h1 className="text-2xl pt-2.5 ">
                <i className="fa-solid fa-filter dark:text-white text-black "></i>
              </h1>
            </div> */}
          </div>
        </div>
        <div className="grid grid-cols-1 xs:grid-cols-12 sm:grid-cols-12 md:grid-cols-12 gap-3">
          {users &&
            users.map((user) => (
              <SingleFrends key={user.id} user={user}></SingleFrends>
            ))}
        </div>
      </div>
    </div>
  );
};

export default AllFrends;
