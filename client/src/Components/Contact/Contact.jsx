import { FaInstagramSquare } from "react-icons/fa";
import { MdMarkEmailRead } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa6";
import { FaSquareGithub } from "react-icons/fa6";

const Contact = () => {
    return (

        <div>

            <div className="text-3xl grid grid-rows gap-4 border-solid border-2 border-yellow-500 p-4">
                <h1>Mahmudul Hasan</h1>
                <p className="flex items-center gap-3 "><MdMarkEmailRead />- mhasanwebd@gmail.com
                </p>
                <p className="flex items-center gap-3 "><FaLinkedin /> - https://www.linkedin.com/in/mahmudul-hasan-52961023b/</p>
                <p className="flex items-center gap-3 "><FaSquareGithub /> - https://github.com/Mahmudul-Hasan-G</p>
                <p className="flex items-center gap-3 "><FaInstagramSquare /> - </p>
            </div>


            <div className="text-3xl grid grid-rows gap-4 border-solid border-2 border-yellow-500 p-4">
                <h1>Anuradha Muley</h1>
                <p className="flex items-center gap-3 "><MdMarkEmailRead />- annusannu@gmail.com
                </p>
                <p className="flex items-center gap-3 "><FaLinkedin /> - https://www.linkedin.com/in/anuradha-gundre-96b73725/</p>
                <p className="flex items-center gap-3 "><FaSquareGithub /> - https://github.com/AnuMuley</p>
                <p className="flex items-center gap-3 "><FaInstagramSquare /> -https://www.instagram.com/muleyanuradha/ </p>
            </div>


            <div className="text-3xl grid grid-rows gap-4 border-solid border-2 border-yellow-500 p-4">
                <h1>Mahmudul Hasan</h1>
                <p className="flex items-center gap-3 "><MdMarkEmailRead />- mhasanwebd@gmail.com
                </p>
                <p className="flex items-center gap-3 "><FaLinkedin /> - https://www.linkedin.com/in/mahmudul-hasan-52961023b/</p>
                <p className="flex items-center gap-3 "><FaSquareGithub /> - https://github.com/Mahmudul-Hasan-G</p>
                <p className="flex items-center gap-3 "><FaInstagramSquare /> - </p>
            </div>



        </div>


    );
};

export default Contact;