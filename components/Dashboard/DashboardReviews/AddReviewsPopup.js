import React from 'react';
import { BsX } from 'react-icons/bs';

const AddReviewsPopup = ({ closeNewReviewsPopup, isNewReviewsPopupOpen }) => {
  return (
    <div
      className={`${
        !isNewReviewsPopupOpen && 'pointer-events-none'
      } fixed z-10 inset-0 overflow-y-auto`}
    >
      <div className="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
        <div
          onClick={closeNewReviewsPopup}
          className={`${
            isNewReviewsPopupOpen
              ? 'opacity-100'
              : 'opacity-0 pointer-events-none'
          } fixed inset-0 bg-gray-500 transition-opacity bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-30`}
        ></div>

        <span
          className="hidden sm:inline-block sm:align-middle sm:h-screen"
          aria-hidden="true"
        >
          &#8203;
        </span>
        <div
          className={`${
            isNewReviewsPopupOpen
              ? 'opacity-100 translate-y-0 scale-100'
              : 'opacity-0 translate-y-6 scale-70'
          } ease-out duration-300 inline-block align-bottom rounded-lg text-left overflow-hidden transform transition-all sm:my-8 sm:align-middle max-w-md w-full`}
        >
          <div className="flex flex-col justify-center py-12 px-6 lg:px-8">
            <div className="bg-slate-900 space-y-4 pt-4 pb-8 shadow rounded-xl border border-slate-600 px-6">
              <div className="flex items-center justify-between">
                <h3 className="text-xl leading-9 text-white sm:leading-10">
                    Add Review
                </h3>
              <button onClick={closeNewReviewsPopup} className="block ml-auto">
                <BsX className="text-white h-8 w-8 ml-auto" />
              </button>
              </div>
              <form className="space-y-6" action="#" method="POST">
                {/* Rating */}
                <div className="col-span-6 sm:col-span-3">
                  <label
                    htmlFor="rating"
                    className="block text-sm font-medium text-slate-200"
                  >
                    Rating<span className="text-red-500">*</span>
                  </label>
                  <select
                    required
                    id="rating"
                    name="rating"
                    className="bg-slate-800 mt-1 text-slate-200 block w-full py-2 px-3 border border-slate-700 rounded-md shadow-sm focus:outline-none focus:ring-slate-300 focus:border-slate-300 sm:text-sm"
                  >
                    <option value="">Select Rating</option>
                    {Array.from(Array(5).keys()).map((item, index) => (
                      <option value={item + 1} key={index}>
                        {item + 1}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label
                    htmlFor="review"
                    className="block text-sm font-medium text-slate-200"
                  >
                    Review<span className="text-red-500">*</span>
                  </label>
                  <div className="mt-1">
                    <textarea
                      className="appearance-none text-slate-200 bg-slate-800 block w-full px-3 py-2 border border-slate-700 rounded-md shadow-sm placeholder-slate-200 focus:outline-none focus:ring-slate-300 focus:border-slate-300 sm:text-sm"
                      id="review"
                      name="review"
                      required
                      placeholder="Your review"
                      rows="3"
                    ></textarea>
                  </div>
                </div>

                <div>
                  <button
                    type="submit"
                    className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-md font-medium text-black bg-teal-400 hover:bg-teal-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-slate-900 focus:ring-teal-500"
                  >
                    Send
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddReviewsPopup;
