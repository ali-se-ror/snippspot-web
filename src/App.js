import './App.css';
import 'react-toastify/dist/ReactToastify.css';
import { Provider } from 'react-redux';
import { store } from "./store";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { CssBaseline } from '@mui/material';
import { ToastContainer } from 'react-toastify';
import theme from 'styles/theme';
import AppRoutes from 'routes';

function App() {
  return (
    <Provider store={store}>
      <ToastContainer theme="light" />
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <AppRoutes />
      </ThemeProvider>

    </Provider>
  );
}

export default App;
