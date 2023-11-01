'use client'
import Link from 'next/link';
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import axios from 'axios';

export default function SignupPage() {
	const [user, setUser] = useState({
		email: '',
		password: '',
		username: '',
	})
	const onSignup = () => {}
	return (
		<div className="flex flex-col items-center justify-center min-h-screen py-2">
			<h1>SignUp</h1>
			<br />
			<hr />
			<label htmlFor="username">Username</label>
			<input
				className="p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600"
				id="username"
				type="text"
				value={user.username}
				onChange={(e) => setUser({ ...user, username: e.target.value })}
				placeholder="username"
			/>
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
				onClick={onSignup}
				className="p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600"
			>
				SignUp Here
			</button>
			<Link href="/login">Visit the Login Page</Link>
		</div>
	)
}
