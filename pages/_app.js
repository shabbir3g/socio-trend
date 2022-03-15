import { ThemeProvider } from "next-themes";
import { Provider } from "react-redux";
import "../styles/globals.css";
import { store } from "../redux/store";

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider enableSystem={true} attribute="class">
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    </ThemeProvider>
  );
}

export default MyApp;
