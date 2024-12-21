import React from 'react'

function Banner() {
  return (
    <>
    <div className="max-w-screen-2x1 container mx-auto md:px-6 px-6 flex  flex-col md:flex-row my-15 ">

        <div className=" order-2 md:order-1 w-full md:w-1/2  md:mt-32">
            <div className="space-y-12">
                <h1 className="text-5xl font-bold">Hello..,<br></br>Welcome here to learn something
                    <span className="text-pink-400"> new everyday..........!</span>
                </h1>
                <p className="text-2xl text-black-500">
                Immerse yourself in a world of endless stories. Our online bookstore is a haven for book lovers,
                 offering a curated selection of books to suit every taste. From thrilling mysteries to heartwarming romances, 
                 you'll find something to ignite your imagination.
                </p>
                <label className="input border rounded-md flex items-center gap-2">
                        <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 16 16"
                    fill="currentColor"
                    className="h-4 w-4 opacity-70">
                    <path
                    d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                    <path
                    d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
                </svg>
                <input type="text" className="grow  " placeholder="Email" />
                </label>
                <button className="text-black  text-2xl rounded-md hover:bg-slate-500 duration-400 cursor-pointer bg-pink-400 px-3 py-3"><b>Submit</b></button>

            </div>
        </div>

        <div className="order-1 w-full md:w-1/2 mt-32">
        
    <img className="w-full h-full ml-20" src="https://market-resized.envatousercontent.com/previews/files/322729203/preview.jpg?w=590&h=590&cf_fit=crop&crop=top&format=auto&q=85&s=edcf5ed8bee86d0b24e09e79fb70b7a8b6786219a6b2cb60a3b2e9c9f6f5856f" 
         alt=""  />

        </div>

    </div>
    </>
  )
}

export default Banner