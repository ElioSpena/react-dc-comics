import Comics from "./Comics";
import Feat from "./Feat";
import Hero from "./Hero";

export default function Main({comics, links}) {

    return (<>
     
        <main>
           
            <Hero />
      
            <section className="container py-40">
                
                 <h3 className="badge-title">Current Series</h3>

                  <ul className="flex flex-wrap gap-10 align-center j-center">

                 { comics.map(({id, description, thumb, series})=> (

                     <Comics 
                     key={id}
                     description={description}
                     thumb={thumb}
                     series={series}
                     />

                  )) 
                  }

                  </ul>

            <div className="text-center">
                <button>Load More</button>
            </div>

           </section>

           <Feat links={links} />
        </main>
       
   </> );
}