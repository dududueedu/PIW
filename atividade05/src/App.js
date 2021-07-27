import { Router, Route } from 'react-router-dom'
import PaginaFeed from './components/pages/PaginaFeed'
import PaginaPostar from './components/pages/PaginaPostar'
import history from './components/History'

function App() {
  return (
    <Router history={history}>
      <Route exact path="/">
        <PaginaFeed />
      </Route>

      <Route path="/pagpostar">
        <PaginaPostar />
      </Route>
    </Router>
  );
}

export default App;