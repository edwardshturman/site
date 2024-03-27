import Image from 'next/image'
import { ImageWrapper } from '@/app/components/ImageWrapper'

export default function ImageWrapperExperiment() {
  return (
    <>
      <h1><code>ImageWrapper</code> component</h1>
      <ImageWrapper>
        <Image
            unoptimized
            src="/assets/HORIZON-BITMAP-30-patterndither.png"
            alt="A bitmapped version of an AI-generated image of a city in space"
            width={1200}
            height={672}
          />
      </ImageWrapper>
    </>
  )
}
