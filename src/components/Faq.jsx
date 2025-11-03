import List from "./List";

export default function Faq({faqNav}) {


const faqNavJsx = faqNav.map((curItem) => {

        const firstLetter = curItem.name[0].toUpperCase();
        const restOfName = curItem.name.slice(1);
        const capitalizedWord = firstLetter + restOfName;


    if(curItem.type === "title") {
      return  ( <li key={curItem.id}>
        <h4>{curItem.name.toUpperCase()}</h4>
          </li>)
    } else {
       return  (
         <List key={curItem.id} url={curItem.url} name={capitalizedWord}/>)
    }
    
});

const faqNavCol1 = faqNavJsx.slice(0, 11);
const faqNavCol2 = faqNavJsx.slice(11,23);
const faqNavCol3 = faqNavJsx.slice(23);

    return (
        <section className="faq-bg">
            <div className="container">
                <div className="flex">

                    <nav className="w-60 py-40 flex gap-25">
                       <ul className="flex flex-col flex-wrap">

                      {faqNavCol1}

                        </ul>

                        <ul>
                        {faqNavCol2}
                        </ul>

                        <ul>
                        {faqNavCol3}
                        </ul>
                    </nav>

            <div className="w-40 logo-bg">

            </div>

                </div>

            </div >
        </section >
    );
}