import React, { useState } from 'react'
import gif from "../assets/Animation.json"
import Lottie from "lottie-react"
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const MainContent = () => {

    const categories = [
        {
            id: 1,
            categoryName: 'Breakfast',
            image: 'https://images.pexels.com/photos/257816/pexels-photo-257816.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        },
        {
            id: 2,
            categoryName: 'Lunch',
            image: 'https://images.pexels.com/photos/257816/pexels-photo-257816.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        },
        {
            id: 3,
            categoryName: 'Dinner',
            image: 'https://images.pexels.com/photos/257816/pexels-photo-257816.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        },
        {
            id: 4,
            categoryName: 'Snacks',
            image: 'https://images.pexels.com/photos/257816/pexels-photo-257816.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        }
    ];

    const [selectCategory , setSelectCategory] = useState(1)

    return (
        <>
            <div className='md:flex justify-center items-center'>
                <div className=' md:w-[50%] w-full' >
                    <h1 className=' text-6xl font-bold text-gray-800 leading-tight'> Your Favourite Food <br /> Delivered Hot & Fresh
                    </h1>
                    <p className=' text-gray-500 text-lg'>Healthy switcher chefs do all the prep work, like peeling, chopping & mainating, so you can cook a fresh meal.
                    </p>
                    <button className='mt-8 bg-orange-500 text-white px-8 py-3 rounded-full  text-lg shadow-lg font-semibold '>   Order Now <ArrowForwardIcon/> </button>
                </div>

                <div className='md:w-[40%] w-full'>
                    <Lottie animationData={gif} loop={true} />
                </div>
            </div>


            <div className='py-10'>
                <h2 className=' text-2xl text-center font-bold text-gray-800 mb-4 '>Meal Categories</h2>
                <div className=' space-x-4 flex justify-center items-center'>
                    {categories.map((category, index) => (
                         <div className='text-center cursor-pointer' key={index} onClick={()=> setSelectCategory(category.id) } >
                            <div className={`h-32 w-32 rounded-full overflow-hidden
                                     ${selectCategory == category.id 
                                        ? " border-8 border-orange-500"
                                        : " bg-white border-8  border-gray-100"
                                      }
                                `}> 
                                <img className=' object-cover w-full h-full' src={category.image} />
                            </div>
                            <span className=' text-sm font-semibold  text-gray-800'>{category.categoryName}</span>
                        </div>
                    ))
                    }
                </div>
            </div>

        

        </>
    )
}

export default MainContent
