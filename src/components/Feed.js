import React from "react";
import { useState } from "react";



function Post(props){
    
    const  [like, setLike] = React.useState(props.liked)

    console.log(like);

    return(
        <div class="post">
                <div class="topo">
                    <div class="usuario">
                        <img src= {props.fotoPerfil} />
                        {props.nomeUsuario}
                    </div>
                    <div class="acoes">
                        <ion-icon name="ellipsis-horizontal"></ion-icon>
                    </div>
                </div>

                <div class="conteudo">
                    <img src= {props.fotoPost} />
                </div>

                <div class="fundo">
                    <div class="acoes">
                        <div>
                            <ion-icon name="heart-outline" onClick = {() => setLike(!like) }></ion-icon>
                            <ion-icon name="chatbubble-outline"></ion-icon>
                            <ion-icon name="paper-plane-outline"></ion-icon>
                        </div>
                        <div>
                            <ion-icon name="bookmark-outline"></ion-icon>
                        </div>
                    </div>

                    <div class="curtidas">
                        <img src= {props.perfilCurtida} />
                        <div class="texto">
                            Curtido por <strong>{props.perfilCurtidaUsuario}</strong> e <strong>outras {props.qtd} pessoas</strong>
                        </div>
                    </div>
                </div>
            </div>
    )
}



const posts = [
    {
        fotoPerfil: "assets/img/meowed.svg",
        nomeUsuario: "meowed",
        fotoPost: "assets/img/gato-telefone.svg",
        perfilCurtida: "assets/img/respondeai.svg",
        perfilCurtidaUsuario: "respondeai",
        qtd: "101.523",
        type: "image",
        liked: true,
    },
    {
        fotoPerfil: "assets/img/barked.svg",
        nomeUsuario: "barked",
        fotoPost: "assets/img/dog.svg",
        perfilCurtida: "assets/img/adorable_animals.svg",
        perfilCurtidaUsuario: "adorable_animals",
        qtd: "99.159",
        type: "image",
        liked: true,
    }

]

export default function Feed() {
    
    
    
    return (
        <div class="posts">
            { posts.map((post) => <Post fotoPerfil = {post.fotoPerfil} nomeUsuario = {post.nomeUsuario} fotoPost = {post.fotoPost} perfilCurtida = {post.perfilCurtida} perfilCurtidaUsuario = {post.perfilCurtidaUsuario} qtd = {post.qtd} liked = {post.liked}/> ) }

        </div>
    )
}