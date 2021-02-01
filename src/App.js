import './App.css';
import { useEffect} from 'react'
import { getTodoList } from '../src/store/action'
import store from './store'
import { useSelector, useDispatch } from 'react-redux'
function App() {
  const state = useSelector((state) => {
    return state

  });
  const dispatch = useDispatch();
  // const [data, setdata] = useState([store.getState()])
  useEffect(() => {
    const action = getTodoList()
    dispatch(action)
    // let data = store.getState()

    // console.log(state)
    setTimeout(() => {
      let data = store.getState()

      console.log(data)
    }, 2000)
    // setdata(store.getState())
  }, [])
  // console.log(state)
  // store.subscribe(store.getState())
  return (
    <div className="App">
      tertert
      <p>{state.list[0]}</p>

    </div>
  );
}

export default App;
