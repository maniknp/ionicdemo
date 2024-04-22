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
    try {
      const result =  fetchData();
      // this.setState({ data: result, loading: false });
      result.then((response) =>{
        console.log('My response', response);
      })
      console.log("last line");
    } catch (error) {
      // this.setState({ error: 'Failed to fetch data', loading: false });
    }

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

    // const { data, loading, error } = this.state;

    // if (loading) return <div>Loading...</div>;
    // if (error) return <div>Error: {error}</div>;

    // return (
    //   <div>
    //     <h1>Data Loaded</h1>
    //     {/* Render your data here */}
    //     <pre>{JSON.stringify(data, null, 2)}</pre>
    //   </div>
    // );


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
        </IonContent>

        <div>
          <h1>Data Loaded</h1>
    
        </div>

      </IonPage>
    );
  }
}

export default withIonLifeCycle(HomePage);