import { useState } from 'react';
import { Link } from 'react-router-dom';

const Search = ({ dat }: { dat: pop[] }) => {
    const [search, set] = useState<pop[]>([])

    function s(e: React.ChangeEvent<HTMLInputElement>) {
        if (e.target.value.trim().length > 0) {

            set(dat.filter(p => p.title.toLocaleLowerCase().includes(e.target.value.toLocaleLowerCase()) || p.description.toLocaleLowerCase().includes(e.target.value.toLocaleLowerCase()) || p.category.toLocaleLowerCase().includes(e.target.value.toLocaleLowerCase())))
        } else {
            set([])
        }




    }
const  lol=() =>set([...search].sort((a, b) => b.price - a.price))
    

    return (
        <>
            <div>
                <input type="text" onChange={(e) => s(e)} className='bg-white m-3 text-black' placeholder='search...' />
                <button type='button' onClick={() => set([...search].sort((a, b) => a.price - b.price)) 
                } className='mx-3'>sort (a-b)</button>
                <button onClick={lol} type='button'>sort (b-a)</button>
            </div>

            <ul className='list-unstyle'>
                {
                    search.length > 0 && search.map(search => <Link key={search.id} className='text-black py-5 text-start' to={`/Product/${search.id}`}><div>{search.title}</div></Link>)
                }
            </ul>
        </>
    );
};

export default Search;