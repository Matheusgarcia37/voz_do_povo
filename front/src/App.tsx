import AppRouter from "./routes";
import GlobalStyles from "./styles/global";

import { AuthProvider } from "./context/AuthContext";
import { Router } from "react-router-dom";
import history from "./history";
import { ChakraProvider } from "@chakra-ui/react";

function App() {
  return (
    <ChakraProvider>
      <AuthProvider>
        <GlobalStyles />
        <Router history={history}>
          <AppRouter />
        </Router>
      </AuthProvider>
    </ChakraProvider>
  );
}

export default App;
