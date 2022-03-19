import { ApolloProvider } from "@apollo/client";
import { EuiProvider } from "@elastic/eui";
import { TableWrapper } from "./components/tableWrapper";
import "@elastic/eui/dist/eui_theme_light.css";
import { apolloClient } from "./utils";
import createCache from "@emotion/cache";

const cache = createCache({
  key: "myapp",
  container: document.querySelector(
    'meta[name="elasticui-style-insert"]'
  ) as HTMLElement,
});

function App() {
  return (
    <EuiProvider cache={cache} colorMode="light">
      <ApolloProvider client={apolloClient}>
        <div className="App">
          <TableWrapper />
        </div>
      </ApolloProvider>
    </EuiProvider>
  );
}

export default App;
