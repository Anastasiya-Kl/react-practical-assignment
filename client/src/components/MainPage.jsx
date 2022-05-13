import Header from "./Header";
import Pagination from "./Pagination";
import PostsGallery from "./PostsGallery";
import Search from "./Search";

export default function MainPage() {
    return <>
        <Header />
        <Search />
        <PostsGallery />
        <Pagination />
    </>
}