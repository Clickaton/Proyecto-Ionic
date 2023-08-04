import { IonButton, IonButtons, IonCard, IonCol, IonContent, IonGrid, IonHeader, IonIcon, IonInput, IonItem, IonLabel, IonMenuButton, IonPage, IonRow, IonTitle, IonToolbar } from '@ionic/react';
import { useHistory, useParams } from 'react-router';
import ExploreContainer from '../../components/ExploreContainer';
import '../Page.css';
import { add, bagRemove, pencil, personAdd, personRemoveOutline, remove, removeCircle, removeOutline, removeSharp, save } from 'ionicons/icons';
import { useEffect, useState } from 'react';
import { removeCustomer, saveCustomer, searchCustomer, searchCustomerById } from './customerApi';

const CustomerEdit: React.FC = () => {

  const { name, id } = useParams<{ name: string; id: string; }>();

  const [customer, setCustomer] = useState<any>({});
  const history = useHistory();


  useEffect(() => {
    search();
  }, []);

  const search = () => {
    if (id !== 'new') {
        let result = searchCustomerById(id);
        setCustomer(result);
    } 


  /* let result = searchCustomer();
    setClientes(result); */
  }

  const save = () => {
    saveCustomer(customer);
    history.push('/folder/customers');
  }


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




      <IonContent>
       <IonCard> 
        <IonTitle className='pageTitle'>{id === 'new' ? 'Agregar cliente' : 'Editar cliente' } </IonTitle>


        <IonRow>
            <IonCol size-md={3}>
            <IonItem>
            <IonLabel position="stacked">Nombre</IonLabel>
            <IonInput onIonChange={e => customer.firstname = e.detail.value} value={customer.firstname}> </IonInput>
          </IonItem>
            </IonCol>
        </IonRow>

        <IonRow>
            <IonCol size-md={3}>
            <IonItem>
            <IonLabel position="stacked">Apellido</IonLabel>
            <IonInput onIonChange={e => customer.lastname = e.detail.value} value={customer.lastname}> </IonInput>
          </IonItem>
            </IonCol>
        </IonRow>

        <IonRow>
            <IonCol size-md={3}>
            <IonItem>
            <IonLabel position="stacked">Email</IonLabel>
            <IonInput onIonChange={e => customer.email = e.detail.value} value={customer.email}> </IonInput>
          </IonItem>
            </IonCol>
        </IonRow>

        <IonRow>
            <IonCol size-md={3}>
            <IonItem>
            <IonLabel position="stacked">Teléfono</IonLabel>
            <IonInput onIonChange={e => customer.phone = e.detail.value} value={customer.phone}> </IonInput>
          </IonItem>
            </IonCol>
        </IonRow>


        <IonRow>
            <IonCol size-md={3}>
            <IonItem>
            <IonLabel position="stacked">Dirección</IonLabel>
            <IonInput onIonChange={e => customer.addres = e.detail.value} value={customer.addres}> </IonInput>
          </IonItem>
            </IonCol>
        </IonRow>








        <IonItem>
          <IonButton onClick={save}  color="primary" fill="solid" slot="end" size="default">
            <IonIcon icon={personAdd} />
            &#160; Guardar
          </IonButton>
        </IonItem>

        </IonCard>

      </IonContent>
    </IonPage>
  );
};

export default CustomerEdit;
