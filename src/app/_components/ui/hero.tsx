import Carousel from "../global/carousel";
import Image from "next/image";
import slide1 from "public/slide1.svg";
import slide2 from "public/slide2.svg";
const SlideOne = () => {
    return (
    <div className="mt-auto mb-auto ">
        <Image src={slide1} alt="" className=""/>

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