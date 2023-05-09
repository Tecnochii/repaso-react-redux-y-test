import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { filterCharacter } from "../../redux/slices/characatersSlice"
import { useParams } from "react-router-dom"




const Character = () => {

      let dispatch=  useDispatch()

      let {id} = useParams()

    let characters = useSelector((store)=> store.characters.data)
    let character = useSelector((store)=> store.characters.characterFiltrado)
    useEffect(()=>{

        if(characters.length > 0){
            dispatch(filterCharacter(id))
        }
    },[characters])


    return (
        <>      
            <div >
                <p>{character.name}</p>
                <p>{character.house}</p>
                <p>{character.wand.wood}</p>
            </div>
        </>

    )
}

export default Character