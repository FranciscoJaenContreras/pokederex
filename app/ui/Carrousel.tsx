'use client'

import useEmblaCarousel from 'embla-carousel-react'
import { MapeableImage } from '@/app/lib/types'
import Image from 'next/image'
import Link from 'next/link'

type HomeCarouselProps = {
  images: MapeableImage[]
}

const Carousel = ({ images }: HomeCarouselProps) => {

  const [emblaRef] = useEmblaCarousel({ dragFree: true, containScroll: 'trimSnaps' })

  return (
    <div className="overflow-hidden" ref={emblaRef}>
      <div className="flex p-10 gap-10">
        {images.map(({ key, src, alt }) => (
          <Link 
            key={key}
            href={`/pokedex/${key}`}
            className="bg-black bg-opacity-25 rounded-full relative min-w-0 p-5 md:p-7 lg:p-10 flex-grow-0 flex-shrink-0" 
          >
            <Image
              className='h-60 w-60 lg:h-80 lg:w-80'
              width={1000}
              height={1000}
              src={src}
              alt={alt}
            />
          </Link>
        ))}
      </div>
    </div>
  )
}

export default Carousel