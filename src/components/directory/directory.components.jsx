import DirectoryItem from "../directory-item/directory-item.component";
import './directory.styles.scss';

const Directory = ({categories}) => {
  return(
    <div className="categories-container">
      {categories.map( ({ title, id, imageUrl }) => (
        <DirectoryItem key={id} title={title} imageUrl={imageUrl} />
      ) )}
    </div>
  );
}

export default Directory;