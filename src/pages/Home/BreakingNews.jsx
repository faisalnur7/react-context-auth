import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";
const BreakingNews = () => {
    return (
        <div className="breaking-news flex gap-2 items-center bg-gray-800 p-4 rounded-lg shadow-lg sticky top-0 z-50">
            <button className="btn btn-secondary">Breaking News</button>
            <Marquee speed={100} pauseOnHover={true} gradient={false} className="marquee">
                <span className="text-xl font-semibold">
                    <Link to="/" className="text-white hover:text-yellow-400">
                        Breaking News: Major Earthquake Hits City, Thousands Affected
                    </Link>
                </span>
            </Marquee>
        </div>
    );
}

export default BreakingNews;