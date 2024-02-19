import datainfo from '../../data/data.json';

export default function Goods() {
    return (
        <>
            <h2 className='navivartitle'>Goods</h2>
            <div className='newbooks col-row d-flex '>
                {datainfo.Goods.map((book, index) => (
                    <div key={index}>
                        <img className='navivarimg' src={book.src} alt={book.alt} />
                        <h4>{book.h4}</h4>
                        <p>{book.p}</p>
                    </div>
                ))
                }

            </div>
        </>
    );
}
