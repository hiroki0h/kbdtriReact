const Pagination = ({total, current, setCurrent, perPage})=>{
    const page = 5;
    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(total / perPage); i++) {
        pageNumbers.push(i);
    }
    return (
        <div className="pagination">
            <ul>
                {total > 5 ?
                    <li className="page page_prev">
                        <button type="button" onClick={() => setCurrent(1)}><i className="fas fa-angle-left"/>첫 페이지</button>
                    </li>
                    : <></>
                }
                {pageNumbers.map((number) => (
                    <li key={number} className={`${current=== number? 'on' : ''}`}>
                        <button type="button" onClick={() => setCurrent(number)}
                                className="page-link">
                            {number}
                        </button>
                    </li>
                ))}
                {total > 5 ?
                    <li className="page page_next">
                        <button type="button" onClick={() => setCurrent(pageNumbers.length)}><i className="fas fa-angle-right"/>마지막 페이지</button>
                    </li>
                    : <></>
                }
            </ul>
        </div>
    );
}
export default Pagination;