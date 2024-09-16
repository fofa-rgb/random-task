import logo from './logo.svg';
import './App.css';
import { useGetProductsQuery } from './app/api';
import ProductCard from './components/ProductCard';

function App() {
  const {data, isLoading, isError, isFetching, error} = useGetProductsQuery();

  //console.log("!!", data, isFetching, isLoading, isError);


  if (isLoading || isFetching) {
    return (
      <div class="container">
        <div class="loader"></div>
      </div>);
  }


  if (error) {
    return <div>Error loading products</div>;
  }
  return (
    <div>
      <h1>Products</h1>
      <ul>
        {data?.map((product) => (
          <ProductCard title={product.title}/>
        ))}
      </ul>
    </div>
  );
};



export default App;
