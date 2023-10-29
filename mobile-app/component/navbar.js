import Link from "next/link";

export default function NavigationBar() {
  return (
    <nav className="bg-blue-400 p-4">
        <div className="border border-blue-300 p-4 rounded-lg">
            <div className="space-x-4">
                <Link href="/about">
                    <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full mt-4 transition duration-300 ease-in-out transform hover:scale-105">
                        About Us
                    </button>
                </Link>
                <Link href="/contacts">
                    <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full mt-4 transition duration-300 ease-in-out transform hover:scale-105">
                        Contacts
                    </button>
                </Link>
            </div>
        </div>
    </nav>
  )
}