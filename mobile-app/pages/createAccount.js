import Link from "next/link";
import Image from 'next/image';
import profilePic from 'images/pdp.png';
import Header from '../component/header';
import UserInput from '../component/userInput';
import NavigationBar from "../component/navbar";

export default function createAccount() {
  return (
    <div className ="bg-gray-600 absolute inset-0 h-screen flex flex-col">
      <Link href="/home">
        <button className ="hover:bg-pink-400 text-white font-bold py-2 px-2 mt-4 rounded-full transition duration-500 ease-in-out transform hover:scale-105">
          home
        </button>
      </Link>
        <div className = "bg-gray-600 h-screen flex flex-col justify-center items-center">
          <h1 className="text-3xl font-extrabold text-gray-100 mb-4">Create Account</h1>
          <div className ="border border-gray-300 p-4 rounded-lg">
            <p className ="text-gray-100 text-s font-bold">Username :</p>
              <UserInput />
            <p className ="text-gray-100 text-s font-bold">Password :</p>
              <UserInput />
            <p className ="text-gray-100 text-s font-bold">Verify Password :</p>
              <UserInput />
            <p className ="text-gray-100 text-s font-bold">Enter Email :</p>
              <UserInput />
          </div> 
          <Link href="/home">
            <button className="hover:bg-pink-400 text-white font-bold py-2 px-2 mt-4 rounded-full transition duration-500 ease-in-out transform hover:scale-105">
              Create Account
            </button>
          </Link>
        </div>
    </div>
  )
}