import { ImageResponse } from 'next/og'

export const runtime = 'edge'

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const hasTitle = searchParams.has('title')
  const title = hasTitle
    ? searchParams.get('title')
    : 'Edward Shturman'

  const imageData = await fetch(
    new URL('../../../public/assets/HORIZON-BITMAP-30-patterndither.png', import.meta.url))
    .then((res) => res.arrayBuffer())

  const iAWriterQuattroRegular = await fetch(
    new URL('../../../public/fonts/iAWriterQuattroS-Regular.ttf', import.meta.url))
    .then((res) => res.arrayBuffer())

  const iAWriterQuattroBold = await fetch(
    new URL('../../../public/fonts/iAWriterQuattroS-Bold.ttf', import.meta.url))
    .then((res) => res.arrayBuffer())

  return new ImageResponse(
    (
      <div
        style={{
          display: 'flex',
          backgroundColor: 'black',
          width: '100%',
          height: '100%',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center'
        }}
      >
        { /* eslint-disable-next-line @next/next/no-img-element */ }
        <img
          width={1200}
          height={630}
          style={{
            opacity: 0.5,
            boxShadow: '0 0 20px 20px black inset'
          }}
          src={imageData as any}
          alt=""
        />
        <div
          style={{
            position: 'absolute',
            top: '45%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            color: 'white',
            fontSize: 60,
            lineHeight: 1.6,
            textAlign: 'center',
            justifyContent: 'center',
            alignItems: 'center',
            fontFamily: '"iA Writer Quattro Bold"',
          }}
        >
          {title}
      </div>
      <div
          style={{
            position: 'absolute',
            top: '55%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            color: 'white',
            fontSize: 30,
            lineHeight: 1.6,
            textAlign: 'center',
            justifyContent: 'center',
            alignItems: 'center',
            fontFamily: '"iA Writer Quattro Regular"',
          }}
        >
          A note by Edward Shturman
      </div>
    </div>
    ),
    {
      width: 1200,
      height: 630,
      fonts: [
        {
          name: 'iA Writer Quattro',
          data: iAWriterQuattroRegular,
          style: 'normal'
        },
        {
          name: 'iA Writer Quattro Bold',
          data: iAWriterQuattroBold,
          style: 'normal'
        }
      ]
    }
  )
}
