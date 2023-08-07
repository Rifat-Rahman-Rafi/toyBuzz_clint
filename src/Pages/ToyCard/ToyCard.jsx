import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import Swal from "sweetalert2";
import Rating from "react-rating";
import { FaRegStar, FaStar } from "react-icons/fa";


const ToyCard = ({ toy }) => {
    const { user } = useContext(AuthContext);
    const showToast = () => {
        const Toast = Swal.mixin({
            toast: true,
            position: 'top-end',
            showConfirmButton: false,
            timer: 3000,
            timerProgressBar: true,
            didOpen: (toast) => {
                toast.addEventListener('mouseenter', Swal.stopTimer)
                toast.addEventListener('mouseleave', Swal.resumeTimer)
            }
        })

        Toast.fire({
            icon: 'success',
            title: 'You have to log in first to view details'
        })
    }
    return (
        <div className="container">
            
            <div className="card card-side bg-base-100 shadow-xl grid md:grid-cols-2 items-center justify-center mb-4">
                <figure className="w-full"><img className="w-full h-64 rounded-lg" src={toy.img} alt="Movie" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{toy.name}</h2>
                    <p>Price: ${toy.price}</p>
                    <p>Rating: {toy.rating}</p>
                    <Rating
                        placeholderRating={toy.rating}
                        readonly
                        emptySymbol={<FaRegStar></FaRegStar>}
                        placeholderSymbol={<FaStar className="text-warning"></FaStar>}
                        fullSymbol={<FaStar></FaStar>}
                    />
                    <div className="card-actions justify-start">
                        {user ?
                            <Link to={`/toydetails/${toy?._id}`} className="btn border-0  bg-[#36D399] ">Details</Link> : <Link to={`/toydetails/${toy?._id}`} onClick={showToast} className="btn  bg-[#36D399]   border-0">Details</Link>
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ToyCard;