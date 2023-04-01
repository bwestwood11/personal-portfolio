import ListItem from "../components/ListItem";
import { getSortedPostsData } from "@/lib/posts";
import { ImYoutube2 } from 'react-icons/im'

export default function Posts() {
    const posts = getSortedPostsData();

  return (
    <section className="pt-24 mx-auto max-w-[1280px]">
        <h2 className="text-4xl font-bold text-center pb-4">My Blog</h2>
        <p className="text-xl font-semibold text-center pb-1">Check out my YouTube channel</p>
        <a href="https://www.youtube.com/channel/UCUbz7tRWnl82NHKRrQWWolg">
        <ImYoutube2 size={70} className="text-red-600 hover:text-red-400 hover:scale-105 ease-in-out duration-300 text-center mx-auto cursor-pointer" />
        </a>
        <ul className="w-full grid grid-cols-1 md:grid-cols-2 px-10 gap-10 gap-y-16 pb-24">
        {posts.map(post => (
          <ListItem key={post.id} post={post} />
        ))} 
        </ul>
    </section>
  )
}
