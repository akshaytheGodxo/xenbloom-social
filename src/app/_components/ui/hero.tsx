import Carousel from "../global/carousel";
import Image from "next/image";
import v1 from "public/v1.svg";
import slide2 from "public/slide2.svg";
import Link from "next/link";

const SlideOne = () => {
    return (
        <div className="flex flex-col h-full items-center w-full bg-[#0D352C] h-[44rem] w-[90%] rounded-[12px] mx-auto ">
            {/* Image */}
            <Image src={v1} alt="Superfood" className="w-full max-w-[36rem] sm:max-w-[44rem] lg:max-w-2xl h-auto" />

            {/* Text */}
            <div className="text-center mt-6 md:mt-[3.5rem] mt-[4.5rem]">
                <h1 className="text-white text-xl sm:text-3xl md:text-4xl font-bold leading-snug">
                    SUPERFOOD - THAT YOUR
                </h1>
                <h1 className="text-white text-xl  sm:text-3xl md:text-4xl font-bold leading-snug">
                    MODERN DIET NEEDS
                </h1>
            </div>

            {/* Button */}
            <Link href={"/order"} className="sm:mt-6 mt-[4.5rem] ">
                <button className="bg-[#93CC03] px-6 py-3 rounded-full text-white text-lg md:text-2xl font-semibold">
                    Order Now
                </button>
            </Link>
        </div>
    );
};

const SlideTwo = () => {
    return (
        <div className="flex justify-center  items-center h-full w-full">
            <Image src={slide2} alt="Slide 2" className="w-full max-w-md md:max-w-lg h-auto" />
        </div>
    );
};
// 4.5rem, 3.5
// sm:max-w-36rem md:max-w-44rem
const Hero = () => {
    return (
        <div className="h-[46rem] w-full px-4  flex items-center justify-center">
            <Carousel slides={[<SlideOne />, <SlideTwo />]} />
        </div>
    );
};

export default Hero