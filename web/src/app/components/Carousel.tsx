'use client';
import { Carousel } from '@material-tailwind/react'
import Image from "next/image";
import React from 'react';

const carousel = [
  {
    id: 1,
    imgUrl: '/carousel/1.png'
  },
  {
    id: 2,
    imgUrl: '/carousel/2.png'
  },
  {
    id: 3,
    imgUrl: '/carousel/3.png'
  }
]


interface Props {
  images?: string[]
}

export default function CarouselComponent({ images }: Props) {
  return (
    <Carousel
      autoplay
      autoplayDelay={5000}
      loop
      transition={{ duration: 1 }}
      className="rounded-md"
      navigation={({ setActiveIndex, activeIndex, length }) => (
        <div className="absolute bottom-4 left-2/4 z-50 flex -translate-x-2/4 gap-2">
          {new Array(length).fill("").map((_, i) => (
            <span
              key={i}
              className={`block h-1 cursor-pointer rounded-2xl transition-all content-[''] ${activeIndex === i ? "bg-white w-8" : "bg-white/50 w-4"
                }`}
              onClick={() => setActiveIndex(i)}
            />
          ))}
        </div>
      )}
    >
      {
        images ?
          images.map(item => (
            <Image
              className="h-full w-full object-cover"
              key={item}
              src={item}
              alt={`Imagem do carro selecioado`}
              width={1320}
              height={583}
            />
          ))
          :
          carousel.map(item => (
            <Image
              priority
              className="h-full w-full object-cover"
              key={item.id}
              src={item.imgUrl}
              alt={`Imagem de carousel numero ${item.id}`}
              width={1320}
              height={583}
            />
          ))
      }
    </Carousel>
  )
}