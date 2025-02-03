import { useState } from "react"
export default  function App(){
const [albumList setAlbumList] = useState(["Tunnel", "Dio lo sa", "è finita la pace","Containers", "Mr simpatia","Noi, loro ,gli altri", "Mi fist"])
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

    <form ></form>
  </div>
)

}
