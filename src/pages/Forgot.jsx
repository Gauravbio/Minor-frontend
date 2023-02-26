import React, { useEffect, useState } from 'react'
import { useAlert } from 'react-alert';
import { useDispatch, useSelector } from 'react-redux'
import { forgotPassword } from '../actions/user';
import logo from '../assets/logo.jpeg'
import Loader from '../components/Loader';

const Forgot = () => {
  const dispatch=useDispatch();
  const [email, setEmail] = useState("")
  const {error,message}=useSelector(state => state.user)
  const alert=useAlert();

  useEffect(()=> {
    if(error){
      alert.error(error)
      dispatch({type:"CLEAR_ERROR"})
    }
    if(message) {
      alert.success(message)
      dispatch({type:"CLEAR_MESSAGE"})
    }
  },[dispatch,error,message,alert])

  const submitHandler=(e)=> {
    e.preventDefault()
    dispatch(forgotPassword(email));
  }
  const {loading}=useSelector(state=> state.user)

  return (
    loading ? <Loader className="h-screen" /> :
    <div>
      <section className="bg-gray-50 dark:bg-gray-900">
  <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
      <div className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
          <img className="w-8 h-8 mr-2" src={logo} alt="logo" />
          Flowbite    
      </div>
      <div className="w-full p-6 bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md dark:bg-gray-800 dark:border-gray-700 sm:p-8">
          <h2 className="mb-1 text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
              Change Password
          </h2>
          <form className="mt-4 space-y-4 lg:mt-5 md:space-y-5" onSubmit={submitHandler}>
              <div>
                  <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                  <input type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com" required="" onChange={(e)=> setEmail(e.target.value)} />
              </div>
              
              
              <button type="submit" className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Verify</button>
          </form>
      </div>
  </div>
</section>
    </div>
  )
}

export default Forgot