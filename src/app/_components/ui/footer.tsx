import cubical from "public/cubical.svg";
import c from "public/c.svg";
import Image from "next/image";

import facebook from "public/facebook.svg";
import instagram from "public/insta.svg";
import linkedin from "public/linkedin.svg";

const Footer = () => {
    return (
        <div className="">
            <div className="bg-[#EFF2F5F5] h-80 ml-auto mr-auto mt-14 w-[88rem] rounded-2xl flex flex-col">
                <Image src={cubical} alt="" className="ml-20 mt-12 max-h-fit "/>
                <div className="w-100 font-[16px] text-[#0d0d0d] ml-20 mt-2">
                    <h2 className="">Making modern farming <br></br>accessible for India</h2>
                </div>

                <div className="bg-[#666666] h-[2px] w-[89%] ml-auto mr-auto mt-20"></div>
                <div className="ml-24 h-6 w-fit flex flex-row ">
                    <h2 className="inline mt-8">Copyright <><Image alt="" src={c} className="inline"/></><span className="inline"> </span>Mystical Farms Private Limited</h2>
                </div>

                <div className="flex flex-row ml-auto mr-[10rem] w-fit space-x-4">
                    <Image alt="" src={facebook} className="space-x-4"/>
                    <Image alt="" src={instagram}/>
                    <Image alt="" src={linkedin}/>
                </div>
            </div>
        </div>
    )
};

export default Footer;