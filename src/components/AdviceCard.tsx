import diceImg from '../images/icon-dice.svg';
import patternDesktop from '../images/pattern-divider-desktop.svg';
import patternMobile from '../images/pattern-divider-mobile.svg';

interface AdviceCardProps {
    adviceId?: number;
    adviceText?: string;
    onFetchAdvice: () => void;
}

const AdviceCard = ({ adviceId, adviceText, onFetchAdvice }: AdviceCardProps) => {
    return (
        <div className="flex flex-col items-center">
            <h1 className="text-neonGreen uppercase tracking-[5px] text-xs mt-7 text-center">
                Advice #{adviceId}
            </h1>
            <p className="p-6 text-center text-2xl text-lightCyan">
                "{adviceText}"
            </p>
            <picture>
                <source srcSet={patternDesktop} media="(max-width: 768px)" />
                <img src={patternMobile} alt="Pattern Divider" className="mt-2 mb-8" />
            </picture>

            <button
                className="absolute bottom-[-30px] bg-neonGreen p-3 rounded-[50%] h-[60px] w-[60px] flex items-center justify-center hover:cursor-pointer hover:shadow-md hover:shadow-neonGreen"
                onClick={onFetchAdvice}>
                <img src={diceImg} alt="Dado" className="w-6 h-6" />
            </button>
        </div>

    );
};

export default AdviceCard;
