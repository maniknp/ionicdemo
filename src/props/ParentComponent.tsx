import { useState } from 'react';
import { useParams } from 'react-router';
import {
    IonButtons, IonContent, IonHeader,
    IonMenuButton, IonPage, IonTitle, IonToolbar, IonButton
} from '@ionic/react';

import ChildComponent from './ChildComponent';



const ParentComponent: React.FC = () => {
    const { name } = useParams<{ name: string; }>();
    const [myVariable, setMyVariable] = useState('Hello');

    const updateVariable = (event, value = 'Hello, World!') => {
        setMyVariable(value);
    };

    function debounce(func, delay) {
        let timeout = null;
        return (...args) => {
            if (timeout) clearTimeout(timeout)
            timeout = setTimeout(() => {
                func(...args)
            }, delay)
        }
    }

    function testfun(event) {
        let value = event.target.value;
        setMyVariable(value);
    }
    const debouncedFun = debounce(testfun, 700);


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

                {/* <ChildComponent onChange={updateVariable}  myProp={myVariable} /> */}
                <ChildComponent onChange={debouncedFun} myProp={myVariable} />
                <IonButton onClick={updateVariable}>Update Variable</IonButton>
            </IonContent>
        </IonPage>
    );
};

export default ParentComponent;
