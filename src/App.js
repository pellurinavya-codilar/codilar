
import Footer from './components/Footer/footer';
import NavBar from './components/NavBar/navBar';
import Api from './components/Api/api';
import ProductNav from './components/ProductNav/productNav';
import Product from './components/Product/product';
import OtherProduct from './components/Otherproducts/otherProducts';

async function ApiUtil(query) {
  const rawResponse = await fetch('/graphql', {
    method: 'POST',
    headers: {
      "content-type": "application/json"
    },
    body: JSON.stringify({
      query
    })
  });
  const jsonResponse = await rawResponse.json();
  console.log('jsonResponse', jsonResponse);
}

function App() {
  ApiUtil(`
  query APIDATA {
    products(
      filter: { sku: { eq: "24-MB03" } }
    ) {
      items {
        name
        sku
      }
    }
  }
`);
  return (
    <div className="App">
     {/* <NavBar/> */}
     {/* <ProductNav/> */}
      {/* <Product/>
      <OtherProduct/>
      <Footer/> */}
      <Api/>
      
    </div>
  );
}

export default App;
