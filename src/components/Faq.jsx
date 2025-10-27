export default function Faq() {
const faqNav = [
    {
        id: 1,
        type: 'title',
        name: 'dc comics',
        url: ""
    },
    {
        id: 2,
        type: 'link',
        name: 'characters',
        url: ""
    },
    {
        id: 3,
        type: 'link',
        name: 'comics',
        url: ""
    },
    {
        id: 4,
        type: 'link',
        name: 'movies',
        url: ""
    },
    {
        id: 5,
        type: 'link',
        name: 'tv',
        url: ""
    },
    {
        id: 6,
        type: 'link',
        name: 'games',
        url: ""
    },
    {
        id: 7,
        type: 'link',
        name: 'videos',
        url: ""
    },
    {
        id: 8,
        type: 'link',
        name: 'news',
        url: ""
    },
    
    {
        id: 9,
        type: 'title',
        name: 'shop',
        url: ""
    },
    {
        id: 10,
        type: 'link',
        name: 'shop dc',
        url: ""
    },
    {
        id: 11,
        type: 'link',
        name: 'shop dc collectibles',
        url: ""
    },
    
    {
        id: 12,
        type: 'title',
        name: 'dc',
        url: ""
    },
    {
        id: 13,
        type: 'link',
        name: 'terms of use',
        url: ""
    },
    {
        id: 14,
        type: 'link',
        name: 'privacy policy (new)',
        url: ""
    },
    {
        id: 15,
        type: 'link',
        name: 'ad choices',
        url: ""
    },
    {
        id: 16,
        type: 'link',
        name: 'advertising',
        url: ""
    },
    {
        id: 17,
        type: 'link',
        name: 'jobs',
        url: ""
    },
    {
        id: 18,
        type: 'link',
        name: 'subscriptions',
        url: ""
    },
    {
        id: 19,
        type: 'link',
        name: 'talent workshops',
        url: ""
    },
    {
        id: 20,
        type: 'link',
        name: 'cpsc certificates',
        url: ""
    },
    {
        id: 21,
        type: 'link',
        name: 'ratings',
        url: ""
    },
    {
        id: 22,
        type: 'link',
        name: 'shop help',
        url: ""
    },
    {
        id: 23,
        type: 'link',
        name: 'contact us',
        url: ""
    },

    {
        id: 24,
        type: 'title',
        name: 'sites',
        url: ""
    },
    {
        id: 25,
        type: 'link',
        name: 'dc',
        url: ""
    },
    {
        id: 26,
        type: 'link',
        name: 'mad magazine',
        url: ""
    },
    {
        id: 27,
        type: 'link',
        name: 'dc kids',
        url: ""
    },
    {
        id: 28,
        type: 'link',
        name: 'dc universe',
        url: ""
    },
    {
        id: 29,
        type: 'link',
        name: 'dc power visa',
        url: ""
    },
];


const faqNavJsx = faqNav.map((curItem) => {
    let capitalizedWord = [];
    for(let i=0; i < curItem.name.length; i++ ) {
        const firstWord = curItem.name[0].toUpperCase();
        const restOfWord = curItem.name.slice(1);
        capitalizedWord = firstWord  + restOfWord;
    }


    if(curItem.type === "title") {
      return  ( <li key={curItem.id}>
        <h4>{curItem.name.toUpperCase()}</h4>
          </li>)
    } else {
       return   ( <li key={curItem.id}>
            <a href={curItem.url}>{capitalizedWord}</a>
        </li>)
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