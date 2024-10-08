import axios from 'axios';
import  { useEffect, useState } from 'react';
import Item from './Item';
import L from './L';
import Search from './Search';

const Home = () => {
    const [dat, setdata] = useState<pop[]>([])
    const [Loading,setL]=useState<boolean>(true)
    async function api() {
        const {data} = await axios.get('https://fakestoreapi.com/products')
        //   console.log(data.data);
        setdata(data)
        setL(false)



    }
    useEffect(() => {
        api();
    }, [])

    
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