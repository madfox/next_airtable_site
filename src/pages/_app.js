import '../styles/global.css'

export default function DefaultApp({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
    </>
  )
}