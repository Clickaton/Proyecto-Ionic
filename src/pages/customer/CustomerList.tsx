import { IonButton, IonButtons, IonCard, IonCol, IonContent, IonGrid, IonHeader, IonIcon, IonItem, IonMenuButton, IonPage, IonRow, IonTitle, IonToolbar } from '@ionic/react';
import { useHistory, useParams } from 'react-router';
import ExploreContainer from '../../components/ExploreContainer';
import '../Page.css';
import { add, bagRemove, pencil, personAdd, personRemoveOutline, remove, removeCircle, removeOutline, removeSharp } from 'ionicons/icons';
import { useEffect, useState } from 'react';
import { removeCustomer, saveCustomer, searchCustomer } from './customerApi';

const CustomerList: React.FC = () => {

  const { name } = useParams<{ name: string; }>();
  const [clientes, setClientes] = useState<any>([]);
  const history = useHistory();

  useEffect(() => {
    search();
  }, [history.location.pathname]);

  const search = () => {
   let result = searchCustomer();
    setClientes(result);
  }

  const remove = (id: string) => {
    removeCustomer(id);
    search();
  }

  const pruebaLocalStorage = () => {
    const ejemplo =  {
  
          id: '1',
          firstname: 'Lucas',
          lastname: 'Muller' ,
          email: 'chicharito@hotmail.com',
          phone: '1143322113' ,
          addres: 'Avenida Siempre Viva 123'
      }
      saveCustomer(ejemplo);
  }

  const addCustomer = () => {
    history.push('/folder/customers/new');
  }

  const editCustomer = (id: string) => {
    history.push('/folder/customers/' + id);
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
        <IonTitle className='pageTitle'>Gestión de clientes</IonTitle>

        <IonItem>
          <IonButton onClick={addCustomer} color="primary" fill="solid" slot="end" size="default">
            <IonIcon icon={personAdd} />
            &#160; Agregar Cliente
          </IonButton>
        </IonItem>

        <IonGrid className="table">
        <IonRow>
          <IonCol>Nombre</IonCol>
          <IonCol>Email</IonCol>
          <IonCol>Teléfono</IonCol>
          <IonCol>Dirección</IonCol>
          <IonCol>Acciones</IonCol>     
        </IonRow>

        {clientes.map((cliente:any) =>
          <IonRow>
          <IonCol>{cliente.firstname} {cliente.lastname}</IonCol>
            <IonCol>{cliente.email}</IonCol>
            <IonCol className='phoneUser'>{cliente.phone}</IonCol>
            <IonCol>{cliente.addres}</IonCol>
            <IonCol className='action-buttons'>
              <IonButton onClick={() => editCustomer(cliente.id)} size="small" fill='clear' color='primary'>
                <IonIcon icon={pencil} />
              </IonButton>
              <IonButton size="small" fill='clear' color='danger' onClick={() => remove(cliente.id)}>
                <IonIcon icon={personRemoveOutline} />
              </IonButton>
            </IonCol>   
          </IonRow>
          )}
        

      </IonGrid>
        </IonCard>
   
          <IonButton onClick={pruebaLocalStorage} >
            Prueba local Storage
          </IonButton>

      </IonContent>
    </IonPage>
  );
};

export default CustomerList;
