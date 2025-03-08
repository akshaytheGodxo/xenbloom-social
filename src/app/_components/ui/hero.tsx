import Carousel from "../global/carousel";
import Image from "next/image";
import v1 from "public/v1.svg";
import slide2 from "public/slide2.svg";
import Link from "next/link";
const SlideOne = () => {
    return (
    <div className="mt-auto mb-auto bg-[#0D352C] h-[44rem] w-[90%]  rounded-[12px]">
        {/* <Image src={slide1} alt="" className=""/> */}
        <div className="">
        <Image src={v1} alt="" className="mx-auto w-fit h-[26rem]"/>
        </div>
        {/* header */}
        <div className="  flex flex-col">
            <h1 className="text-white text-[48px] mx-auto">SUPERFOOD - THAT YOUR</h1>
            <h1 className="text-white text-[48px] mx-auto">MODERN DIET NEEDS</h1>
            <Link href={"/order"} className="mx-auto">
            <button className="bg-[#93CC03] w-[168px] h-[47px] rounded-[29px]   py-2 px-5"><span className="text-white font-semibold text-[24px] font-nunito">Order Now</span></button>
            </Link>
        </div>
    </div>
    );
}



const SlideTwo = () => {
    return (
        <div className="mt-auto mb-auto ">
            <Image src={slide2} alt=""/>
        </div>
    )
}



const Hero = () => {
    return (
        <div className="h-[46rem] flex">
            <Carousel slides={[<SlideOne />,  <SlideTwo />   ]} />
        </div>
    );
}
export default Hero;