export default function Bonus() {
    const links = [
        {
            name:"Digital Comics",
            img:"/buy-comics-digital-comics.png", 
            url:"",
        },
        {
            name:"Dc Merchandise",
            img:"/buy-comics-merchandise.png",
            url:""
        },
        {
            name:"Subscription",
            img:"/buy-comics-subscriptions.png",
            url:"",
        },
        {
            name:"Comic Shop Locator",
            img:"/buy-comics-shop-locator.png",
            url:""
        },
        {
            name:"Dc Power Visa",
            img:"/buy-dc-power-visa.svg",
            url:""
        }
    ];

    const linkJsx = links.map((curItem, index)=> (
        
        <a href={curItem.url} className="flex align-center" key={index}>
            <div className="link">
              <img src={curItem.img} alt={curItem.name} />
            </div>
           <p>{curItem.name}</p>
        </a>
        
       
    ));
   
    return (

        <section className="bg-bonus py-40">
            <div className="container">
                <div className="flex j-between">

                    {linkJsx}

                </div>
            </div>
        </section>
    )
} 