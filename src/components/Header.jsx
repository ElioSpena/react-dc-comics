
export default function Header() {


    return <>
        <header className="container">
            <div className="flex j-between py-10">
                <div>
                    <img src="/dc-logo.png" alt="dc-logo" />
                </div>
                <nav className="flex header-nav">
                    <ul className="flex align-center gap-25">
                        <li><a href="">CHARACTERS</a></li>
                        <li><a href="">COMICS</a></li>
                        <li><a href="">MOVIES</a></li>
                        <li><a href="">TV</a></li>
                        <li><a href="">GAMES</a></li>
                        <li><a href="">COLLECTIBLES</a></li>
                        <li><a href="">VIDEOS</a></li>
                        <li><a href="">FANS</a></li>
                        <li><a href="">NEWS</a></li>
                        <li><a href="">SHOP</a></li>
                    </ul>
                </nav>
            </div >
        </header >
    </>

}