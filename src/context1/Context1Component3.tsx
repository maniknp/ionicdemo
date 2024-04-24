import  { useContext } from 'react';
import { IonButton   } from '@ionic/react';

import MyContext from './Context';


const Context1Component3: React.FC = () => {
    const {sharedData1, setSharedData1} = useContext(MyContext);
    const changeName = () => {
        
        sharedData1.version = 1 + ( typeof sharedData1.version === 'undefined' ? 0 : sharedData1.version ); 
        sharedData1.theme = `dark2 ==> version ${sharedData1.version}`;
        console.log(sharedData1);
        setSharedData1({...sharedData1 });
      };

    return (
        <>
            <div style={{ background: 'blue', color: '#fff' }}>
                <p>Context1Component3</p>
                <p>Theme: {sharedData1.theme}</p>
                <p>Language: {sharedData1.language}</p>
                 <IonButton color="warning" onClick={changeName} >Click Me </IonButton>

            </div>
        </>
    );
};

export default Context1Component3;
