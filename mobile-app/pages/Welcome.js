import Link from "next/link";
import Image from 'next/image';
import profilePic from 'images/pdp.png'

export default function mobileApp() {
  return (

    <div className ="bg-yellow-700 h-screen ">
    <Image src={profilePic} alt="" />
        <div className ="absolute inset-0 h-screen flex flex-col justify-center items-center">  
          <Link href="/CreateAccount">
            <button className ="hover:bg-pink-400 text-white font-bold py-2 px-2 mt-4 rounded-full transition duration-500 ease-in-out transform hover:scale-105">
              Create Account
            </button>
          </Link>
          <Link href="/login">
            <button className ="hover:bg-pink-400 text-white font-bold py-2 px-2 mt-4 rounded-full transition duration-500 ease-in-out transform hover:scale-105">
              Login
            </button>
          </Link>
        </div>
    </div>
  )
}