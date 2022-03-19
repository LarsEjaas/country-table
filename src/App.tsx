import { ApolloProvider } from "@apollo/client";

import { EuiProvider } from "@elastic/eui";
import { TableWrapper } from "./components/tableWrapper";

import { apolloClient } from "./utils";
import "./App.css";

function App() {
  return (
    <>
      <ApolloProvider client={apolloClient}>
        <EuiProvider colorMode="light">
          <div className="App">
            <TableWrapper />
          </div>
        </EuiProvider>
      </ApolloProvider>
    </>
  );
}

export default App;
