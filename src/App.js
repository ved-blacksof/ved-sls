import './App.css';
import { Switch, Route } from 'react-router-dom'
import { Routes } from "./Routes";


function App() {
  console.log()
  return (
    <>
      <Switch>
        {
          Routes.map((item, index) =>
            <Route
              key={index}
              path={item.path}
              exact={item.exact}
              component={item.component}
            />
          )
        }
      </Switch>
    </>
  );
}

export default App;
