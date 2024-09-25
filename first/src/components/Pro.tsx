
const Pro = ({dat}:{dat:pop}) => {

    
    return (
        <div className='d-flex  border-2 '>
            <img src={dat.image} className="w-25 h-100 me-5" alt="..." />

            <div style={{width:"600px"}}>
                <div className="card-body">
                    <h5 className="card-title"> {dat.title}</h5>
                    <p className="card-text">{dat.description}</p>
                    <h1>price {dat.price}</h1>
                </div>
            </div>
        </div>
    );
};

export default Pro;