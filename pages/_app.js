import { ThemeProvider } from "next-themes";
import { Provider } from "react-redux";
import "../styles/globals.css";
import { store } from "../redux/store";

function MyApp({ Component, pageProps }) {
  return (
<<<<<<< HEAD
    <ThemeProvider enableSystem={false} attribute="class">
=======
    <ThemeProvider enableSystem={true} attribute="class">
>>>>>>> 815eda84d378ad053b3d238e51f6a60bfb7c1751
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    </ThemeProvider>
  );
}

export default MyApp;
