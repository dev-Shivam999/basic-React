
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { Link } from 'react-router-dom';

import 'react-lazy-load-image-component/src/effects/blur.css';
const Item = ({category,description,id,image,price,title}:pop) => {
    
    return (
        <Link to={`/Product/${id}`} className="col-md-2 text-black border mx-auto p-2 col-sm-5 col-xs-12" >
            <p>{category}</p>
            <LazyLoadImage
                effect="blur"
                src={image} className='card-img-top w-75 mx-auto h-75' />

            {/* <img src={image} className="card-img-top w-75 mx-auto " style={{height:"60%"}} alt="..."/> */}
                <div className="card-body">
                <h5 className="card-title"> {title.slice(0, 8)}</h5>
                    <p className="card-text">{description.slice(0,20)}</p>
                    <h3>prise {price}</h3>
                  
                </div>
        </Link>
    );
};

export default Item;