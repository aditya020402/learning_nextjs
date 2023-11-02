'use client'
import Link from 'next/link'
import React, { useState,useEffect } from 'react'
import { useRouter } from 'next/navigation'
import axios from 'axios';
import {toast} from "react-hot-toast";

export default function LoginPage() {
	const router = useRouter();

	const [user, setUser] = useState({
		password: '',
		email: '',
	})

	const [buttonDisabled,setButtonDisabled] = useState(false);
	const [loading,setLoading] = useState(false);




	const onLogin = async () => {
		try{
			setLoading(true);
			const response = await axios.post("/api/users/login",user);
			console.log("login success",response.data);
			toast.success("Login success");
			router.push("/profile");
		}
		catch(error:any){
			console.log("login failed",error.message);
			toast.error(error.message);
		}
		finally{
			setLoading(false);
		}
	}	


	useEffect(()=>{
		if(user.email.length>0 && user.password.length>0){
			setButtonDisabled(false);
		}
		else{
			setButtonDisabled(true);
		}
	},[user])

	return (
		<div className="flex flex-col items-center justify-center min-h-screen py-2">
			<h1>{loading ? 'Loading' : 'Login Page'}</h1>
			<br />
			<hr />
			<label htmlFor="email">Email</label>
			<input
				className="text-black p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600"
				id="email"
				type="text"
				value={user.email}
				placeholder="email"
				onChange={(e) => setUser({ ...user, email: e.target.value })}
			/>
			<label htmlFor="password">Password</label>
			<input
				className="text-black p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600"
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
				{buttonDisabled ? 'No Login' : 'Login Here'}
			</button>
			<Link href="/signup">Visit the SignIn Page</Link>
		</div>
	)
}
