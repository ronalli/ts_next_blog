'use client'

import { usePost } from "@/store";
import { FormEventHandler, useState } from "react"


export default function PostSearch() {
	const [search, setSearch] = useState('');
	const getPostsBySearch = usePost(state => state.getPostsBySearch)


	const handleSubmit: FormEventHandler<HTMLFormElement> = async (event) => {
		event.preventDefault();
		await getPostsBySearch(search);
	}

	return (
		<form onSubmit={handleSubmit}>
			<input type="search" placeholder="search" value={search} onChange={(event) => setSearch(event.target.value)}/>
			<button type="submit">Search</button>
		</form>
	)
}
