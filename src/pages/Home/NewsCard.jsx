import { Link } from "react-router-dom";

const NewsCard = ({ news }) => {
  const {
    title,
    author,
    thumbnail_url,
    details,
    rating,
    total_view,
    tags,
    others,
  } = news;

  return (
    <div className="w-full max-w-xl mx-auto bg-white shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300">
      {/* Thumbnail */}
      <img
        className="w-full h-56 object-cover"
        src={thumbnail_url}
        alt="News Thumbnail"
      />

      {/* Card Content */}
      <div className="p-5 space-y-3">
        {/* Title */}
        <h2 className="text-xl font-bold text-gray-800 hover:text-blue-600 transition">
          {title}
        </h2>

        {/* Author and Meta Info */}
        <div className="flex items-center justify-between text-sm text-gray-500">
          <div className="flex items-center gap-2">
            <img
              className="w-8 h-8 rounded-full border"
              src={author?.img}
              alt={author?.name}
            />
            <div>
              <p className="font-medium text-gray-700">{author?.name}</p>
              <p>{new Date(author?.published_date).toLocaleDateString()}</p>
            </div>
          </div>
          <div className="text-xs text-right space-y-1">
            <p>👁️ {total_view.toLocaleString()} views</p>
            <p className="bg-yellow-100 text-yellow-700 inline-block px-2 py-1 rounded-md text-[11px] font-medium uppercase">
              {rating.badge} ★ {rating.number}
            </p>
          </div>
        </div>

        {/* Details */}
        <p className="text-gray-600 text-sm">
          {details.slice(0, 150)}...
          <Link to={`/news/${news.id}`} className="text-blue-600 font-semibold cursor-pointer hover:underline">
            Read More
          </Link>
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2">
          {tags.map((tag, index) => (
            <span
              key={index}
              className="text-xs px-2 py-1 bg-blue-50 text-blue-600 rounded-md font-semibold"
            >
              #{tag}
            </span>
          ))}
        </div>

        {/* Footer */}
        <div className="flex justify-between items-center mt-4">
          {others?.is_today_pick && (
            <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded font-semibold uppercase">
              Today’s Pick
            </span>
          )}
          {others?.is_trending && (
            <span className="text-xs bg-red-100 text-red-700 px-2 py-1 rounded font-semibold uppercase">
              Trending
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
