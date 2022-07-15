import Header from './components/Header';
import Content from './components/Content';

export default function App() {
    return (
        <div>
            <div className="topo borda">
                <div className="topo-container">
                    <Header />
                </div>
            </div>
            <Content />
        </div>

    )
}

