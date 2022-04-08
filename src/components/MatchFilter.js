import {Link} from "react-router-dom";
const MatchFilter = ({pageName, matchFilter})=> {
    return (
        <>
            {
                ( matchFilter.length == 0 ) ?
                    <tr>
                        <td colSpan="4" className="text-center">검색 결과가 없습니다.</td>
                    </tr>
                    :
                    <>
                        {matchFilter.map((list, index) => (
                            <tr key={index+1}>
                                <td className="number">{index+1}</td>
                                <td className="text-left ellipsis">
                                    <Link to={`${pageName+list.id}`}>{list.title}</Link>
                                </td>
                                <td className="file">
                                    {
                                        list.file === ""
                                            ? "-"
                                            : <i className="fas fa-file"/>
                                    }
                                </td>
                                <td className="date">{list.date}</td>
                            </tr>
                        ))}
                    </>
            }
        </>
    );
}
export default MatchFilter;