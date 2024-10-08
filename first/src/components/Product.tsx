import axios from 'axios';
import  { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import L from './L';
import { LazyLoadImage } from 'react-lazy-load-image-component';

import 'react-lazy-load-image-component/src/effects/blur.css';
const Product = () => {
    const [dat,setdata]=useState<pop>()
    const [Loading,SetL]=useState<boolean>(true)
    const {id}=useParams()
    async  function api(){

        const { data } = await axios.get(`https://fakestoreapi.com/products/${id}`)
        //   console.log(data.data);
        setdata(data)
        SetL(false)
    }
    useEffect(()=>{
api()
    },[])
    return (
        <div>
            {
              Loading?<L/>:  dat && <div className="card col-md-5 " >
                    <LazyLoadImage
                        effect="blur"
                        src={dat.image}  className='card-img-top w-50 mx-auto h-50' />
                    {/* <img src={dat.image} className="card-img-top w-50 mx-auto h-50" alt="..." /> */}
                    <div className="card-body">
                        <h5 className="card-title"> {dat.title}</h5>
                        <p className="card-text">{dat.description}</p>
                        <h1>price {dat.price}</h1>
                    </div>
                </div>
            }
            
        </div>
    );
};

export default Product;