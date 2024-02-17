import './directory-item.styles'

import { DirectoryItemContainer, Body, BackgroundImage } from './directory-item.styles';

const DirectoryItem = ({ imageUrl, title }) => {
    return(
        <DirectoryItemContainer>
          <BackgroundImage imageUrl={imageUrl} />
          <Body>
            <h2>{title}</h2>
            <p>Shop Now</p>
          </Body>
      </DirectoryItemContainer>
    );
}

export default DirectoryItem;