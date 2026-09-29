import { Link } from "react-router-dom"

const Error = () => {
    return (
        <main className="text-amber-300">
            <h2>404</h2>
            <p>Ops! Página não encontrada</p>
            <p>Parece que você se perdeu no Mapa do jogo. A página que você está procurando não existe ou foi removida</p>
            <Link to='/'>Voltar para Home</Link>
        </main>
        
    )
}

export default Error