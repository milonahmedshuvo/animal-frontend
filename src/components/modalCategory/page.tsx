'use client'


import { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form"

type Inputs = {
    name: string
}


export default function ModalCategory() {
    const [showModal, setShowModal] = useState(false);
    const { register, handleSubmit } = useForm<Inputs>()


    const onSubmit: SubmitHandler<Inputs> = (data) => {
        console.log(data)
    }



    return (
        <div className="flex justify-center ">
            {/* Button to trigger modal */}
            <button
                className="bg-black border  text-md text-white px-4 py-2 rounded-3xl  transition"
                onClick={() => setShowModal(true)}
            >
                Add Category
            </button>




            {/* Modal */}
            {showModal ? (
                <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50">
                    <div className="bg-white rounded-lg shadow-lg p-6 w-96">
                        {/* Modal header */}
                        <div className="flex justify-between items-center mb-4">
                            <h2 className="text-xl font-medium">Add Category</h2>
                            <button
                                className="text-gray-500 hover:text-gray-800"
                                onClick={() => setShowModal(false)}
                            >
                                ✕
                            </button>
                        </div>





                        {/* Modal body with text inputs */}
                        <div>

                            <form onSubmit={handleSubmit(onSubmit)}>

                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Name
                                </label>
                                <input
                                    type="text"
                                    className="w-full p-2 border rounded-md mb-4"
                                    placeholder="Enter category name"
                                    {...register('name')}
                                />

                                

                                <button className="bg-black text-white px-4 py-2 rounded w-full transition">
                                    Save
                                </button>

                            </form>
                        </div>


                    </div>
                </div>
            ) : null}
        </div>
    );
}
