import { useState } from "react"
export default  function App(){
  const [albumList, setAlbumList] = useState(["Tunnel", "Dio lo sa", "è finita la pace","Containers", "Mr simpatia","Noi, loro ,gli altri", "Mi fist"])
  const [albumName, setAlbumName]= useState("")
  const handleSubmit = (e)=>{
    e.preventDefault();
  }
 return(
  <div>
    <h1>ALbum da Comprare</h1>
    <ul>
      {
        albumList.map((album, index)=>(
          <li key= {index}>{album}</li>
        ))}
    </ul>
    <br />
    <h4>INSERICI UN NUOVO ALBUM</h4>
    <form onSubmit={handleSubmit}>
        <input type="text" value={albumName} onChange={(e)=>{setAlbumName(e.target.value);}}/>
    </form>
    <button type="submit">Inserisci</button>
  </div>
)

}
