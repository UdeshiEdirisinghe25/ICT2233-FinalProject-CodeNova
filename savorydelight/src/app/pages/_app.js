// src/pages/_app.js

// 🛑 Styles මෙතැනින් අනිවාර්යයෙන්ම Import කළ යුතුය
import '../styles/globals.css'; 

export default function MyApp({ Component, pageProps }) {
  // ඔබගේ Pages Router පිටු සියල්ලටම Global CSS ලැබේ.
  return <Component {...pageProps} />;
}