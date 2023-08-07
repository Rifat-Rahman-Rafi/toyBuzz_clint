import { useContext, useState, useEffect } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import MyToyTable from "./MyToyTable";
import Swal from 'sweetalert2/dist/sweetalert2.js'
import 'sweetalert2/src/sweetalert2.scss'

const MyToy = () => {
  
    const { user } = useContext(AuthContext);
    const [toys, setToys] = useState([]);
    const [sortField, setSortField] = useState('price');
    const [sortOrder, setSortOrder] = useState('desc');

    useEffect(() => {
     
        fetch('http://localhost:8000/mytoys')
            .then(res => res.json())
            .then(data => {
                setToys(data);
            });
    }, []);

    const handleDeleteToy = id => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:8000/allToy/${id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        if (data.deletedCount > 0) {
                            Swal.fire(
                                'Deleted!',
                                'Your file has been deleted.',
                                'success'
                            );
                            const restToys = toys.filter(toy => toy._id !== id);
                            setToys(restToys);
                        }
                    });
            }
        });
    };

    // const handleSortChange = event => {
    //     const value = event.target.value;
    //     const [field, order] = value.split('-');
    //     setSortOrder(order);
    //     setSortField(field);
    // };


    const sortByAscending = () => {
        fetch(`http://localhost:8000/mytoys/ascending?email=${user?.email}`)
            .then(res => res.json())
            .then(data => setToys(data))
    };

    const sortByDescending = () => {
        fetch(`http://localhost:8000/mytoys/descending?email=${user?.email}`)
            .then(res => res.json())
            .then(data => setToys(data))
    };

    return (
        <div className="lg:mx-12 my-10">
            <div className="text-center">
                <h1 className="text-4xl  text-[#36D399] font-bold">My Toys</h1>
            
            </div>
            <div className="overflow-x-auto w-full text-right ">
                <div className="mb-4 my-10">
                   
                    <div>
                                <span className="ml-10 text-[#36D399] font-bold">Sort by price</span>
                                <button style={{background:"#36D399"}} className="btn btn-outline  text-white ml-4 w-40" onClick={sortByAscending}>Ascending</button>
                                <button style={{background:"#36D399"}} className="btn btn-outline text-white ml-4 w-40" onClick={sortByDescending}>Desscending</button>
                            </div>
                </div>
                <table className="table w-full mt-10">
                  
                    <thead>
                        <tr>
                            <th></th>
                            <th>Toy Name</th>
                            <th>Seller Name / Email</th>
                            <th>Sub-category</th>
                            <th>Price</th>
                            <th>Rating</th>
                            <th>Available Quantity</th>
                            <th>Description</th>
                            <th>Update button</th>
                            <th>Delete button</th>
                        </tr>
                    </thead>
                    <tbody>
                        {toys.map((toy, index) => (
                            <MyToyTable
                                key={toy._id}
                                toy={toy}
                                index={index + 1}
                                handleDeleteToy={handleDeleteToy}
                            />
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyToy;
