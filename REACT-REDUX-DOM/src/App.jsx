import { useState } from 'react'
import { Provider } from 'react-redux'
import store from './redux/store'
import './App.css'
import CakeCantainer from './components/CakeContainer/CakeCantainer'
import HookCakeContainer from './components/HookCakeContainer/HookCakeContainer'
import IceCreamContainer from './components/iceCreamContainer/iceCreamContainer'
import NewCakeCantainer from './components/NewCakeContainer/NewCakeContainer'
import ItemContainer from './components/ItemContainer/ItemContainer'
import Usercontainer from './components/UserContainer/Usercontainer'
function App() {
  // const [count, setCount] = useState(0)

  return (
    <> 
    <Provider store={store}>
      <div className='App' >
        {/* <ItemContainer cake />
        <ItemContainer />
        <HookCakeContainer />
        <CakeCantainer />
         <IceCreamContainer />
         <NewCakeCantainer /> */}
         <Usercontainer/>
      </div>
      </Provider>

    </>
  )
}

export default App
