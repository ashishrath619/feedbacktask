import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./Components/Header";
function App() {
  return (
    <>
      {/* <Router>
        <Switch>
          <Route exact path="/" component={Header} />
        </Switch>
      </Router> */}
      <Header />
    </>
  );
}

export default App;
