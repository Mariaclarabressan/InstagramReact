export default function Header(){
    return(
        <div className="topo borda">
        <div className="topo-container">
            <div className="logo">
                <ion-icon name="logo-instagram"></ion-icon>
                <div className="separador"></div>
                <img src="./assets/img/logo.png" alt="logo"/>  
            </div>
            <div className="busca">
                <input type="text" placeholder="Pesquisar"/>
            </div>
            <div className="botoes">
                <ion-icon name="paper-plane-outline"></ion-icon>
                <ion-icon name="compass-outline"></ion-icon>
                <ion-icon name="heart-outline"></ion-icon>
                <ion-icon name="person-outline"></ion-icon>
            </div>
      
        </div>
       
    </div>
    )
}