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
        <div className="overflow-hidden h-[46rem] m-auto" ref={emblaRef}>
            <div className="flex">
                {slides.map((slide, index) => (
                    <div key={index} className="min-w-full flex justify-center items-center h-64">
                        {slide}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Carousel;
