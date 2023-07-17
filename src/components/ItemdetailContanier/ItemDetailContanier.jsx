import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../firebase/config";


const ItemDetailContainer = () => {

    const [item, setItem] = useState(null);
    const id = useParams().id;
    console.log('datailcont', id)
    useEffect(() => {
      const docRef = doc(db, "productos", id);
      getDoc(docRef)
        .then((resp) => {
          setItem(
            { ...resp.data(), id: resp.id }
          );
        })
      }, [id])
      return (
      console.log(item)
  )
}

export default ItemDetailContainer

