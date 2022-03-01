import {
  Route,
  BrowserRouter,
  Link,
  Switch,
  useRouteMatch,
  useParams,
} from "react-router-dom";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Route path="/org/:org/flow-home">
          <HomePage />
        </Route>
      </BrowserRouter>
    </div>
  );
}

export default App;

const HomePage = () => {
  const { path, url } = useRouteMatch();
  const { org } = useParams();

  return (
    <>
      <ul>
        <li>
          <Link to={url}>Home</Link>
        </li>
        <li>
          <Link to={`${url}/onboarding`}>Onboarding</Link>
        </li>
        <li>
          <Link to={`${url}/welcome`}>Welcome</Link>
        </li>
        <li>
          <Link to={`/org/${org}/r/some-other-report`}>Some other report</Link>
        </li>
      </ul>
      <Switch>
        <Route path={`${path}/onboarding`}>
          <Onboarding />
        </Route>
        <Route exact path={path}>
          <Title />
        </Route>
        <Route path={`${path}/welcome`}>
          <Welcome />
        </Route>
      </Switch>
    </>
  );
};

const Title = () => {
  const { url } = useRouteMatch();
  return (
    <div>
      <h2>Home</h2>
      <Link to={`${url}/welcome`}>Welcome</Link>
    </div>
  );
};
const Onboarding = () => {
  const { url } = useRouteMatch();
  return (
    <div>
      <h2>Onboarding</h2>
      <Link to={url}>Home</Link>
    </div>
  );
};
const Welcome = () => {
  const { url } = useRouteMatch();
  return (
    <div>
      <h2>Welcome</h2>
      <Link to={`${url}/welcome`}>Welcome</Link>
    </div>
  );
};
