import Link from "next/link";
import Image from 'next/image';
import profilePic from 'images/pdp.png';
import Header from '../component/header';
import UserInput from '../component/userInput';
import NavigationBar from "../component/navbar";

export default function home() {

  return (
    <div className="bg-gray-600 h-screen flex flex-col">
      <NavigationBar />
      <div className ="bg-gray-600 h-screen">
        <Header />
      </div>
    </div>
  )
}