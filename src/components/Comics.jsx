export default function Comics({id, description, thumb, series}) {
    return ( 
        <li className="col py-10">
            <a href={description}>
                <img src={thumb} alt={series} />
                 <h5>{series}</h5>
            </a>
        </li>)
}