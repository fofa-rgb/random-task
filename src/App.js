import logo from './logo.svg';
import './App.css';
import { useGetProductsQuery } from './app/apiSlice';
import StickyHeader from './components/StickyHeader';
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
    return <div><h1>Error loading products</h1></div>;
  }
  return (

    <div>
        <StickyHeader />
        <div class="product-list">
            {data?.map((product) => (
              <ProductCard product={product} key={product.id}/>
            ))}
        </div>
      </div>
    
  );
};



export default App;
