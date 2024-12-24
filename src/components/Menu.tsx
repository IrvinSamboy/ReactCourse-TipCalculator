import { menuItems } from "../db/db"


export default function Menu() {
    return (
        <div>
            {
                menuItems.map(item => (
                    <div key={item.id} 
                            className="w-full flex justify-between p-3 
                            border-[#26CEB7] border-solid border-2 mb-3 
                            rounded-md font-semibold cursor-pointer hover:bg-[#8CF5DF]"
                    >
                        <div>
                            <h2>{item.name}</h2>
                        </div>
                        <p className="font-black">
                            ${item.price}
                        </p>
                    </div>
                ))
            }
        </div>
    )
}
