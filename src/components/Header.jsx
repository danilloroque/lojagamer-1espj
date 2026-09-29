import {Link} from 'react-router-dom'

const Header = () => {
    return (
        <header className='flex justify-between items-center py-6 px-[5%] bg-black'>
            <h1 className='logo p-2 text-[1.7rem] font-bold text-white transition-all '>Loja <span className='text-[#95ff00]'>GAMER</span></h1>
            <nav>
                <ul className='flex list-nome items-center gap-8'>
                    <li>
                        <Link to='/' className='text-white text-lg no-underline hover:text-[#95ff00] hover:underline transition-all'>Home</Link>
                    </li>
                    <li>
                        <Link to='/jogos' className='text-white text-lg no-underline hover:text-[#95ff00] hover:underline transition-all'>Jogos</Link>
                    </li>
                    <li>
                        <Link to='/contato' className='text-white text-lg no-underline hover:text-[#95ff00] hover:underline transition-all'>Contato</Link>
                    </li>
                    <li>
                        <Link to='/login' className='text-white text-lg no-underline hover:text-[#95ff00] hover:underline transition-all'>Login</Link>
                    </li>
                </ul>

            </nav>
        </header>
    )
}

export default Header