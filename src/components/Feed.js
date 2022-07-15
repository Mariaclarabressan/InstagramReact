export default function Feed() {
    return (
        <div className="feed">
            <div className="post borda">
                <div className="post-title">
                    <div>
                        <img className="profile" src="https://i.pinimg.com/736x/e6/67/3f/e6673fc4f4930a84277c3f88bc87978e.jpg" alt="one_piece_is_good" />
                        <h4>Zoro</h4>
                    </div>
                    <ion-icon name="ellipsis-horizontal-outline"></ion-icon>
                </div>
                <div className="post-media">
                    <img src="https://criticalhits.com.br/wp-content/uploads/2021/11/zoro-one-piece-768x400.jpg" alt="zoro1" />
                </div>
                <div className="post-actions">
                    <div className="post-botoes">
                        <div className="esquerda">
                            <ion-icon name="heart-outline"></ion-icon>
                            <ion-icon name="chatbubble-outline"></ion-icon>
                            <ion-icon name="paper-plane-outline"></ion-icon>
                        </div>
                        <div className="direita">
                            <ion-icon name="paper-plane-outline"></ion-icon>
                        </div>

                    </div>
                    <div className="post-comentarios"></div>
                </div>
            </div>
        </div>

    )
}