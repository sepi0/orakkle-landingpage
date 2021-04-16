export default function ProductCard(props) {
    return(
        <div className={"w-300px h-390px bg-myBlue rounded-lg shadow-md justify-center px-10 py-10 text-white flex flex-col justify-between"}>
            <h1 className={"text-center text-4xl font-archivo"}>{props.title}</h1>
            <ul>
                {props.bulletPoints.map((bp) => <li className={"text-center list-disc"}>{bp}</li>)}
            </ul>
            <div className={"bg-white py-4 rounded-lg transition duration-200 ease-in-out transform hover:scale-110"}>
                <p className={"text-center text-myBlue font-archivo"}>{props.price}</p>
            </div>
        </div>
    )
}