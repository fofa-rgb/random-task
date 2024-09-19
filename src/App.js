
import './App.css';
import { useGetProductsQuery } from './state/apiSlice';
import StickyHeader from './components/StickyHeader';
import ProductCard from './components/ProductCard';
import { useDispatch, useSelector } from 'react-redux';
import Modal from './components/Modal';
import { toggleOn, toggleOff } from './state/modalSlice';
import { setProduct } from './state/modalSlice';

function App() {
  const {data, isLoading, isFetching, error} = useGetProductsQuery();
  const dispatch = useDispatch();
  const searchQuery= useSelector(state=> state.searchQuery.value);
  const modal= useSelector(state=> state.modal.value);
  //console.log("!!", data, isFetching, isLoading, isError);
  const filteredProducts = data?.filter(product => product.title.toLowerCase().includes(searchQuery.toLowerCase()));
 
  const openModal = (product) => {
    console.log('haha')
    dispatch(toggleOn());
    dispatch(setProduct(product));
  };

  const closeModal = () => {
    dispatch(toggleOff());
  };

  if (isLoading || isFetching) {
    return (
      <div className="container">
        <div className="loader"></div>
      </div>);
  }


  if (error) {
    return <div><h1>Error loading products</h1></div>;
  }


  return (

    <div>
        <StickyHeader />
        <div className="product-list">
            {filteredProducts.map((product) => (
              
              <ProductCard product={product} key={product.id} onClick={()=>openModal(product)}/>
              
            ))}
            {modal && <Modal onClose={closeModal}/> }
            
        </div>
    </div>
    

    
  );
};



export default App;
