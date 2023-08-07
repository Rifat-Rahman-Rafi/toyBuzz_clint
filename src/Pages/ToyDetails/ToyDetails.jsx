import { Link, useLoaderData } from "react-router-dom";
import Rating from "react-rating";
import { FaRegStar, FaStar } from "react-icons/fa";

const ToyDetails = () => {

    const toyDetails = useLoaderData();
    const { sellerName, email, toy_name, img, category, price, quantity, rating, description } = toyDetails;
    return (
        <div className="p-4 md:w-8/12 mx-auto " >

            <div className=" bg-base-100 border ">
               <img  src={img} style={{height:"500px",width:"500px"}}/>
                <div className="card-body">
                    <h2 className="card-title text-2xl">Toy Name : 
                        {toy_name}
                        <div className="badge bg-[#36D399] ">Category : {category}</div>
                    </h2>
                    <p className="font-bold">Description : {description}</p>
                    <p className="font-bold">Price: ${price}</p>
                    <p className="font-bold">Quantity: {quantity}</p>
                    <p className="font-bold  text-sm">SellerName : {sellerName}</p>
                    <div className="font-bold" >Email: {email}</div>

                    <div className="card-actions  ">
                        <div className=" font-bold ">Rating: </div>
                        <div><Rating


                        placeholderRating={rating}
                        readonly
                        emptySymbol={<FaRegStar></FaRegStar>}
                        placeholderSymbol={<FaStar className="text-warning"></FaStar>}
                        fullSymbol={<FaStar></FaStar>}
                    /></div>
                    </div>

                    <Link style={{color:"white"}} to='/allToys' className="mb-8  btn  bg-[#36D399] ">  Previous </Link>
                </div>



             
            </div>

  

            
        </div>
    );
};

export default ToyDetails;