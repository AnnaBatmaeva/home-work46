import { useSelector, useDispatch } from 'react-redux'
import { set } from '../slices/themeSlice'
import Button from '../components/Button'

export default function Home({ children }) {
  const theme = useSelector((state) => state.theme)
  const dispatch = useDispatch()
  const handleChange = () => {
    const next = theme === 'dark' ? 'light' : 'dark'
    dispatch(set(next))
  }
  return (
    <>
      <Panel title="Привіт!" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum efficitur urna vitae lorem posuere condimentum. Nunc imperdiet neque quis massa rutrum sodales. Fusce ornare, nisl in malesuada aliquet, tellus ante accumsan sem.">
        <Button>Звʼязатись з нами</Button>
      </Panel>
      <button className='buttonTheme' onClick={handleChange}>
        Змінити тему
      </button>

    </>
  );
}

function Panel({ title, text, children }) {
  const theme = useSelector((state) => state.theme)
  const className = 'panel-' + theme;
  return (
    <section className={className}>
      <h1>{title}</h1>
      <p>{text}</p>
      {children}
    </section>
  )
}

