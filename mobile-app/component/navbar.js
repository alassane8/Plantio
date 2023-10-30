import Link from "next/link";

export default function NavigationBar() {
  return (
    <nav className="bg-gary-700 p-4">
        <div className="border border-blue-300 p-4 rounded-lg">
            <div className="space-x-4">
                <aside class="w-24 bg-gray-800 text-white p-4">
                    <ul class="mt-4 space-y-2">
                    <li>
                      <Link href="/createAccount">
                        <button className ="hover:bg-pink-400 text-white font-bold py-2 px-2 mt-4 rounded-full transition duration-500 ease-in-out transform hover:scale-105">
                          Create Account
                        </button>
                      </Link>
                    </li>
                    <li>
                      <Link href="/login">
                        <button className ="hover:bg-pink-400 text-white font-bold py-2 px-2 mt-4 rounded-full transition duration-500 ease-in-out transform hover:scale-105">
                          Login
                        </button>
                      </Link>
                    </li>
                    <li>
                      <Link href="/about">
                        <button className ="hover:bg-pink-400 text-white font-bold py-2 px-2 mt-4 rounded-full transition duration-500 ease-in-out transform hover:scale-105">
                          About us
                        </button>
                      </Link>
                    </li>
                    <li>
                      <Link href="/contacts">
                        <button className ="hover:bg-pink-400 text-white font-bold py-2 px-2 mt-4 rounded-full transition duration-500 ease-in-out transform hover:scale-105">
                          Contact us
                        </button>
                      </Link>
                    </li>
                  </ul>
                </aside>
            </div>
        </div>
    </nav>
  )
}