import { IonButton, IonContent, IonHeader, IonInput, IonItem, IonList, IonPage, IonText, IonTitle, IonToolbar,} from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Home.css';
import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { toast } from '../toast'
import { registerUser } from '../firebaseConfig'

const Register: React.FC = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [cpassword, setCPassword] = useState('')


    async function register() {
        if (password !== cpassword) {
            //return toast('Passwords do not match')
            alert('Passwords do not match')
            return
        }
        if (username.trim() === '' || password.trim() === '') {
            //return toast('Username and password are required')
            alert('Username and password are required')
            return
        }

        const res = await registerUser(username, password)
        if (res) {
            //toast('You have registered successfully!')
            alert('You have registered successfully!')
        }
    }

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Register</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonInput placeholder="Username?" onIonChange={(e: any) => setUsername(e.target.value)}></IonInput>

        <IonInput placeholder="Password?" type="password" onIonChange={(e: any) => setPassword(e.target.value)}></IonInput>

        <IonInput placeholder="Confirm Password?" type="password" onIonChange={(e: any) => setCPassword(e.target.value)}></IonInput>

        <IonButton onClick={register}>Register</IonButton>

        <p>Already have an account? <Link to="/login">Login</Link>
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
        <ExploreContainer />
      </IonContent>
    </IonPage>
  );
};

export default Register;