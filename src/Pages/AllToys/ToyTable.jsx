import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";

const ToyTable = ({ toys }) => {
    const { user } = useContext(AuthContext);

    return (
        <>
            <tr>
                <td className="p-2 whitespace-nowrap">
                    <div className="md:flex items-center">
                        <img src={toys?.img} className="w-40 rounded-md mr-4" alt="" />
                        <div className="text-left font-bold">{toys?.toy_name}</div>

                    </div>
                </td>
                <td className="p-2 whitespace-nowrap">
                    <div className="font-medium text-gray-800">{toys?.sellerName}</div>
                </td>
                <td className="p-2 whitespace-nowrap">
                    <div className="text-left font-medium text-gray-700">{toys?.category}</div>
                </td>
                <td className="p-2 whitespace-nowrap">
                    <div className="text-sm text-center">${toys?.price}</div>
                </td>
                <td className="p-2 whitespace-nowrap">
                    <div className="text-left text-sm text-green-500">{toys?.quantity}
                    </div>
                </td>
                <td className="p-2 whitespace-nowrap text-center">
                    {user ?
                        <Link style={{background:"#36D399",color:"white"}} to={`/toydetails/${toys?._id}`} className="btn ">Details</Link> : <Link style={{background:"#36D399",color:"white"}}  to={`/login`} className="btn ">Details</Link>
                    }
                </td>
            </tr>
        </>
    );
};

export default ToyTable;