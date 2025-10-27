
import comics from "../comics";

export default function Main() {
      const comicsJsx = comics.map((item)=> (
        <li  key={item.id} className="col py-10">
            <a href={item.description}>
                <img src={item.thumb} alt={item.series} />
                 <h5>{item.series.toUpperCase()}</h5>
            </a>
        </li>
     )); 

    return (
     
        <main className="py-40">
            
            <div className="container">
                 <h3 className="badge-title">Current Series</h3>
            <ul className="flex flex-wrap gap-10 align-center j-center">
               
           {  comicsJsx }

            </ul>

            </div>
        </main>
       
    );
}