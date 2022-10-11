import { LoaderContainer, LoaderSpinner } from './Loader.styled';
import { GiSpinalCoil } from 'react-icons/gi';
import { IconContext } from 'react-icons/lib';

export default function Loader() {
  return (
    <IconContext.Provider value={{ color: '#de14b9' }}>
      <div role="alert">
        <LoaderContainer>
          <LoaderSpinner>
            <GiSpinalCoil size="90" />
          </LoaderSpinner>
        </LoaderContainer>
      </div>
    </IconContext.Provider>
  );
}
