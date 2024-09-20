'use client'

import ModalAnimal from "@/components/modalAnimal/page";
import ModalCategory from "@/components/modalCategory/page";
import Image from "next/image";
import { useEffect, useState } from "react";


type TAnimal = {
  _id: string,
  name: string,
  image: string,
  category: string
}



const Home = () => {
  const [categorys, setCategory] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);


  const [animals, setAnimal] = useState(null);
  const [animalLoading, setAnimalLoading] = useState(true);
  const [animalError, setAnimalError] = useState(null);


  useEffect(() => {

    const fetchCategoryData = async () => {
      try {
        const res = await fetch('http://localhost:5000/api/v1/category/all');

        const data = await res.json();
        setCategory(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchCategoryData();
  }, []);




  useEffect(() => {

    const fetchCategoryData = async () => {
      try {
        const res = await fetch('http://localhost:5000/api/v1/animal/all');

        const data = await res.json();
        setAnimal(data);
      } catch (err) {
        setAnimalError(err.message);
      } finally {
        setAnimalLoading(false);
      }
    };

    fetchCategoryData();
  }, []);




console.log('animals', animals?.data)











  const handleCategory = (category:string) => {

    // console.log(category)

      const fetchCategoryData = async () => {
        try {
          const res = await fetch(`http://localhost:5000/api/v1/animal/all?category=${category}`);
  
          const data = await res.json();
          setAnimal(data);
        } catch (err) {
          setAnimalError(err.message);
        } finally {
          setAnimalLoading(false);
        }
      };
  
      fetchCategoryData();
   
  
  }



  return (
    <div className="bg-black h-screen px-10" >

      <section className="flex flex-col md:flex-row justify-between items-center pt-16">

        <div className="flex gap-4 ">
          {
            categorys?.data?.map((category: { name: string, _id: string }, ) => <div key={category._id} >

              <button onClick={()=> handleCategory(category.name)} className="bg-black border border-green-400  text-md text-white px-6 py-2 rounded-3xl transition " >
                {category.name}
              </button>

            </div>)
          }
        </div>



        <div className="flex gap-3 ">
          <ModalAnimal />
          <ModalCategory />
        </div>


      </section>



      {/* animals show  */}

       <div className="mt-20 flex gap-6 pb-10 ">

           {
             animals?.data?.map((animal:TAnimal) => <div key={animal._id} >
                    
                     <div className="w-[160px] h-[191px] rounded-md border border-[#141414] flex justify-center items-center bg-[#050505]">
                     <Image
                     src={animal.image}
                     width={100}
                     height={100}
                     alt="animal"
                     />
                     </div>

                     <p className="text-white uppercase text-[18px] text-center mt-1">{animal.name}</p>
                     
             </div>)
           }
       </div>

    </div>
  );
}



export default Home 
