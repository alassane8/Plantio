import Link from "next/link";
import NavigationBar from "../component/navbar";
import Header from '../component/header';
import Footer from '../component/footer';

export default function home() {

  return (
    
      <div>
      
    <NavigationBar />
      <Image src={profilePic} alt="" />
      <div className ="bg-purple-700 h-screen">
      <Header />
          <div className ="absolute inset-0 h-screen flex flex-col justify-center items-center">
            <div className ="border border-gray-300 p-4 rounded-lg">
              <p className ="text-gray-100 text-xs font-bold">Enter Username :</p>
              <UserInput />
              <p className ="text-gray-100 text-xs font-bold">Enter Password :</p>
              <UserInput />
            </div> 
            <Link href="/createAccount">
              <button className ="hover:bg-pink-400 text-white font-bold py-2 px-2 mt-4 rounded-full transition duration-500 ease-in-out transform hover:scale-105">
                login
              </button>
            </Link>
          </div>
      </div>
      </div>
    
  )
}