import { BrowserRouter, Route } from 'react-router-dom';
import PaginaFeed from './components/pages/PaginaFeed'
import PaginaPostar from './components/pages/PaginaPostar';

function App() {
  return (
    <BrowserRouter>
      <Route exact path="/">
        <PaginaFeed />
      </Route>

      <Route path="/pagpostar">
        <PaginaPostar />
      </Route>
    </BrowserRouter>
  );
}

export default App;