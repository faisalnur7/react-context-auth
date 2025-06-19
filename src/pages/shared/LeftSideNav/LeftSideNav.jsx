import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const LeftSideNav = () => {

  const [categories, setCategories] = useState([]);
  useEffect(() => {
    fetch('categories.json')
      .then(response => response.json())
      .then(data => setCategories(data))
      .catch(error => console.error('Error fetching categories:', error));
  }, []);
  return (
    <div className="space-y-0 sticky top-52 h-screen ">
      <h2 className="text-2xl px-4 py-2 font-extrabold">All Categories</h2>
      {categories.map(category => (
        <div key={category.id} className="">
          <Link to={`/category/${category.id}`} className="block ml-4 text-md  p-2 pl-4 rounded-l-4xl hover:bg-base-300  transition-colors duration-200">
            {category.name}
          </Link>
        </div>
      ))}
    </div>
  );
}

export default LeftSideNav;