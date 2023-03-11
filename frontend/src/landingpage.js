import React from "react";
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import './langingbage.css'
import Spark from'./spark.jpg'
import Spark1 from'./spark1.jpeg'
import Spark2 from'./spark2.jpeg'
import Spark3 from'./spark3.jpeg'
import Spark4 from'./spark4.jpeg'
import Spark5 from'./spark5.jpeg'
import Spark6 from'./spark6.jpeg'

export default function Lang() {
    return (
        <>
            <div className=" container-fluid row">
            <div className=" col-lg-12 bg-dark">
                <div className="row">
                    <div className="col-lg-8">
                        <nav class="navbar navbar-dark bg-dark">
                            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
                                <span class="navbar-toggler-icon"></span>
                            </button>
                            </nav>
                    </div>
                    <div className="col-lg-2 mt-2">
                        <input class="form-control mr-sm-2" type="search" placeholder="Search shop" aria-label="Search" />
                    </div>
                    <div className="col-lg-2 bg-dark">
               &nbsp;
                    </div>
                </div>

            </div>
            </div>

            <div className="container-fluid bg-white p-5">
                
                <div className="col-lg-12">

                        <div class="product-all-contents row">

                            <div class="col-lg-2">
                                <div className="product-contents">
                                    <img src={Spark} className='spark'/>
                                </div>
                            </div>

                            <div class="col-lg-2">
                                <div className="product-contents">
                                    <img src={Spark1} className='spark'/>
                                </div>
                            </div>

                            <div class="col-lg-2">
                                <div className="product-contents">
                                    <img src={Spark2} className='spark'/>
                                </div>
                            </div>

                            <div class="col-lg-2">
                                <div className="product-contents">
                                    <img src={Spark3} className='spark'/>
                                </div>
                            </div>

                            <div class="col-lg-2">
                                <div className="product-contents">
                                    <img src={Spark4} className='spark'/>
                                </div>
                            </div>

                            <div class="col-lg-2">
                                <div className="product-contents">
                                    <img src={Spark5} className='spark'/>
                                </div>
                            </div>


                        </div>

                        
                </div>

    

                

            </div>

          

           
               

            
            
                      



                   






            



















        </>);
}