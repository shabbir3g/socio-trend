import React from 'react';

const Posts = () => {
  return (
    <section className="py-6 px-4 sm:px-6 lg:py-10 lg:px-8">
      <div className="pb-5 flex items-center ">
        <h3 className="text-4xl leading-6 font-medium text-slate-100">Posts</h3>
        <div className="ml-4">
          <button
            type="button"
            className="inline-flex font-bold items-center px-2 py-[2px] border border-transparent rounded-md text-sm text-teal-900 bg-teal-200 hover:bg-teal-300 focus:outline-none focus:ring-1 focus:ring-offset-2 focus:ring-offset-slate-900 focus:ring-teal-500"
          >
            Add new
          </button>
        </div>
      </div>
      {/* nav */}
      <div className="block no-scrollbar overflow-x-scroll">
        <nav className="pl-2 flex space-x-6 border-b border-slate-800">
          <a
            href="#"
            className="border-transparent text-slate-400 hover:text-slate-200 hover:border-slate-200 whitespace-nowrap flex py-4 px-1 border-b-2 font-medium text-sm"
          >
            All
            <span className="bg-slate-800 text-teal-500 ml-2 py-0.5 px-2.5 rounded-full text-xs font-medium">
              52
            </span>
          </a>

          <a
            href="#"
            className="border-teal-400 text-teal-400 whitespace-nowrap flex py-4 px-1 border-b-2 font-medium text-sm"
            aria-current="page"
          >
            Published
            <span className="bg-slate-800 text-teal-500 ml-2 py-0.5 px-2.5 rounded-full text-xs font-medium">
              4
            </span>
          </a>
          <a
            href="#"
            className="border-transparent text-slate-400 hover:text-slate-200 hover:border-slate-200 whitespace-nowrap flex py-4 px-1 border-b-2 font-medium text-sm"
          >
            Pending
            <span className="bg-slate-800 text-teal-500 ml-2 py-0.5 px-2.5 rounded-full text-xs font-medium">
              52
            </span>
          </a>
        </nav>
      </div>
      {/* List of posts */}
      <div className="flex flex-col py-6">
        <div className="overflow-x-auto teal-scrollbar">
          <div className="py-2 align-middle inline-block min-w-full">
            <div className="shadow overflow-hidden border border-slate-600 rounded-lg">
              <table className="min-w-full divide-y divide-slate-600">
                <thead className="bg-slate-900">
                  <tr>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-teal-500 uppercase tracking-wider"
                    >
                      Title
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-teal-500 uppercase tracking-wider"
                    >
                      Author
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-teal-500 uppercase tracking-wider"
                    >
                      Status
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-teal-500 uppercase tracking-wider"
                    >
                      Date
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-slate-800 divide-y divide-slate-600">
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <div>
                          <div className="text-sm font-medium w-72 truncate text-slate-200">
                            Regional Paradigm Technician Paradigm Technician
                          </div>
                          <div className="text-sm pt-3 text-teal-400 flex gap-3 items-center divide-x divide-slate-700">
                            <button className="hover:underline">Edit</button>
                            <button className="pl-2 hover:underline">
                              Delete
                            </button>
                            <button className="pl-2 hover:underline">
                              View
                            </button>
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-slate-200">Jane Cooper</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                        Approved
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      04 Feb, 2022
                    </td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <div>
                          <div className="text-sm font-medium w-72 truncate text-slate-200">
                            Regional Paradigm Technician Paradigm Technician
                          </div>
                          <div className="text-sm pt-3 text-teal-400 flex gap-3 items-center divide-x divide-slate-700">
                            <button className="hover:underline">Edit</button>
                            <button className="pl-2 hover:underline">
                              Delete
                            </button>
                            <button className="pl-2 hover:underline">
                              View
                            </button>
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-slate-200">
                        Mostofa Nobi tanveer
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                        Approved
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      04 Feb, 2022
                    </td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <div>
                          <div className="text-sm font-medium w-72 truncate text-slate-200">
                            Regional Paradigm Technician Paradigm Technician
                          </div>
                          <div className="text-sm pt-3 text-teal-400 flex gap-3 items-center divide-x divide-slate-700">
                            <button className="hover:underline">Edit</button>
                            <button className="pl-2 hover:underline">
                              Delete
                            </button>
                            <button className="pl-2 hover:underline">
                              View
                            </button>
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-slate-200">Jane Cooper</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                        Approved
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      04 Feb, 2022
                    </td>
                  </tr>

                  {/* <!-- More people... --> */}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Posts;
