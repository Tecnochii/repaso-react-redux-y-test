import { type } from "@testing-library/user-event/dist/type";
import { useSelector } from "react-redux"


export function mensaje(msg) {

    if (typeof msg != "string") {
        return "Dato no valido, no se pueden enviar numeros!"
    }

    return msg;
}

export function suma(numero1, numero2) {
    return numero1 + numero2;

}


const Characters = () => {

    let characters = useSelector((store) => store.characters.data)



    return (
        <>
            <h1>TITULO</h1>
            {characters.map(character => {
                return (
                    <div key={character.id}>
                        <p>{character.name}</p>
                        <p>{character.house}</p>
                        <p>{character.wand.wood}</p>
                    </div>
                )
            })

            }

        </>

    )
}

export default Characters