import  Footer  from './components/Footer';
import Hero from './components/Hero';
import Bonus from './components/Bonus';

import navList from "./js/navList";
import List from './components/List';

import comics from "./js/comics";
import Card from './components/Card';

export default function App() {

  return (
    <>
       <header>
            <div className="container">
            <div className="flex j-between py-10">
                <div>
                    <img src="/dc-logo.png" alt="dc-logo" />
                </div>
                <nav className="flex header-nav">
                    <ul className="flex align-center gap-25">

                     {navList.map((curItem, index)=>(<List key={index} url={curItem.url} name={curItem.name} />))}
                     
                    </ul>
                </nav>
            </div >
            </div>
        </header >

      <Hero />

        <main>
            
            <section className="container">
                
                 <h3 className="badge-title">Current Series</h3>

                  <section className="flex flex-wrap gap-10 align-center j-center">
               
                          {comics.map((curComic)=>(<Card key={curComic.id} description={curComic.description} thumb={curComic.thumb} series={curComic.series} />)) }

                  </section>

            <div className="text-center">
                <button>Load More</button>
            </div>

           </section>
        </main>


      <Bonus />
      <Footer />
    </>
  )
}


