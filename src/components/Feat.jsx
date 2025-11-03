export default function Feat({links}) {
  
    return (

        <section className="bg-bonus py-40">
            <div className="container">
                <div className="flex j-between">

                    {links.map((curLink, index)=> (
        
                 <a key={index} href={curLink.url} className="flex align-center">
                     <div className="link">
                       <img src={curLink.img} alt={curLink.name} />
                     </div>
                    <h5>{curLink.name}</h5>
                </a>
        
       
    ))}

                </div>
            </div>
        </section>
    )
} 