import { useLoaderData, useParams } from "react-router-dom";
import BreakingNews from "../Home/BreakingNews";
import Navbar from "../shared/Navbar/Navbar";
import RightSideNav from "../shared/RightSideNav/RightSideNav";
import Header from "../shared/Header/Header";

const SingleNews = () => {
    const { id } = useParams();
    const newsList = useLoaderData();

    const news = newsList.find((n) => n.id === id);

    if (!news) {
        return <div className="text-center py-10 text-red-600 text-xl">News not found</div>;
    }

    return (
        <>
            <Header />
            <BreakingNews />
            <Navbar />
            <div className="grid md:grid-cols-4 gap-6">
                <div className=" grid col-span-1 md:col-span-3 space-y-6">
                    <div className="max-w-4xl mx-auto p-6 space-y-6">

                        <img
                            src={news.image_url}
                            alt={news.title}
                            className="w-full h-auto rounded-lg shadow-sm"
                        />

                        <div className="flex items-center gap-4 text-sm">
                            <img src={news.author.img} alt={news.author.name} className="w-10 h-10 rounded-full" />
                            <div>
                                <p>{news.author.name}</p>
                                <p>{new Date(news.author.published_date).toLocaleDateString()}</p>
                            </div>
                            <span className="ml-auto text-blue-500 bg-blue-100 px-2 rounded-full text-xs uppercase">
                                {news.rating?.badge || "News"}
                            </span>
                        </div>
                        <h1 className="text-3xl font-bold text-base-800">{news.title}</h1>

                        <div className="text-lg leading-relaxed text-base-700">{news.details}</div>

                        <div className="flex flex-wrap gap-2">
                            {news.tags?.map((tag, index) => (
                                <span
                                    key={index}
                                    className="px-3 py-1 text-sm bg-base-100 text-base-600 rounded-full"
                                >
                                    #{tag}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
                <div className="">
                    <RightSideNav />
                </div>
            </div>



        </>
    );
};

export default SingleNews;
