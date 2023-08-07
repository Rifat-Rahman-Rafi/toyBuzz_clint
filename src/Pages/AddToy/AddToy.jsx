import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import Swal from 'sweetalert2/dist/sweetalert2.js'
import 'sweetalert2/src/sweetalert2.scss'

const AddToy = () => {
 
    const { user } = useContext(AuthContext);


    const handleAddToy = (event) => {
        event.preventDefault();
        const from = event.target;
        const photo = from.photo.value;
        const name = from.name.value;
        const sellerName = user?.displayName;
        const email = user?.email;
        const category = from.category.value;
        const price = from.price.value;
        const rating = from.rating.value;
        const quantity = from.quantity.value;
        const description = from.description.value;

        const addToys = {
            img: photo,
            toy_name: name,
            sellerName: sellerName,
            email,
            price: price,
            category: category,
            rating: rating,
            quantity: quantity,
            description: description,
        }

        fetch('http://localhost:8000/postallToy', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(addToys)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                Swal.fire({
                    title: 'Successfully Add Toys',
                    text: 'Do you want to continue',
                    icon: 'success',
                    confirmButtonText: 'Cool'
                })
            })

    }
    return (
        <div>
            <div className="text-center my-8">
                <h1 className="text-4xl  text-[#36D399] font-bold">Add Toys</h1>
               
            </div>
            <div className="w-9/12 mx-auto  border-2  p-10 my-10">
                <h1 className="text-center text-3xl my-6 font-semibold text-[#36D399]">Toy Information</h1>
                <form onSubmit={handleAddToy}>

                <div className="form-control">
                            <label className="label">
                                <span className="label-text">Seller Name</span>
                            </label>
                            <input type="text" defaultValue={user?.displayName} name="sellerName" placeholder="seller name" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Seller Email</span>
                            </label>
                            <input type="text" defaultValue={user?.email} name="sellerEmail" placeholder="seller Email" className="input input-bordered" />
                        </div>


                    <div >
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Photo Url</span>
                            </label>
                            <input type="text" name="photo" placeholder="photo url" className="input input-bordered" required/>
                        </div>

                    </div>
                    <div className="">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Toy Name</span>
                            </label>
                            <input type="text" name="name" placeholder="name" className="input input-bordered" required/>
                        </div>
                
                    </div>
                    <div className="">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Sub-category</span>
                            </label>
                            <input type="text" name="category" placeholder="sub-category" className="input input-bordered" required/>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Price</span>
                            </label>
                            <input type="text" name="price" placeholder="price" className="input input-bordered" required/>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Rating</span>
                            </label>
                            <input type="text" name="rating" placeholder="rating" className="input input-bordered" />
                        </div>

                    </div>
                    <div className="mb-10">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Available quantity</span>
                            </label>
                            <input type="text" name="quantity" placeholder="available quantity" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Detail description</span>
                            </label>
                            <input type="text" name="description" placeholder="detail description" className="input input-bordered" />
                        </div>

                    </div>
                    <div className="mb-10">
                        <input style={{color:"white"}} className="btn btn-block bg-[#36D399]" type="submit" value="Add Toy" />

                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddToy;