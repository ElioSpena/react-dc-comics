export default function Footer() {
    return <>
        <footer className="py-40">
            <div className="container">
                <div className="flex j-between">
                    <div>
                        <a className="sign-up-button">Sign-up now!</a>
                    </div>

                    <nav className="flex align-center gap-25">
                        <span>follow us</span>
                        <div>
                            <ul className="flex gap-10">
                                <li><a href=""><img src="/public/footer-facebook.png" alt="facebook-img" /></a></li>
                                <li><a href=""><img src="/public/footer-periscope.png" alt="periscope-img" /></a></li>
                                <li><a href=""><img src="/public/footer-pinterest.png" alt="pinterest-img" /></a></li>
                                <li><a href=""><img src="/public/footer-twitter.png" alt="twitter-img" /></a></li>
                                <li><a href=""><img src="/public/footer-youtube.png" alt="youtube-img" /></a></li>

                            </ul>

                        </div>
                    </nav>

                </div>
            </div>


        </footer>




    </>
}