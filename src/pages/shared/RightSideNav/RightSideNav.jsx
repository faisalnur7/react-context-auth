import { FaGoogle, FaGithub, FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa6";
import qZone1 from '../../../assets/swimming.png';
import qZone2 from '../../../assets/playground.png';
import qZone3 from '../../../assets/class.png';
const RightSideNav = () => {
  return (
    <div className="right-side-nav">

      <div className="p-6">
        <h2 className="text-2xl font-bold mb-4">Login in with</h2>
        <div className="flex flex-col gap-2">
          <button className="btn btn-sm btn-outline btn-primary">
            <FaGoogle />
            Login in with Google
          </button>
          <button className="btn btn-sm btn-outline btn-dark">
            <FaGithub />
            Login in with Github
          </button>
        </div>

        <div className="p-4 space-y-3 mb-6">
          <h2 className="text-3xl">Find us on</h2>

          <a href="" className="p-4 flex text-lg items-center border rounded-t-lg m-0">
            <FaFacebook className="mr-3"></FaFacebook>
            <span>Facebook</span>
          </a>

          <a href="" className="p-4 flex text-lg items-center border-x m-0">
            <FaTwitter className="mr-3"></FaTwitter>
            <span>Twitter</span>
          </a>
          <a href="" className="p-4 flex text-lg items-center border rounded-b-lg m-0">
            <FaInstagram className="mr-3"></FaInstagram>
            <span>Instagram</span>
          </a>
        </div>

        {/* q zone */}
        <div className="p-4 space-y-3 mb-6">
          <h2 className="text-2xl font-bold mb-4">Q Zone</h2>
          <img src={qZone1} alt="" />
          <img src={qZone2} alt="" />
          <img src={qZone3} alt="" />
        </div>
      </div>
    </div>
  );
}

export default RightSideNav;