import { useLoaderData } from "react-router-dom";
import Header from "../shared/Header/Header";
import LeftSideNav from "../shared/LeftSideNav/LeftSideNav";
import Navbar from "../shared/Navbar/Navbar";
import RightSideNav from "../shared/RightSideNav/RightSideNav";
import BreakingNews from "./BreakingNews";
import NewsFeed from "./NewsFeed";


const Home = () =>{
    const news = useLoaderData();
    return (
        <div>
            <Header />
            <BreakingNews />
            <Navbar />
            <div className="grid md:grid-cols-4 gap-6">
                <div className="">
                    <LeftSideNav />
                </div>
                <div className=" grid col-span-1 md:col-span-2 space-y-6">
                    <NewsFeed news={news} />
                </div>
                <div className="">
                    <RightSideNav />
                </div>
            </div>
        </div>
    )
}

export default Home;