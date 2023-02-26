import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body className='bg-gradient-to-r from-red-100 to-red-200 bg-blend-screen'>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
