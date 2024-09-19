import ModalAnimal from "@/components/modalAnimal/page";
import ModalCategory from "@/components/modalCategory/page";




export default function Home() {
  return (
   <div className="bg-black h-screen px-10" >
    
         <section className="flex justify-between items-center pt-16"> 

          <p className="text-white" >Category</p>

        <div className="flex gap-3">
        <ModalAnimal/>
        <ModalCategory/>
        </div>


        </section>

   </div>
  );
}
