import './App.css';
import {Products} from './products/Product';

const HomePageHeader = () => {
  return (
    <header className="header">
      <h2>Shop App Products</h2>
    </header>
  );
};

function App() {
  return (
   <>
   <HomePageHeader/>
   <Products/>
   </>
  );
}

export default App;
