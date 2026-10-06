import GameCard from "../components/GameCard"
import imagem_jogo from "../assets/imagem.jpg"
import imagem_jogo2 from "../assets/imagem2.jpg"

const Home = () => {

    const games=[
        {id:1,titulo:"Jogo-01", preco:"R$200,00", imagem:imagem_jogo},
        {id:2,titulo:"Jogo-02", preco:"R$300,00", imagem:imagem_jogo2},
        {id:3,titulo:"Jogo-03", preco:"R$400,00", imagem:imagem_jogo},
        {id:4,titulo:"Jogo-04", preco:"R$500,00", imagem:imagem_jogo2}
    ];
    return (
        <main className="px-[5%] mt-10 mb-16 grow">
            <h2 className="titulo text-2xl">JOGOS EM DESTAQUE</h2>
            <section className="grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-6 ">
                {games.map((jogo)=>(
                    <GameCard
                    key={jogo.id}
                    titulo={jogo.titulo}
                    imagem={jogo.imagem}
                    preco={jogo.preco}
                    />
                ))}

            </section>
        </main>
    )
}

export default Home