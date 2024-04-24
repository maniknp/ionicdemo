import React from 'react';
import { IonHeader, IonPage, IonToolbar, IonTitle, IonContent,
     withIonLifeCycle, IonButtons, IonMenuButton,
     IonCol, IonGrid, IonRow , IonButton   } from '@ionic/react';

interface AboutPageState {
    count: number;
    name: string;
    isChangeNameBtnDisabled:Boolean;
    isIncrimentBtnDisabled:Boolean;
}


class AboutPage extends React.Component<{}, AboutPageState> {
    constructor(props: {}) {
        super(props);
        this.state = {
            count: 0,
            name: 'John',
            isChangeNameBtnDisabled:false,
            isIncrimentBtnDisabled:false
        };
    }

    // Function to update count state
    incrementCount = () => {
        this.setState((prevState) => ({
            count: prevState.count + 1,
        }));
    };

    // Function to update name state
    changeName = () => {
        this.setState({
            name: 'Jane',
        });
    };

    render() {
        const { count, name, isChangeNameBtnDisabled,isIncrimentBtnDisabled } = this.state;
        console.log('loading', count, name);


        return (
            <IonPage>
                <IonHeader>
                    <IonToolbar>
                        <IonButtons slot="start">
                            <IonMenuButton />
                        </IonButtons>
                        <IonTitle>Home</IonTitle>
                    </IonToolbar>
                </IonHeader>

                <IonContent fullscreen>
                    {/* Condensed header used in IOS App  */}
                    <IonHeader collapse="condense">
                        <IonToolbar>
                            <IonTitle size="large">Home </IonTitle>
                        </IonToolbar>
                    </IonHeader>
                    <IonGrid>
                    <IonRow>
                    <IonCol>1</IonCol>
                    <IonCol>2</IonCol>
                    <IonCol>3</IonCol>
                    </IonRow>
                </IonGrid>


                    <div>
                        <p>Count: {count}</p>
                        <IonButton disabled={isIncrimentBtnDisabled} onClick={this.incrementCount}>Increment Count</IonButton>
                        <p>Name: {name}</p>
                        <IonButton disabled={isChangeNameBtnDisabled} onClick={this.changeName}>Change Name</IonButton>
                    </div>
                </IonContent>

            </IonPage>
        );
    }
}

export default withIonLifeCycle(AboutPage);