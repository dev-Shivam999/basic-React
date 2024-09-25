
import  { useEffect, useState } from 'react';
import Item from './Item';
import Loading from './L';
import { api } from './api';

const Home = () => {
    const [dat, setdata] = useState<pop[]>([])
    const [L, setL] = useState<boolean>(true)
    async function api2() {

      const data=await api(false)
        
        setdata(data)
        setL(false);



    }
    useEffect(() => {
        api2();
    }, [])

    
    return (
        <div className='row gap-3 w-100'>
            {
                L ? <Loading />:    dat?.length>0&&dat.map((p,i)=><Item image={p.image} category={p.category} id={p.id} price={p.price} description={p.description} title={p.title} key={i}/>)
            }
        </div>
    );
};

export default Home;