import { Router, Route } from 'react-router-dom'
import PaginaFeed from './components/pages/PaginaFeed'
import PaginaPostar from './components/pages/PaginaPostar'
import history from './components/History'
import PaginaCadastro from './components/pages/PaginaCadastro';
import PaginaLogin from './components/pages/PaginaLogin';

function App() {
  return (
    <Router history={history}>
      <Route exact path="/">
        <PaginaFeed />
      </Route>

      <Route path="/pagpostar">
        <PaginaPostar />
      </Route>

      <Route path="/cadastro">
        <PaginaCadastro />
      </Route>

      <Route path="/login">
        <PaginaLogin />
      </Route>
    </Router>
  );
}

export default App;