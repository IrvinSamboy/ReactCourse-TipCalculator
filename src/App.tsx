import Header from "./components/Header"
import Menu from "./components/Menu"
import Order from "./components/Order"

function App() {

  return (
    <div className="w-screen">
      <Header />
      <div className="grid grid-cols-2 w-[90%] mx-auto mt-16 gap-4
      ">
        <div>
          <h1 className=" mb-7 font-black text-3xl">Menu</h1>
          <Menu />
        </div>
        <div>
          <h1 className=" mb-7 font-black text-3xl">Order</h1>
          <Order />
        </div>
      </div>
    </div>
  )
}

export default App
