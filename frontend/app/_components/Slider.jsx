'use client';
import React from 'react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '../../components/ui/carousel';
import Image from 'next/image';
// import { useEffect, useState } from 'react';
// import GlobalApi from '../_utils/GlobalApi';

function Slider() {
//   const [sliderList, setSliderList] = useState([]);

//   useEffect(() => {
//     getSliderList();
//   }, []);

//   const getSliderList = () => {
//     GlobalApi.getSliders().then((resp) => {
//       setSliderList(resp.data.data);
//     });
//   };
  return (
    <div className='mt-20'>
      <Carousel>
        <CarouselContent>
            <CarouselItem>
            <Image
                src="/logo.png"
                alt="image"
                height={400}
                width={1000}
                className="w-full h-[300px] md:h-[585px] object-fill rounded-2xl"
                unoptimized={true}
            />
            </CarouselItem>
          {/* {sliderList.map((slider, index) => (
            <CarouselItem key={index}>
              <Image
                src={
                  process.env.NEXT_PUBLIC_BACKEND_BASE_URL +
                  slider?.attributes?.image?.data?.attributes?.url
                }
                alt="image"
                height={400}
                width={1000}
                className="w-full h-[300px] md:h-[585px] object-fill rounded-2xl"
                unoptimized={true}
              />
            </CarouselItem>
          ))} */}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
}

export default Slider;