import { useEffect, useState } from 'react';
import { AdviceService } from './service/advice';
import Card from './components/Card';
import AdviceCard from './components/AdviceCard';

const App = () => {
    const [advice, setAdvice] = useState<{ id: number; advice: string } | null>(null);

    const fetchData = async () => {
        const data = await AdviceService.getAdvice();
        setAdvice(data.slip);
    };

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <div className="bg-darkBlue h-screen flex justify-center items-center">
            <Card>
                <AdviceCard
                    adviceId={advice?.id}
                    adviceText={advice?.advice}
                    onFetchAdvice={fetchData}
                />
            </Card>
        </div>
    );
};

export default App;