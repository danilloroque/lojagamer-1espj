const GameCard = ({titulo, preco, imagem}) => {
    return (
        <div className="bg-black rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-2 border-[#95ff00]">
            <img src={imagem} alt={titulo} className="w-full h-[260px] object-cover"/>
        
            <article className="p-4 text-center">
                <h2 className="text-xl text-[#95ff00] uppercase mb-3 font-bold">{titulo}</h2>

                <p className="text-white text-2xl font-bold mb-4"></p>
                <button className="bg-gradient-to-r from-cyan-400 to-purple-600 w-[50]¨py-4 px-4
                rounded-2xl border-nne cursor-pointer font-semibold transition-all duration-300h
                text-white hover:scale-105">
                comprar
                </button>

            </article>
        </div>
    )
}

export default GameCard