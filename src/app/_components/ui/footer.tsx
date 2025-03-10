import cubical from "public/cubical.svg";
import c from "public/c.svg";
import Image from "next/image";

import facebook from "public/facebook.svg";
import instagram from "public/insta.svg";
import linkedin from "public/linkedin.svg";

const Footer = () => {
    return (
        <div className="px-4 mt-14 w-full flex justify-center">
            <div className="bg-[#EFF2F5F5] w-full max-w-7xl rounded-2xl flex flex-col items-center p-6 md:p-12">
                {/* Logo */}
                <Image src={cubical} alt="Cubical Logo" width={160} height={40} className="h-auto w-40 md:w-48" />

                {/* Tagline */}
                <h2 className="text-center text-sm md:text-base text-[#0d0d0d] mt-4">
                    Making modern farming <br className="hidden md:block" /> accessible for India
                </h2>

                {/* Divider */}
                <div className="bg-[#666666] h-[2px] w-full max-w-[90%] my-8"></div>

                {/* Copyright & Socials */}
                <div className="flex flex-col md:flex-row justify-between items-center w-full max-w-[90%]">
                    {/* Copyright */}
                    <div className="flex items-center text-sm md:text-base text-[#0d0d0d] space-x-2">
                        <span>Copyright</span>
                        <Image alt="Copyright" src={c} width={16} height={16} className="w-4 h-4 inline" />
                        <span>Mystical Farms Private Limited</span>
                    </div>

                    {/* Social Icons */}
                    <div className="flex space-x-4 mt-4 md:mt-0">
                        <Image alt="Facebook" src={facebook} width={24} height={24} className="w-6 h-6" />
                        <Image alt="Instagram" src={instagram} width={24} height={24} className="w-6 h-6" />
                        <Image alt="LinkedIn" src={linkedin} width={24} height={24} className="w-6 h-6" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;
