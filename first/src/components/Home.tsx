

import { useDispatch } from 'react-redux';
import Item from './Item';
import L from './L';
import Search from './Search';
import useApi from './api';
import { increment } from '../store/Tool';
import { useEffect } from 'react';

const Home = () => {
    const { dat, Loading } = useApi('https://fakestoreapi.com/products');
    const dispatch = useDispatch();
    useEffect(() => {
        if (dat.length > 0) {
            dispatch(increment(dat)); 
        }
    }, [dat, dispatch])
    return (
     <>
    <Search dat={dat} />

            <div className='row gap-3'>
                {
                    Loading ? <L /> : dat?.length > 0 && dat.map((p, i) => <Item image={p.image} category={p.category} id={p.id} price={p.price} description={p.description} title={p.title} key={i} />)
                }
            </div>
     </>
    );
};

export default Home;