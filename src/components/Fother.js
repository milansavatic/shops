import React from "react";

const Fother = () => {
    return ( <>
        <footer className="py-5 bg-dark text-white">
        <div className="container">
            <div className="row">
                <div className="col-md-3 col-sm-6">
                    <h2>About</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis ad odit impedit amet, ullam autem.</p>
                </div>
                <div className="col-md-3 col-sm-6">
                    <h2>Top products</h2>
                    <ul className="list-unstyles">
                        <li><a href="">Jeans</a></li>
                        <li><a href="">Rags</a></li>
                        <li><a href="">Accessories</a></li>
                        <li><a href="">Phones</a></li>


                    </ul>
                </div>
                <div className="col-md-3 col-sm-6">
                    <h2>Quick links</h2>
                    <ul className="list-unstyles">
                        <li><a href="">Home</a></li>
                        <li><a href="">Blog</a></li>
                        <li><a href="">Shop</a></li>
                        <li><a href="">Contact</a></li>


                    </ul>
                </div>
                <div className="col-md-3 col-sm-6">
                    <a href="index.html">
                        <img className="img-fluid rounded" src="img/download.jpg" alt=""/>
                    </a>
                </div>

            </div>
        </div>
    </footer>
     </>
    )
}
export default Fother;