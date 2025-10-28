export default function Header() {
const navList = [
  { name: "characters", url: "/characters" },
  { name: "comics", url: "/comics" },
  { name: "movies", url: "/movies" },
  { name: "tv", url: "/tv" },
  { name: "games", url: "/games" },
  { name: "collectibles", url: "/collectibles" },
  { name: "videos", url: "/videos" },
  { name: "fans", url: "/fans" },
  { name: "news", url: "/news" },
  { name: "shop", url: "/shop" }
];

const navListJsx = navList.map((item, index) => {
    return  <li key={index}>
    <a href={item.url}>{item.name}</a>
    </li>
});

    return (
        <header>
            <div className="container">
            <div className="flex j-between py-10">
                <div>
                    <img src="/dc-logo.png" alt="dc-logo" />
                </div>
                <nav className="flex header-nav">
                    <ul className="flex align-center gap-25">

                       {navListJsx}
                     
                    </ul>
                </nav>
            </div >
            </div>
        </header >
    );

}