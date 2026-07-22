import './ExploreContainer.css';
import { IonAlert, IonButton } from '@ionic/react';
import { useState } from 'react';

interface ContainerProps {
  name: string;
}

const ExploreContainer: React.FC<ContainerProps> = ({ name }) => {
  const [isAlertOpen, setIsAlertOpen] = useState(false);

  return (
    <div className="container">
      <IonButton onClick={() => setIsAlertOpen(true)}>Click Me</IonButton>
      <IonAlert
        isOpen={isAlertOpen}
        onDidDismiss={() => setIsAlertOpen(false)}
        header="A Short Title Is Best"
        subHeader="A Sub Header Is Optional"
        message="A message should be a short, complete sentence."
        buttons={['Action']}
      ></IonAlert>
    </div>
  );
};

export default ExploreContainer;
