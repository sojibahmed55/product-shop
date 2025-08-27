"use client"
import Link from "next/link"
import { useSession, signOut } from "next-auth/react"

export default function Navbar() {
  const { data: session } = useSession()

  return (
    <nav className="sticky top-0 z-50 bg-gradient-to-r from-gray-900 via-indigo-900 to-purple-900 text-white shadow-lg backdrop-blur-lg">
      <div className="max-w-[1700px] mx-auto flex justify-between items-center px-6 py-4">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <svg
            width="32"
            height="32"
            viewBox="0 0 24 24"
            fill="none"
            className="text-purple-400"
          >
            <circle cx="12" cy="12" r="10" fill="currentColor" />
            <text
              x="12"
              y="16"
              textAnchor="middle"
              fontSize="10"
              fill="#fff"
            >
              MS
            </text>
          </svg>
          <h1 className="text-2xl font-extrabold tracking-tight">MyShop</h1>
        </div>

        {/* Menu */}
        <ul className="flex gap-8 text-lg font-medium items-center">
          <li>
            <Link href="/" className="hover:text-purple-400 transition">
              Home
            </Link>
          </li>
          <li>
            <Link href="/products" className="hover:text-purple-400 transition">
              Products
            </Link>
          </li>
          <li>
            <Link href="/add-product" className="hover:text-purple-400 transition">
              Add Products
            </Link>
          </li>

          {/* Login link if not logged in */}
          {!session && (
            <li>
              <Link href="/login" className="hover:text-purple-400 transition">
                Login
              </Link>
            </li>
          )}

          {/* User info & Sign out if logged in */}
          {session && (
            <li className="flex items-center gap-3">
              {session.user?.image && (
                <img
                  src={session.user.image}
                  alt="avatar"
                  className="w-8 h-8 rounded-full border border-white"
                />
              )}
              <span className="font-semibold">
                {session.user?.name || session.user?.email}
              </span>
              <button
                onClick={() => signOut()}
                className="ml-2 px-4 py-1 bg-purple-600 rounded-xl text-white font-semibold hover:bg-purple-700 transition"
              >
                Sign out
              </button>
            </li>
          )}
        </ul>
      </div>
    </nav>
  )
}
