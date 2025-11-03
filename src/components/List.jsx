export default function List({name, url, active}){
    return (<li className={`${active ? "active" : ""}`}>
    <a href={url}>{name}</a>
    </li>)
}