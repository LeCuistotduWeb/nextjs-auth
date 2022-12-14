import '../styles/bootstrap.min.css'
import '../styles/globals.css'
import {AuthProvider} from "../auth/context";

function MyApp({ Component, pageProps }) {
  return (
    <AuthProvider>
      <Component {...pageProps} />
    </AuthProvider>
  )
}

export default MyApp
