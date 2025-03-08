"use client";
import React, { useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";

type CarouselProps = {
    slides: React.ReactNode[]; // Array of components (JSX elements)
};

const Carousel: React.FC<CarouselProps> = ({ slides }) => {
    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });

    // Auto-play functionality
    useEffect(() => {
        if (!emblaApi) return;
        const play = () => {
            if (emblaApi.canScrollNext()) {
                emblaApi.scrollNext();
            } else {
                emblaApi.scrollTo(0); // Loop back to start
            }
        };
        const interval = setInterval(play, 3000);
        return () => clearInterval(interval);
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
