'use client'
import Link from 'next/link'
import React, { useState } from 'react'
import { useRouter } from 'next/navigation'
import { axios } from 'axios'

export default function LoginPage() {
	const [user, setUser] = useState({
		password: '',
		email: '',
	})
	const onLogin = () => {}
	return (
		<div className="flex flex-col items-center justify-center min-h-screen py-2">
			<h1>SignUp</h1>
			<br />
			<hr />
			<label htmlFor="email">Email</label>
			<input
				className="p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600"
				id="email"
				type="text"
				value={user.email}
				onChange={(e) => setUser({ ...user, email: e.target.value })}
			/>
			<label htmlFor="password">Password</label>
			<input
				className="p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600"
				type="password"
				id="password"
				value={user.password}
				placeholder="password"
				onChange={(e) => setUser({ ...user, password: e.target.value })}
			/>
			<button
				onClick={onLogin}
				className="p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600"
			>
				Login Here
			</button>
			<Link href="/signup">Visit the SignIn Page</Link>
		</div>
	)
}
