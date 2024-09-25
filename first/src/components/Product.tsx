
import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { api } from './api';
import Loading from './L';
import Pro from './Pro';

const Product = () => {
    const [dat, setdata] = useState<pop>()
    const [L, setL] = useState<boolean>(true)
    const { id } = useParams()
    async function api2() {
        const data = await api(true, id)
        setdata(data)
        setL(false)
    }
    useEffect(() => {
        api2()
    }, [])
    
    return (
        <div>

            <Link style={{ position: "fixed", top: "0px", left: "0px" }} to={'/'}>Home</Link>
            {
                L ? <Loading /> : dat && <Pro dat={dat} key={dat.id} />
            }

        </div>
    );
};

export default Product;