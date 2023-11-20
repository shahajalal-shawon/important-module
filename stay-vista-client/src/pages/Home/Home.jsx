import Categories from "../../components/Rooms/Categories/Categories"
import Rooms from "../../components/Rooms/Rooms"

const Home = () => {
  return (
    <div>
      {/* categories sections */}
      <Categories></Categories>
      {/* Room sections */}
      <Rooms></Rooms>
    </div>
  )
}

export default Home
