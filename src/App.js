import './App.css';
import Content from './content'
import Products from './products'
import Footer from './footer'
import Cart from './Cart'
import { useState } from 'react';




function App() {

  let spec = [
    {
      id: 1,
      brand: "YAMAHA R15-V3",
      view: true,
      sale: false,
      price: "230000 - 250000",
      photo: "https://images.unsplash.com/photo-1631000047921-69337688183d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8bW90b3JiaWtlJTIwcjE1fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=400&q=60"
    },
    {
      id: 2,
      brand: "KTM-RC200",
      rate: "*****",
      view: false,
      sale: true,
      price: 200000,
      photo: "https://images.unsplash.com/photo-1449426468159-d96dbf08f19f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
    },
    {
      id: 3,
      brand: "Thunder Bird",
      view: false,
      sale: true,
      price: 160000,
      photo: "https://images.unsplash.com/photo-1626841845777-3ad871afb8f7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fG1vdG9yYmlrZSUyMHJveWFsJTIwZW5maWxlZHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=400&q=60"
    },
    {
      id: 4,
      brand: "Ducati",
      rate: "*****",
      view: false,
      sale: false,
      price: 1400000,
      photo: "https://images.unsplash.com/photo-1615172282427-9a57ef2d142e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzR8fG1vdG9yYmlrZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=400&q=60"
    },
    {
      id: 5,
      brand: "YAMAHA - R1",
      price: 1800000,
      view: false,
      sale: true,
      photo: "https://images.unsplash.com/photo-1547549082-6bc09f2049ae?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8ODB8fG1vdG9yYmlrZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=400&q=60"
    },
    {
      id: 6,
      brand: "YAMAHA - R3",
      price: "1300000 - 1500000",
      view: true,
      sale: false,
      photo: "https://images.unsplash.com/photo-1619771914272-e3c1ba17ba4d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8ODh8fG1vdG9yYmlrZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=400&q=60"
    },
    {
      id: 7,
      brand: "BMW",
      price: 1800000,
      rate: "*****",
      view: false,
      sale: true,
      photo: "https://images.unsplash.com/photo-1624798226540-e053056b7cbb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTA0fHxtb3RvcmJpa2V8ZW58MHx8MHx8&auto=format&fit=crop&w=400&q=60"
    },
    {
      id: 8,
      brand: "KTM-Duke",
      price: 200000,
      rate: "*****",
      view: false,
      sale: false,
      photo: "https://images.unsplash.com/photo-1568227441146-d9d774c4fd97?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDA3fHxtb3RvcmJpa2V8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
    }
  ]

  const [items, setitems] = useState([])
  const [totals, settotal] = useState(0)

  let addcart = (item) => {
    setitems([...items, item]);
    settotal(totals + item.price);}
  
  let handleremove = (item) => {
    let indexs = items.some(obj => obj.id == item.id)
    let newcart = items.splice(indexs,1);
    setitems([...newcart])
    settotal(totals - item.price)
  }
  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container px-4 px-lg-5">
          <a className="navbar-brand" href="#!">Start Bootstrap</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span class="navbar-toggler-icon"></span></button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 ms-lg-4">
              <li className="nav-item"><a class="nav-link active" aria-current="page" href="#!">Home</a></li>
              <li className="nav-item"><a class="nav-link" href="#!">About</a></li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" id="navbarDropdown" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">Shop</a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li><a className="dropdown-item" href="#!">All Products</a></li>
                  <li><hr className="dropdown-divider" /></li>
                  <li><a className="dropdown-item" href="#!">Popular Items</a></li>
                  <li><a className="dropdown-item" href="#!">New Arrivals</a></li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <Content />
      <div className='row'>
        <div className='col-sm-12 col-md-8 col-lg-10'>
          <section class=" py-5">
            <div class="container px-4 px-lg-5 mt-5">
              <div class="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
                {spec.map((data) => {
                  return <Products datas={data} buttonclick={addcart} cart={items} />
                })}
              </div>
            </div>
          </section>
        </div>
        <div className='col-sm-12 col-md-4 col-lg-2'>
          <ol class="list-group list-group-numbered container"><br></br><br></br>
            <div className='text-center fw-bolder fs-1 '>Cart</div>
            {items.map((itemdata) => {
              return <Cart data={itemdata} handle={handleremove}  />
            })}
          </ol>
          <div className='fw-bolder fs-5'>Total : $ {totals} </div>
        </div>

      </div>
      <Footer />
    </div>


  );
}

export default App;
