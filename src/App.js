import { Route, Switch } from "react-router-dom";
import AllQuotes from "./components/pages/AllQuotes";
import NewQuote from "./components/pages/NewQuote";
import QuoteDetail from "./components/pages/QuoteDetail";

function App() {
  return (
    <Switch>
      <Route path="/quotes/:quoteId">
        <QuoteDetail />
      </Route>
      <Route path="/quotes">
        <AllQuotes />
      </Route>
      <Route path="/new-quote">
        <NewQuote />
      </Route>
    </Switch>
  );
}

export default App;
