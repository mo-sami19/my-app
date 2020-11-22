import React , {useState} from 'react'
import './App.css'
function App() {
  const [cart, setCart] = useState ([]);
  const  [products]= useState ([
    {
      name :'Glasses' ,
      cost : '$2.99' ,
      image :'https://souqcms.s3-eu-west-1.amazonaws.com/cms/boxes/img/desktop/1603628135_banner-4-ar.jpg',
    },
    {
      name :'Power' ,
      cost : '$2.99' ,
      image :'https://souqcms.s3-eu-west-1.amazonaws.com/cms/boxes/img/desktop/1603356632_BTS-Merch-455x314_02-ar.png' ,
    }
  
  ]
)
const addToCart = (product) => {
  setCart({...cart, product });

} ;
  return (
  <div className="App ">
    <header>
      
    </header>
        {products.map((product) => (
          <div className = 'container'>
            <div className ='row  products'>
              <div className="mt-5 border text-center" >
                  <img src={product.image} />
                  <div>   
                    <h5 className="card-ttle">{product.name}</h5>
                    <p className="card-">{product.cost}</p>
                    <a href="#" className="btn btn-danger" onClick ={() => addToCart(product) }>ADD porduct</a>
                  </div>
              </div>
            </div>      
            </div>
            
          ))}
     </div>
  );
}

export default App;
