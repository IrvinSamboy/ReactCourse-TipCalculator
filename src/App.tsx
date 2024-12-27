import Header from "./components/Header"
import Menu from "./components/Menu"
import Order from "./components/Order"
import useOrder from "./hooks/useOrder"

function App() {


  const { order, insertItem, deleteItem } = useOrder()
  return (
    <div className="w-screen">
      <Header />
      <div className="grid grid-cols-2 w-[90%] mx-auto mt-16 gap-4
      ">
        <div>
          <h1 className=" mb-7 font-black text-3xl">Menu</h1>
          <Menu
            insertItem={insertItem}
          />
        </div>
        <div>
          <h1 className=" mb-7 font-black text-3xl">Order</h1>
          <Order
            order={order}
            deleteItem={deleteItem}
          />
        </div>
      </div>
    </div>
  )
}

export default App
