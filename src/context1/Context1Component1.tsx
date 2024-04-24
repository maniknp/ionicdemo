import { useContext } from 'react';
import MyContext from './Context';

const Context1Component1: React.FC = () => {
    const {sharedData1} = useContext(MyContext);

    return (
        <>
            <div style={{ background: 'black', color: '#fff' }}>
                <p>Context1Component1</p>
                <p>Theme: {sharedData1.theme}</p>
                <p>Language: {sharedData1.language}</p>
            </div>
        </>
    );
};

export default Context1Component1;
