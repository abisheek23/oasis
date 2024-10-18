import React from "react"
function Footer(){
    return(
        <footer className="bg-dark text-light pt-4">
                <div className="container-fluid">
                  <div className="row justify-content-center"> 
              
                    <div className="col-md-4 col-sm-12 text-center mb-4">
                      <h5>Connect with Us</h5>
                      <form className="d-flex justify-content-center">
                        <input type="email" className="form-control w-50" placeholder="Enter Email ID" aria-label="Email"/>
                        <button className="btn btn-outline-light ml-2">→</button>
                      </form>
                      <div className="mt-3">
                        
                        <a href="#" className="text-light mx-2"><i className="fab fa-twitter"></i></a>
                        <div className="text-center py-3">
                            © Copyright 2024 Your Brand. All rights reserved
                          </div>
                      </div>
                    </div>
              
                    
                    <div className="col-md-4 col-sm-6 mb-4">
                      <h5>Useful Links</h5>
                      <ul className="list-unstyled">
                        <li><a href="#" className="text-light">About Us</a></li>
                        <li><a href="#" className="text-light">Help and Support</a></li>
                        <li><a href="#" className="text-light">FAQs</a></li>
                        <li><a href="#" className="text-light">Privacy Policy</a></li>
                        <li><a href="#" className="text-light">Terms of Use</a></li>
                      </ul>
                    </div>
              
                    
                      <div className="col-md-4 col-sm-6 mb-4">
                      <h5>Products</h5>
                      <ul className="list-unstyled">
                        <li><a href="#" className="text-light">Home Appliances</a></li>
                        <li><a href="#" className="text-light">Phones & Wearables</a></li>
                        <li><a href="#" className="text-light">Computers & Tablets</a></li>
                        <li><a href="#" className="text-light">Kitchen Appliances</a></li>
                        <li><a href="#" className="text-light">Audio & Video</a></li>
                      </ul>
                    </div>
                  </div>
                </div> 
                </footer>
    )
}
export default Footer