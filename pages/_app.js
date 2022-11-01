import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <div className="mainBody">
      <div className="container">
        <main className="main">
          <Component {...pageProps} />
        </main>
      </div>
    </div>
  ) 
}

export default MyApp
