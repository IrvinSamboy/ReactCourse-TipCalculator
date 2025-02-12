import { useReducer } from "react"
import Header from "./components/Header"
import Menu from "./components/Menu"
import Order from "./components/Order"
import { initialState, orderReducer } from "./reducers/order-reducer"

function App() {

  const [state, dispatch] = useReducer(orderReducer, initialState)

  return (
    <div className="w-screen">
      <Header />
      <div className="grid grid-cols-2 w-[90%] mx-auto mt-16 gap-4
      ">
        <div>
          <h1 className=" mb-7 font-black text-3xl">Menu</h1>
          <Menu
            dispatch={dispatch}
          />
        </div>
        <div>
          <h1 className=" mb-7 font-black text-3xl">Order</h1>
          <Order
            state={state}
            dispatch={dispatch}

          />
        </div>
      </div>
    </div>
  )
}

export default App
