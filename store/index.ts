import { getAllPosts, getPostsBySearch } from "@/services/getPosts";
import { create } from "zustand";

type UsePosts = {
	posts: any[],
	loading: boolean,
	getAllPost: () => Promise<void>,
	getPostsBySearch: (search: string) => Promise<void>
}

export const usePost = create<UsePosts>()((set) => ({
	posts: [],
	loading: false,
	getAllPost: async () => {
		set({loading: true})
		const posts = await getAllPosts();
		set({posts, loading: false})
	},
	getPostsBySearch: async (search) => {
		set({loading: true})
		const posts = await getPostsBySearch(search)
		set({posts, loading: false})
	}
}))