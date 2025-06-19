import { useEffect, useRef, useState } from "react";
import NewsCard from "./NewsCard";
import NewsCardSkeleton from "./NewsCardSkeleton";

const NewsFeed = ({ news }) => {
    const itemsPerPage = 10;
    const [page, setPage] = useState(1);
    const [visibleNews, setVisibleNews] = useState([]);
    const [loading, setLoading] = useState(false);
    const loaderRef = useRef(null);

    useEffect(() => {
        setVisibleNews(news.slice(0, itemsPerPage));
    }, [news]);

    useEffect(() => {
        if (page === 1) return;

        const start = (page - 1) * itemsPerPage;
        const end = start + itemsPerPage;
        const moreNews = news.slice(start, end);

        setLoading(true);
        setTimeout(() => {
            setVisibleNews((prev) => [...prev, ...moreNews]);
            setLoading(false);
        }, 1000); // simulate loading delay
    }, [page]);

    useEffect(() => {
        if (!loaderRef.current) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setPage((prev) => prev + 1);
                }
            },
            { threshold: 1 }
        );

        observer.observe(loaderRef.current);
        return () => observer.disconnect();
    }, []);

    return (
        <div className="grid grid-cols-1 md:grid-cols-1 gap-6">
            {visibleNews.map((item) => (
                <NewsCard key={item.id} news={item} />
            ))}

            {/* Skeleton Loading */}
            {loading &&
                Array.from({ length: 1 }).map((_, index) => (
                    <NewsCardSkeleton key={index} />
                ))}

            {/* Scroll Trigger */}
            {!loading && visibleNews.length < news.length && (
                <div ref={loaderRef} className="col-span-full h-10" />
            )}

            {/* End Message */}
            {!loading && visibleNews.length >= news.length && (
                <div className="col-span-full text-center text-gray-400 py-4">
                    You've reached the end!
                </div>
            )}
        </div>
    );
};

export default NewsFeed;
