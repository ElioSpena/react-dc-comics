export default function Card({description, thumb, series}) {
   return ( <div className={`col py-10`}>
            <a href={description}>
                <img src={thumb} alt={series} />
                 <h5>{series}</h5>
            </a>
        </div>)
}