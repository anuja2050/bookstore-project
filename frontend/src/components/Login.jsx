// import React from 'react'
// import { Link } from 'react-router-dom'
// import { useForm } from "react-hook-form";

// function Login() {
//     const { register,
//          handleSubmit,
//            formState: { errors } } = useForm();
//   const onSubmit = data => console.log(data);
//   return (
//     <>
//     <div>
      
//                 <dialog id="my_modal_3" className="modal">
//                 <div className="modal-box bg-blue-300">
//                     <form onSubmit={handleSubmit(onSubmit)} method="dialog">
//                     {/* if there is a button in form, it will close the modal */}
//                     <Link to="/" className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2 " 
//                      onClick={() => document.getElementById("my_modal_3").close()}
//                      >✕</Link>
//                     </form>
//                     <h3 className="font-bold  text-center text-yellow-800 text-2xl">Login</h3>
//                     <div className=' mt-7 space-y-3 ml-10'>
//                         <span className='text-pink-800 font-semibold'>Email</span>
//                         <br/>
//                         <input  type="email" placeholder='enter your Email' className='w-80 h-10 px-3 py-1 border rounded-md outline-none bg-pink-100 ' {...register("email", { required: true })}/>
//                     </div>

//                     <div className=' mt-7 space-y-3 ml-10'>
//                         <span className='text-pink-800 font-semibold'>Password</span>
//                         <br/>
//                         <input type="password" placeholder='enter your password' className='w-80 h-10 px-3 py-1 border rounded-md outline-none bg-pink-100  ' {...register("password", { required: true })}/>
                        
//                     </div>
                        
//                     <div className='flex justify-around mt-10'>
//                     <button className='font-bold bg-black p-3 text-xl hover:text-white hover:bg-pink-800 rounded-md cursor-pointer  text-pink-300'>login</button>
//                     <p className='text-xl mt-2 font-semibold'>Don't have account ?<Link to='/signup' className='text-pink-500 underline cursor-pointer'>Sign Up</Link></p>
//                     </div>
//                 </div>
//                 </dialog>

//         </div>
//         </>
//   )
// }

// export default Login




import React from 'react'
import { Link } from 'react-router-dom'
import { useForm } from "react-hook-form";

function Login() {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);

    return (
        <>
        <div>
            <dialog id="my_modal_3" className="modal">
                <div className="modal-box bg-blue-300">
                    <form onSubmit={handleSubmit(onSubmit)} method="dialog">
                        {/* Close button */}
                        <Link 
                            to="/" 
                            className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2" 
                            onClick={() => document.getElementById("my_modal_3").close()}
                        >✕</Link>

                        <h3 className="font-bold text-center text-yellow-800 text-2xl">Login</h3>

                        {/* Email Field */}
                        <div className="mt-7 space-y-3 ml-10">
                            <span className="text-pink-800 font-semibold">Email</span>
                            <br />
                            <input 
                                type="email" 
                                placeholder="enter your Email" 
                                className="w-80 h-10 px-3 py-1 border rounded-md outline-none bg-pink-100" 
                                {...register("email", { required: true })}
                            />
                            {errors.email && <p className="text-red-500">Email is required</p>}
                        </div>

                        {/* Password Field */}
                        <div className="mt-7 space-y-3 ml-10">
                            <span className="text-pink-800 font-semibold">Password</span>
                            <br />
                            <input 
                                type="password" 
                                placeholder="enter your password" 
                                className="w-80 h-10 px-3 py-1 border rounded-md outline-none bg-pink-100" 
                                {...register("password", { required: true })}
                            />
                            {errors.password && <p className="text-red-500">Password is required</p>}
                        </div>

                        {/* Login Button and Signup Link */}
                        <div className="flex justify-around mt-10">
                            <button 
                                type="submit" 
                                className="font-bold bg-black p-3 text-xl hover:text-white hover:bg-pink-800 rounded-md cursor-pointer text-pink-300"
                            >
                                Login
                            </button>
                            <p className="text-xl mt-2 font-semibold">
                                Don't have an account? 
                                <Link to="/signup" className="text-pink-500 underline cursor-pointer"> Sign Up</Link>
                            </p>
                        </div>
                    </form>
                </div>
            </dialog>
        </div>
        </>
    );
}

export default Login;
