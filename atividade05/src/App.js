import { BrowserRouter, Route } from 'react-router-dom';
import PaginaFeed from './components/pages/PaginaFeed'

function App() {
  return (
    <BrowserRouter>
      <Route exact path="/">
        <PaginaFeed />
      </Route>
    </BrowserRouter>
  );
}

export default App;