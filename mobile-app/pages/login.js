import Link from "next/link";
import Header from '../component/header';
import Image from 'next/image';
import profilePic from 'images/pdp.png';
import UserInput from '../component/userInput';

export default function login() {
  return (
    <div className ="bg-gray-600 absolute inset-0 h-screen flex flex-col">
      <Link href="/home">
        <button className ="hover:bg-pink-400 text-white font-bold py-2 px-2 mt-4 rounded-full transition duration-500 ease-in-out transform hover:scale-105">
          home
        </button>
      </Link>
      <div className ="bg-grey-600  h-screen flex flex-col justify-center items-center">
        <Image src={profilePic} alt="" />
        <div className ="border border-gray-300 p-4 rounded-lg">
          <p className ="text-gray-100 text-s font-bold">Enter Username :</p>
            <UserInput />
          <p className ="text-gray-100 text-s font-bold">Enter Password :</p>
            <UserInput />
        </div> 
        <Link href="/createAccount">
          <button className ="hover:bg-pink-400 text-white font-bold py-2 px-2 mt-4 rounded-full transition duration-500 ease-in-out transform hover:scale-105">
            login
          </button>
        </Link>
      </div>
  </div>
  )
}