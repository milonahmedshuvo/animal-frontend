'use client'


import { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form"

type Inputs = {
    name: string
    image: string
    category: string
}


export default function ModalAnimal() {
    const [showModal, setShowModal] = useState(false);
    const { register, handleSubmit } = useForm<Inputs>()


    const onSubmit: SubmitHandler<Inputs> = (data) => {
        console.log(data)
    }



    return (
        <div className="flex justify-center ">
            {/* Button to trigger modal */}
            <button
                className="bg-black border  text-md text-white px-6 py-2 rounded-3xl transition "
                onClick={() => setShowModal(true)}
            >
                Add Animal
            </button>




            {/* Modal */}
            {showModal ? (
                <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50">
                    <div className="bg-white rounded-lg shadow-lg p-6 w-96">
                        {/* Modal header */}
                        <div className="flex justify-between items-center mb-4">
                            <h2 className="text-xl font-semibold">Add Animal</h2>
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
                                    className="w-full p-2 border rounded-md mb-4 focus:outline-none"
                                    placeholder="Enter animal name"
                                    {...register('name')}
                                />

                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    image
                                </label>
                                <input
                                    type="file"
                                    className="w-full p-2 border rounded-md mb-4"
                                    {...register('image')}
                                />

                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Select Category 
                                </label>

                                <select
                                    className="block w-full px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm appearance-none focus:outline-none mb-4"

                                    {...register('category', { required: true })}
                                >
                                    <option value="" disabled>
                                        -- Select an Category --
                                    </option>
                                    <option value="option1">Option 1</option>
                                    <option value="option2">Option 2</option>
                                    <option value="option3">Option 3</option>
                                </select>











                                <button className="bg-black text-white px-4 py-2 rounded w-full transition">
                                    Create Animal
                                </button>

                            </form>
                        </div>


                    </div>
                </div>
            ) : null}
        </div>
    );
}
