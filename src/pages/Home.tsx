import React from 'react';
import { IonHeader, IonPage, IonToolbar, IonTitle, IonContent, withIonLifeCycle, IonButtons, IonMenuButton } from '@ionic/react';
import { fetchData } from '../apiService';

class HomePage extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      data: null,
      loading: true, 
      error: null,
    };
  }



  ionViewWillEnter() {

    const result = fetchData();
    result.then(data => {
      if (data.hasError) {
        throw new Error(`${data.message} , Code: ${data.code}`);
      }
      this.setState({ data: data, loading: false });
      console.log(data);
    })
      .catch(error => {
        this.setState({ error: `${error}`, loading: false });

      })

    // console.log(process.env.TEST_ENV);
    console.log('ionViewWillEnter event fired');
  }

  ionViewDidEnter() {
    console.log('ionViewDidEnter event fired');
  }

  ionViewWillLeave() {
    console.log('ionViewWillLeave event fired');
  }

  ionViewDidLeave() {
    console.log('ionViewDidLeave event fired');
  }

  render() {
    const { data, loading, error } = this.state;
    console.log('loading',loading);
    
   

 


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

            {loading && <div>Loading...</div>}
            {error && <div>Error: {error}</div>}
            {data && (<>
                  <h1>Data Loaded</h1>
                   <pre>{JSON.stringify(data, null, 2)}</pre>
                 </>
            )}
          
        </IonContent>


      </IonPage>
    );
  }
}

export default withIonLifeCycle(HomePage);