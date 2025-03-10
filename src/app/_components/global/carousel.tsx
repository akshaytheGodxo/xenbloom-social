"use client";
import React, { useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";

type CarouselProps = {
    slides: React.ReactNode[];
};

const Carousel: React.FC<CarouselProps> = ({ slides }) => {
    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false, containScroll: "trim" });

    useEffect(() => {
        if (!emblaApi) return;
        
    }, [emblaApi]);

    return (
        <div className="overflow-hidden h-[44rem] max-w-7xl w-full  " ref={emblaRef}>
            <div className="flex h-full">
                {slides.map(( slide, i) => (
                    <div key={i} className="min-w-full  flex justify-center items-center ">
                        {slide}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Carousel;
