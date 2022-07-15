import Storys from "./Storys";
import Feed from "./Feed";
import Sidebar from "./Sidebar";

export default function Content() {
    return (
        <div className="conteudo">
            <div class="conteudo-principal">
                <Storys />
                <Feed />
                <Sidebar/>
                
            </div>
        </div>
    );
}