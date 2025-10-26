
export default function Header() {


    return (
        <header>
            <div className="container">
            <div className="flex j-between py-10">
                <div>
                    <img src="/dc-logo.png" alt="dc-logo" />
                </div>
                <nav className="flex header-nav">
                    <ul className="flex align-center gap-25">
                        <li><a href="">characters</a></li>
                        <li><a href="">comics</a></li>
                        <li><a href="">movies</a></li>
                        <li><a href="">tv</a></li>
                        <li><a href="">games</a></li>
                        <li><a href="">collectibles</a></li>
                        <li><a href="">videos</a></li>
                        <li><a href="">fans</a></li>
                        <li><a href="">news</a></li>
                        <li><a href="">shop</a></li>
                    </ul>
                </nav>
            </div >
            </div>
        </header >
    );

}