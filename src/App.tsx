import { useEffect, useState } from 'react'
import diceImg from './images/icon-dice.svg'
import patternDesktop from './images/pattern-divider-desktop.svg'
import patternMobile from './images/pattern-divider-mobile.svg'
import { AdviceService } from './service/advice'


const App = () => {

    const [advice, setAdvice] = useState()

    useEffect(() => {
        const fetchData = async () => {
            const data = await AdviceService.getAdvice();

            setAdvice(data)
        }

        fetchData()

    }, [])

    return (
        <div className="bg-darkGrayishBlue h-screen flex justify-center items-center">
            <div className="bg-grayishBlue flex flex-col items-center rounded-lg max-w-[350px] m-5">
                <h1 className="text-neonGreen uppercase tracking-[5px] text-lg mt-7">Advice</h1>

                <p className='p-6 text-center text-2xl'>DFSHYSAU</p>

                <picture>
                    <source srcSet={patternMobile} media='(max-width: 768px)' />
                    <img src={patternDesktop} alt="Pattern Desktop" />
                </picture>

                <button className='bg-neonGreen p-3 rounded-full h-14 w-14 translate-y-1/2 hover:cursor-pointer hover:shadow-md hover:shadow-neonGreen'>
                    <img src={diceImg} alt="Dado" className='w-full ' />
                </button>

            </div>
        </div>
    )
}

export default App
