import {useSelector} from 'react-redux'

export default function Button({ children,  typeButton, disabledButton}) {
  const theme = useSelector((state) => state.theme)
  const className = 'button-' + theme;
  return (
    <button className={className} type = {typeButton} disabled = {disabledButton}>
      {children}
    </button>
  );

    
}