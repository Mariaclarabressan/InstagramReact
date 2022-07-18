const ConteudoStories = [
    {
        img:  "assets/img/meowed.svg",
        alt: "meowed",
        nome: "meowed",
    },
    {
        img: "assets/img/barked.svg",
        alt: "barked",
        nome: "barked",
    },
    {
        img: "assets/img/nathanwpylestrangeplanet.svg",
        alt: "nathanwpylestrangeplanet",
        nome: "nathanwpylestrangeplanet",
    },
    {
        img: "assets/img/wawawicomics.svg",
        alt: "wawawicomics",
        nome: "wawawicomics",
    },
    {
        img: "assets/img/respondeai.svg",
        alt: "respondeai",
        nome: "respondeai",
    },
    {
        img: "assets/img/filimoderna.svg",
        alt: "filimoderna",
        nome: "filimoderna",
    },
    {
        img: "assets/img/memeriagourmet.svg", 
        alt: "memeriagourmet",
        nome: "memeriagourmet",
    },

]

function Story(props) {
    return (
        <div class="story">
            <div class="imagem">
                <img src= {props.img} alt = {props.alt} />
            </div>
            <div class="usuario">
                <p>{props.nome}</p>
            </div>
        </div>
    );
}

export default function Storys() {
    
    return (
        <div class="stories">
            {ConteudoStories.map((storie) => (
                <Story img = {storie.img} alt = {storie.alt} nome = {storie.nome}/>
            ))}
            
            <div class="setinha">
                <ion-icon name="chevron-forward-circle"></ion-icon>
            </div>
        </div>
    )
}