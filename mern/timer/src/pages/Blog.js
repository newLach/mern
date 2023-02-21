import React, {useState}from 'react'
import Button from 'react-bootstrap/Button';
import {Navigation} from '../components/Navigation';
import {useNavigate } from "react-router";



export const Blog = () =>{


	const [form, setForm] =	useState({ text: "" });

	const navigate =	useNavigate();

	const updateForm =	(value) =>{

		return setForm((prev) => {
			return {...prev, ...value};
		});
	}

	async  function onSubmit(e){
		e.preventDefault();

		const newBlog =	{...form}

		await fetch("http://localhost:3000/record/add", {
			method: "POST",
			headers: {
				"Content-Type":"application",
			},
			body: JSON.stringify(newBlog),
		})
	.catch(error => {
		window.alert(error);
		return;
	});

	setForm({ text: "" })
navigate("/")





	}



	return(
		<div>
		<Navigation/>
		<Button 
		onClick={() => console.log('click')}>Get Blogs
		</Button>
		<form 		onSubmit={onSubmit}>
		<input placeholder={"write a Blog"}
		value={form.text}
		onChange={(e)=>{updateForm({ text: e.target.value })}}/>
		<input type="submit"/>
		</form>
		<Button>Send Blog</Button>

		</div>)

}
