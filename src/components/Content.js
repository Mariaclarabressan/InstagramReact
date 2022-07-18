import Storys from "./Storys";
import Feed from "./Feed";
import Sidebar from "./Sidebar";

export default function Content() {
    return (
        <div className="conteudo">
            <div class="conteudo-principal">
                <div class="corpo">
                    <div class="esquerda">
                        <Storys />
                        <Feed />
                    </div>
                    <div class="fundo-mobile">
                        <ion-icon name="home"></ion-icon>
                        <ion-icon name="search-outline"></ion-icon>
                        <ion-icon name="add-circle-outline"></ion-icon>
                        <ion-icon name="heart-outline"></ion-icon>
                        <ion-icon name="person-outline"></ion-icon>
                    </div>
                    <Sidebar />
                </div>
            </div>
        </div>
    );
}