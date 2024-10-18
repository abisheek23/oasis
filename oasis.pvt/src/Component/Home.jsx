

import react,{useState,useEffect}from "react";
import axios from 'axios'
import Cerosil from "./cerosil";
import Footer from "./footer";


const Home=()=>{
    const[products,setProducts]=useState([])
    const [add,setAdd]=useState(false)
    const [currentproducts,setCurrentProducts]=useState(null)
    useEffect(()=>{
        axios.get('https://apiecommerce.pythonanywhere.com/api/product/')
        .then(response=>setProducts(response.data))
        .catch(error => console.log(error))

    },[])

    const view_p=(products)=>{
        setAdd(true);
        setCurrentProducts(products);
    }
    return(
        <>
        <Cerosil/>

        <div className="container mt-3">
             <div className="row" id="a1">
                 {products.map(pro=>(    
                    <div className="col-lg-3 col-md-3 col-sm-3" key={pro.id}>
                        <div className="card" onClick={()=>view_p(pro)}>
                            <img className="card-img-top img-fluid" src={pro.image} alt="" />
                            <div className="card-body">
                                <h4 className="card-title">{pro.p_name}</h4>
                                <h6 className="card-text">{pro.price}</h6>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
        <Footer/>
        </>

    )
    
    
}
export default Home

