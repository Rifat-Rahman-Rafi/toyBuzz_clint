import { useLoaderData } from "react-router-dom";
import ToyTable from "./ToyTable";
import { useState } from "react";

 
 const AllToys = () => {
     const allToys = useLoaderData();
     const [toys, setToys] = useState(allToys)
     const handleSearch = (e) =>{
         e.preventDefault();
         const form = e.target;
         const searchText = form.search.value;

         console.log(searchText);
         fetch(`http://localhost:8000/toySearchBytitle/${searchText}`)
         .then(res => res.json())
         .then(data => setToys(data))

         
     }
   
     return (
         <div>
             
             <section className="antialiased bg-gray-100 text-gray-600 py-10 mb-10 px-4">
                 <div className="flex flex-col justify-center">
 
                     <div className="w-full max-w-6xl mx-auto bg-white shadow-lg rounded-sm border border-gray-200">
                         <header className="px-5 py-4 border-b border-gray-100 flex justify-between items-center">
                             <h2 className="font-semibold text-gray-800 w-1/2">All Toys</h2>
                             <form onSubmit={handleSearch} className="input-group flex justify-end">
                                 <input type="text" name="search" placeholder="Search by name" className="input input-bordered" />
                                 <button className="btn btn-square">
                                     <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                                 </button>
                             </form>
                         </header>
                         <div className="p-3">
                             <div className="overflow-x-auto">
                                 <table className="table-auto w-full">
                                     <thead className="text-xs font-semibold uppercase text-gray-400 bg-gray-50">
                                         <tr>
                                             <th className="p-2 whitespace-nowrap">
                                                 <div className="font-semibold text-left">Toy Name</div>
                                             </th>
                                             <th className="p-2 whitespace-nowrap">
                                                 <div className="font-semibold text-left">Seller</div>
                                             </th>
                                             <th className="p-2 whitespace-nowrap">
                                                 <div className="font-semibold text-left">Category</div>
                                             </th>
                                             <th className="p-2 whitespace-nowrap">
                                                 <div className="font-semibold text-center">Price</div>
                                             </th>
                                             <th className="p-2 whitespace-nowrap">
                                                 <div className="font-semibold text-left">Quantity</div>
                                             </th>
                                             <th className="p-2 whitespace-nowrap">
                                                 <div className="font-semibold text-center">Details</div>
                                             </th>
                                         </tr>
                                     </thead>
                                     <tbody className="text-sm divide-y divide-gray-100">
                                         {
                                             toys.map(toys => <ToyTable key={toys._id} toys={toys}></ToyTable>)
                                         }
                                     </tbody>
                                 </table>
                             </div>
                         </div>
                     </div>
                 </div>
             </section>
         </div>
     );
 };
 
 export default AllToys;
