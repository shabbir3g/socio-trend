
import React from 'react';
import SingleFrends from './SingleFrends';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFilter, faSearchDollar, faSearchPlus } from '@fortawesome/free-solid-svg-icons'


const filter = <FontAwesomeIcon icon={faFilter} />
const search = <FontAwesomeIcon icon={faSearchPlus} />
// const search = <FontAwesomeIcon icon="fa-solid fa-magnifying-glass" />

const friends = [
    {
        id: 1,
        name: "Omar Ali",
        userId:"@omarali234",
        img:"https://thumbs.dreamstime.com/b/handsome-man-hair-style-beard-beauty-face-portrait-fashion-male-model-black-hair-high-resolution-handsome-man-125031765.jpg",
        role:"ADD FRIEND"
    },
    {
        id: 2,
        name: "Bepari Prantosh",
        userId:"@prantosh234",
        img:"https://thumbs.dreamstime.com/b/handsome-man-hair-style-beard-beauty-face-portrait-fashion-male-model-black-hair-high-resolution-handsome-man-125031765.jpg",
        role:"FRIEND"
    },
    {
        id: 3,
        name: "Md. Mostafizur Rahman",
        userId:"@mostafizur234",
        img:"https://thumbs.dreamstime.com/b/handsome-man-hair-style-beard-beauty-face-portrait-fashion-male-model-black-hair-high-resolution-handsome-man-125031765.jpg",
        role:"ADD FRIEND"
    },
    {
        id: 4,
        name: "Opi Barua",
        userId:"@opi234",
        img:"https://thumbs.dreamstime.com/b/handsome-man-hair-style-beard-beauty-face-portrait-fashion-male-model-black-hair-high-resolution-handsome-man-125031765.jpg",
        role:"FRIEND"
    },
    {
        id: 5,
        name: "Parvez Islam Shuvo",
        userId:"@parvez234",
        img:"https://thumbs.dreamstime.com/b/handsome-man-hair-style-beard-beauty-face-portrait-fashion-male-model-black-hair-high-resolution-handsome-man-125031765.jpg",
        role:" ADD FRIEND"
    },
    {
        id: 6,
        name: "Saddaul Siam",
        userId:"@saddaul234",
        img:"https://thumbs.dreamstime.com/b/handsome-man-hair-style-beard-beauty-face-portrait-fashion-male-model-black-hair-high-resolution-handsome-man-125031765.jpg",
        role:"ADD FRIEND"
    },
    {
        id: 4,
        name: "Opi Barua",
        userId:"@opi234",
        img:"https://thumbs.dreamstime.com/b/handsome-man-hair-style-beard-beauty-face-portrait-fashion-male-model-black-hair-high-resolution-handsome-man-125031765.jpg",
        role:"FRIEND"
    },
    {
        id: 5,
        name: "Parvez Islam Shuvo",
        userId:"@parvez234",
        img:"https://thumbs.dreamstime.com/b/handsome-man-hair-style-beard-beauty-face-portrait-fashion-male-model-black-hair-high-resolution-handsome-man-125031765.jpg",
        role:" ADD FRIEND"
    },
    {
        id: 1,
        name: "Omar Ali",
        userId:"@omarali234",
        img:"https://thumbs.dreamstime.com/b/handsome-man-hair-style-beard-beauty-face-portrait-fashion-male-model-black-hair-high-resolution-handsome-man-125031765.jpg",
        role:"ADD FRIEND"
    },
    {
        id: 2,
        name: "Bepari Prantosh",
        userId:"@prantosh234",
        img:"https://thumbs.dreamstime.com/b/handsome-man-hair-style-beard-beauty-face-portrait-fashion-male-model-black-hair-high-resolution-handsome-man-125031765.jpg",
        role:"FRIEND"
    },
    {
        id: 3,
        name: "Md. Mostafizur Rahman",
        userId:"@mostafizur234",
        img:"https://thumbs.dreamstime.com/b/handsome-man-hair-style-beard-beauty-face-portrait-fashion-male-model-black-hair-high-resolution-handsome-man-125031765.jpg",
        role:"ADD FRIEND"
    },
]

const AllFrends = () => {
    const styleSearch = {

    }
    return (
        <div className='bg-slate-200 pb-20'>
            <div className="mx-8 md:mx-18 sm:mx-11 xs:mx-8 lg:mx-28 pt-5">
                <div className='bg-white border my-5 flex flex-row justify-between justify-items-center py-8 px-8 rounded-md'>
                    <div  className='text-2xl font-bold'> Friends  </div>
                    
                    <div className='flex justify-center justify-items-center'>
                        <div className=' bg-gray-100 w-72 h-12 rounded-lg relative'>
                        <form >
                            <input type="text" placeholder='Search here.' className='w-full h-12 block rounded-lg pl-4 text-lg border-0 outline-0 bg-gray-100' />
                            <button className='absolute right-0 top-0 w-16 h-full rounded-full text-xl '>{filter} </button>
                        </form>
                        </div>
                        {/* <input type="text" className='border bg-red-200' /> */}
                            {/* <i className="fa-solid fa-magnifying-glass"></i> */}
                        <div className='text-center bg-gray-100 w-12 ml-4 rounded-lg'>
                        <h1 className='text-xl pt-2.5'>{filter}</h1>
                        </div>
                    </div>
                </div>
                <div className="grid grid-cols-1 xs:grid-cols-12 sm:grid-cols-12 md:grid-cols-12 gap-3">
                {
                        friends.map(friend => <SingleFrends
                            friend={friend}
                            key={friend.id}

                        ></SingleFrends>)
                    }
                </div>
            </div>
        </div>
    );
};

export default AllFrends;