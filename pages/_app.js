import { ThemeProvider } from "next-themes";
import { Provider } from "react-redux";
import { store } from "../redux/store";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider enableSystem={true} attribute="class">
      <Provider store={store}>
        <ToastContainer />
        <Component {...pageProps} />
      </Provider>
    </ThemeProvider>
  );
}

export default MyApp;
