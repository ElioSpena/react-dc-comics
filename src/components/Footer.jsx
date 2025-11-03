import Faq from "./Faq"

export default function Footer({faqNav, socialLinks}) {

    const socialLinksJsx = socialLinks.map((item)=>(
         <li key={item.id}>
            <a href={item.url}><img src={item.img} alt={item.name} /></a>
        </li>
    ));


    return (

   <footer>

    <Faq faqNav={faqNav}/>

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

