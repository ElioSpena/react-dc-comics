
export default function Header() {


    return <>
        <header className="container">
            <div className="flex j-between py-10">
                <div>
                    <img src="/dc-logo.png" alt="dc-logo" />
                </div>
                <nav className="flex">
                    <ul className="flex align-center gap-25">
                        <li><a href="">item</a></li>
                        <li><a href="">item</a></li>
                        <li><a href="">item</a></li>
                        <li><a href="">item</a></li>
                        <li><a href="">item</a></li>
                        <li><a href="">item</a></li>
                    </ul>
                </nav>
            </div >
        </header >
    </>

}