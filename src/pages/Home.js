import React from "react";
import {Link} from 'react-router-dom';

const Home=({items, card, setCard})=>{

   {/*14 Uzimam istu funkciju iz singla add to card da dodam i funkciju za dodavanje setCard*/}

   const addToCart=(idx)=>{
    let newCartItem={
      id:items[idx].id,
      title:items[idx].title,
      price:items[idx].price,
      desc:items[idx].desc,
      qty:1,
      img:items[idx].img
    };
        {/*dodajem novi item uz pomoc setCart*/}

        setCard((prev)=>{
          return[...prev, newCartItem];
        })

  }

    return(
        <>



        <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="false">
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src="img/slide_1.jpg" className="d-block w-100" alt="..."/>
            <div className="carousel-caption d-none d-md-block text-start">
              <p>Woman collection</p>
              <h2 className="display-2 fw-bold">Show <span>your <br/>personal </span>style</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                <a href="" className="button">View collection</a>
            </div>
          </div>
          <div className="carousel-item">
            <img src="img/slide_2.jpg" className="d-block w-100" alt="..."/>
            <div className="carousel-caption d-none d-md-block text-start">
              <h5>Man collection</h5>
              <h2 className="display-2 fw-bold">Show <span>your <br/>personal </span>style</h2>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              <a href="" className="button">View collection</a>

            </div>
          </div>
       
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>

      
      

      <section className="products py-5">
        <article className="container">
            <div className="row">
              {items.map((item, idx)=>{
                return(

                
                <div key={idx} className="col-md-4 col-sm-6 mb-2">
                    <div className="card">
                        {/*4 dajem link ovde da bi klikom na sliku otisao na njen ID*/}

                        <Link to={`/single/${idx}`} className="holder">
                        <img src={item.img} className="card-img-top" alt="..."/>
                        </Link>
                        <div className="card-body">
                        <div className="price d-flex justify-content-between">
                          <h5 className="card-title">{item.title}</h5>
                            <h5>{item.price}</h5>
                        </div>
                          <p className="card-text">{item.desc}</p>
                          <Link onClick={()=>addToCart(idx)} className="button" to="/Card">Shop now</Link>

                        </div>
                      </div>
                </div>
                )
            })}
                {/*2.komentar na kartove*
                <div className="col-md-4 col-sm-6 mb-2">
                    <div className="card">
                        <div className="holder">
                        <img src="img/image2.jpg" className="card-img-top" alt="..."/>
                        </div>
                        <div className="card-body">
                            <div className="price d-flex justify-content-between">
                                <h5 className="card-title">Traveller bag</h5>
                                  <h5>40$</h5>
                              </div>
                          
                          <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                          <a href="#" className="button">Show now</a>
                        </div>
                      </div>
                </div>
                <div className="col-md-4 col-sm-6 mb-2">
                    <div className="card">
                        <div className="holder">
                        <img src="img/image3.jpg" className="card-img-top" alt="..."/>
                        </div>
                        <div className="card-body">
                            <div className="price d-flex justify-content-between">
                                <h5 className="card-title">Sunglasses</h5>
                                  <h5>60$</h5>
                              </div>
                          
                          <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                          <a href="#" className="button">Show now</a>
                        </div>
                      </div>
                </div>
                <div className="col-md-4 col-sm-6 mb-2">
                    <div className="card">
                        <div className="holder">
                        <img src="img/image4.jpg" className="card-img-top" alt="..."/>
                        </div>
                        <div className="card-body">
                            <div className="price d-flex justify-content-between">
                                <h5 className="card-title">Woman watch</h5>
                                  <h5>45$</h5>
                              </div>
                          
                          <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                          <a href="#" className="button">Show now</a>
                        </div>
                      </div>
                </div>
                <div className="col-md-4 col-sm-6 mb-2">
                    <div className="card">
                        <div className="holder">
                        <img src="img/image5.jpg" className="card-img-top" alt="..."/>
                        </div>
                        <div className="card-body">
                            <div className="price d-flex justify-content-between">
                                <h5 className="card-title">Summer hat</h5>
                                  <h5>35$</h5>
                              </div>
                          <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                          <a href="#" className="button">Show now</a>
                        </div>
                      </div>
                </div>
                <div className="col-md-4 col-sm-6 mb-2">
                    <div className="card">
                        <div className="holder">
                        <img src="img/image6.jpg" className="card-img-top" alt="..."/>
                        </div>
                        <div className="card-body">
                            <div className="price d-flex justify-content-between">
                                <h5 className="card-title">Roller skates</h5>
                                  <h5>75$</h5>
                              </div>
                          <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                          <a href="#" className="button">Show now</a>
                        </div>
                      </div>
    </div>*/}
    </div>
        </article>
      </section>

    

      <section className="about py-5 bg-light">
        <article className="container">
          <div className="row">
            <div className="col-md-3 col-sm-6 text-center">
              <div className="border p-4">
                <i className="fa-solid fa-hand-holding-dollar"></i>
                <h5 className="fw-bolder my-5">Money back guarant</h5>
                <p>Lorem, ipsum dolar</p>
              </div>
            </div>

            <div className="col-md-3 col-sm-6 text-center">
              <div className="border p-4">
                <i className="fa-solid fa-hand-holding-dollar"></i>
                <h5 className="fw-bolder my-5">Money back guarant</h5>
                <p>Lorem, ipsum dolar</p>
              </div>
            </div>

            <div className="col-md-3 col-sm-6 text-center">
              <div className="border p-4">
                <i className="fa-solid fa-hand-holding-dollar"></i>
                <h5 className="fw-bolder my-5">Money back guarant</h5>
                <p>Lorem, ipsum dolar</p>
              </div>
            </div>

            <div className="col-md-3 col-sm-6 text-center">
              <div className="border p-4">
                <i className="fa-solid fa-hand-holding-dollar"></i>
                <h5 className="fw-bolder my-5">Money back guarant</h5>
                <p>Lorem, ipsum dolar</p>
              </div>
            </div>
          </div>
        </article>
      </section>
        </>
    )
}
export default Home;