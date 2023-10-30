import { IonButton, IonContent, IonHeader, IonInput, IonItem, IonList, IonPage, IonText, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Home.css';
import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { loginUser } from '../firebaseConfig'
import { toast } from '../toast'

const Login: React.FC = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [currUser, setcurrUser] = useState()

    async function login() {
        const res = await loginUser(username, password)
        if(!res) {
            //toast('Error logging with your credentials')
            alert('Error logging with your credentials')
        } else {
            alert('Login successfull')
            if (res && res.user && res.user.email) 
            setcurrUser(res.user.email ? res.user.email : 'joku')
        }
        
    }

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Login</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonInput placeholder="Username?" onIonChange={(e: any) => setUsername(e.target.value)}></IonInput>

        <IonInput placeholder="Password?" type="password" onIonChange={(e: any) => setPassword(e.target.value)}></IonInput>

        <IonButton onClick={login}>Login</IonButton>

        <p>New here? <Link to="/register">Register</Link>
        </p>
        <IonList>
          <IonItem>
            <IonText></IonText>
          </IonItem>
        </IonList>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Blank</IonTitle>
          </IonToolbar>
        </IonHeader>
        <ExploreContainer currUser={currUser}/>
      </IonContent>
    </IonPage>
  );
};

export default Login;