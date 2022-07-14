import React,{useRef} from "react";
import { useParams, Link } from "react-router-dom";

const Single=({items, card, setCard})=>{

  {/*6 Pisem kod da iscitam sve sa ove stranice "items[params.singleId]"*/}
  let params=useParams();
  const qty=useRef(0);

  {/*8.2 Pravim funkciju*/}

  const addToCart=()=>{
    let newCartItem={
      id:items[params.singleId].id,
      title:items[params.singleId].title,
      price:items[params.singleId].price,
      desc:items[params.singleId].desc,
      qty:qty.current.value,
      img:items[params.singleId].img
    };
        {/*8.3 dodajem novi item uz pomoc setCart*/}

        setCard((prev)=>{
          return[...prev, newCartItem];
        })

  }
  
  

      {/*7 komentarisem i pravim option u reactu*/}

      let options = [];
      for (let i = 1; i <= items[params.singleId].qty; i++) {
          options.push(<option key={i} value={i}>{i}</option>)
      }

    return(
        <>
                {/* <!-- shop heading --> */}
                <section className="shopHeading text-center bg-light py-5">
                <h2 className="fw-bolder">Single product page</h2>
                <p className="fw-lighter">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </section>
          <section className="single py-5">
                <article className="container">
                    <div className="row align-items-center">
                        <div className="col-md-6">
                            <img src={'../' + items[params.singleId].img} className="img-fluid shadow-lg border border-text rounded-3" alt="..." />
                        </div>
                        <div className="col-md-6">
                            <div className="price d-flex justify-content-between">
                                <h5 className="card-title">{items[params.singleId].title}</h5>
                                <h5>${items[params.singleId].price}</h5>
                            </div>
                            <select ref={qty} className="form-select bg-light d-flex" aria-label="Default select example">
                                {options}
                           {/* <option selected>Quantity</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>*/}
                          </select>
                          <p className="card-text">{items[params.singleId].desc}</p>
                          <br/><br/>
                          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore quae illo earum asperiores ducimus nisi temporibus fugiat cumque tempore quibusdam aperiam in eum incidunt quia, quaerat animi ipsam dolorem molestias ea aliquid accusamus. Ipsa consectetur eligendi dolorum ab, quisquam laborum!</p>
                        <br/>
                        {/*8.1 Prvavim onclick na addToCart*/}
                        <Link onClick={addToCart} className="button" to='/'>Add to cart</Link>
                        </div>
                </div>
            </article>
          </section>

          
      
        </>
    )
}
export default Single;