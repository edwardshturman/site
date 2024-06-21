import { ImageResponse } from 'next/og'

export const runtime = 'edge'

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const hasTitle = searchParams.has('title')
  const title = hasTitle
    ? searchParams.get('title')
    : 'Edward Shturman'

  const imageData = await fetch(
    new URL('../../../public/avatars/edward.png', import.meta.url))
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
          alignItems: 'center',
          padding: 50
        }}
      >
        { /* eslint-disable-next-line @next/next/no-img-element */ }
        <img
          width={300}
          height={300}
          src={imageData as any}
          alt=""
        />
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            paddingLeft: 30
          }}
        >
          <div
            style={{
              fontFamily: '"iA Writer Quattro Bold"',
              fontSize: 50,
              lineHeight: 1.6,
              color: 'white'
            }}
          >
            {title}
        </div>
        <div
            style={{
              fontFamily: '"iA Writer Quattro Regular"',
              fontSize: 30,
              lineHeight: 1.6,
              color: 'white'
            }}
          >
            Edward Shturman
        </div>
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
