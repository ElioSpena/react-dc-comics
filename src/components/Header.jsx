import List from "./List";

export default function Header({navList}) {

    return (
        <header>
            <div className="container">
            <div className="flex j-between py-10">
                <div>
                    <a href="http://localhost:5173/comics">
                         <img src="/img/dc-logo.png" alt="dc-logo" />
                    </a>
                   
                </div>
                <nav className="flex header-nav">
                    <ul className="flex align-center gap-25">

                       {navList.map((curLink, index) => {
                        return (<List 
                             key={index}
                             name={curLink.name} 
                             url={curLink.url}
                             active={curLink.active}
                             />)
                       })}
                     
                    </ul>
                </nav>
            </div >
            </div>
        </header >
    );

}