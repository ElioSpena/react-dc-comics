import Header from './components/Header';
import Main from './components/Main';
import  Footer  from './components/Footer';

import {headerNav, links, faqNav, socialLinks} from './assets/data/navlist';
import comics from './assets/data/comics';


export default function App() {

  return (
    <>
      <Header navList={headerNav}/>
      <Main comics={comics} links={links} />
      <Footer faqNav={faqNav} socialLinks={socialLinks}/>
    </>
  )
}


