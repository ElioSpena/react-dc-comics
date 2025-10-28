import Faq from "./Faq"

export default function Footer() {
    const socialLinks = [
        {
            id: 1,
            name: "facebook",
            img: "/footer-facebook.png",
            url: "" ,
                       
        },
            {
            id: 2,
            name: "periscope",
            img: "/footer-periscope.png",
            url: ""            
        },
            {
            id:3,
            name: "pinterest",
            img: "/footer-pinterest.png",
            url: ""            
        },
            {
            id:4,
            name: "twitter",
            img: "/footer-twitter.png",
            url: ""            
        },
            {
            id:5,
            name: "youtube",
            img: "/footer-youtube.png",
            url: ""            
        },
    ]

    const socialLinksJsx = socialLinks.map((item)=>(
         <li key={item.id}>
            <a href={item.url}><img src={item.img} alt={item.name} /></a>
        </li>
    ));


    return (

   <footer>

    <Faq />

        <div className="py-40">
            <div className="container">
                <div className="flex j-between align-center">
                    <div>
                        <a className="sign-up-button">Sign-up now!</a>
                    </div>

                    <nav className="flex align-center gap-25">
                        <span>follow us</span>
                        <div>
                            <ul className="flex gap-10">
                                {socialLinksJsx}
                            </ul>

                        </div>
                    </nav>

                </div>
            </div>

        </div>

     </footer>
   
    );
     
}

