import  {  useState } from 'react';

import { useParams } from 'react-router';
import {
    IonButtons, IonContent, IonHeader,
    IonMenuButton, IonPage, IonTitle, IonToolbar, IonButton
} from '@ionic/react';

import MyContext1 from './Context';
import Context1Component1 from './Context1Component1';
import Context1Component2 from './Context1Component2';
import Context1Component3 from './Context1Component3';

const ContextComponent1: React.FC = () => {
    const { name } = useParams<{ name: string; }>();
   
    const sharedData = {
        theme: 'dark',
        language: 'english',
      };
      const [sharedData1, setSharedData1] = useState(sharedData);

    //   const updateValue = (newValue) => {
    //     setSharedData1(newValue);
    //   };


    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonButtons slot="start">
                        <IonMenuButton />
                    </IonButtons>
                    <IonTitle>{name}</IonTitle>
                </IonToolbar>
            </IonHeader>

            <IonContent fullscreen>
                {/* Condensed header used in IOS App  */}
                <IonHeader collapse="condense">
                    <IonToolbar>
                        <IonTitle size="large">{name} </IonTitle>
                    </IonToolbar>
                </IonHeader>


                <MyContext1.Provider value={{sharedData1,setSharedData1}}>
                    <div id="container">
                        <Context1Component1/>
                        <Context1Component2/>
                        <Context1Component3/>
                    </div>
                </MyContext1.Provider>
              
            </IonContent>
        </IonPage>
    );
};

export default ContextComponent1;
