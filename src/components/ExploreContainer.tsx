import './ExploreContainer.css';

interface ContainerProps {currUser?: string}

const ExploreContainer: React.FC<ContainerProps> = ({currUser}) => {
  return (
    <div id="container">
      {currUser !== undefined || currUser !=='' ? <p>{currUser}</p> : null}
      
    </div>
  );
};

export default ExploreContainer;
