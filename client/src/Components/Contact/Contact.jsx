import { FaInstagramSquare } from "react-icons/fa";
import { MdMarkEmailRead } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa6";
import { FaSquareGithub } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Contact = () => {
    return (

        <div>

            <div className="text-3xl grid grid-rows gap-4 border-solid border-2 border-yellow-500 p-4">
                <h1>Mahmudul Hasan</h1>
                <p className="flex items-center gap-3 "><MdMarkEmailRead />- mhasanwebd@gmail.com
                </p>
                <p className="flex items-center gap-3 "><FaLinkedin /> - <Link to="https://www.linkedin.com/in/mahmudul-hasan-52961023b/" target="_blank">https://www.linkedin.com/in/mahmudul-hasan-52961023b/</Link></p>
                <p className="flex items-center gap-3 "><FaSquareGithub /> - <Link to="https://github.com/Mahmudul-Hasan-G" target="_blank">https://github.com/Mahmudul-Hasan-G</Link></p>
                <p className="flex items-center gap-3 "><FaInstagramSquare /> - </p>
            </div>


            <div className="text-3xl grid grid-rows gap-4 border-solid border-2 border-yellow-500 p-4">
                <h1>Anuradha Muley</h1>
                <p className="flex items-center gap-3 "><MdMarkEmailRead />- annusannu@gmail.com
                </p>
                <p className="flex items-center gap-3 "><FaLinkedin /> - <Link to="https://www.linkedin.com/in/anuradha-gundre-96b73725/" target="_blank"> https://www.linkedin.com/in/anuradha-gundre-96b73725/</Link> </p>
                <p className="flex items-center gap-3 "><FaSquareGithub /> -<Link to="https://github.com/AnuMuley" target="_blank">https://github.com/AnuMuley</Link> </p>
                <p className="flex items-center gap-3 "><FaInstagramSquare /> - <Link to="https://www.instagram.com/muleyanuradha/" target="_blank"> https://www.instagram.com/muleyanuradha/</Link> </p>
            </div>


            <div className="text-3xl grid grid-rows gap-4 border-solid border-2 border-yellow-500 p-4">
                <h1>Jemila Kaffaf</h1>
                <p className="flex items-center gap-3 "><MdMarkEmailRead />- jemila.1997@outlook.it
                </p>
                <p className="flex items-center gap-3 "><FaLinkedin /> -<Link to="https://www.linkedin.com/in/jemila-kaffaf-257204263/" target="_blank">https://www.linkedin.com/in/jemila-kaffaf-257204263/</Link></p>
                <p className="flex items-center gap-3 "><FaSquareGithub /> -<Link to="https://github.com/JemilaK" target="_blank">https://github.com/JemilaK</Link> </p>
                <p className="flex items-center gap-3 "><FaInstagramSquare /> -<Link to="https://www.instagram.com/tech_for_future_/" target="_blank">https://www.instagram.com/tech_for_future_/</Link>  </p>
            </div>



        </div>


    );
};

export default Contact;