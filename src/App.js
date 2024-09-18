
import './App.css';
import { useGetProductsQuery } from './app/apiSlice';
import StickyHeader from './components/StickyHeader';
import ProductCard from './components/ProductCard';
import { useSelector } from 'react-redux';


function App() {
  const {data, isLoading, isError, isFetching, error} = useGetProductsQuery();
  const searchQuery= useSelector(state=> state.searchQuery.value);
  //console.log("!!", data, isFetching, isLoading, isError);
  const filteredProducts = data?.filter(product =>
    product.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

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
            {filteredProducts.map((product) => (
              <ProductCard product={product} key={product.id}/>
            ))}
        </div>
      </div>
    
  );
};



export default App;
