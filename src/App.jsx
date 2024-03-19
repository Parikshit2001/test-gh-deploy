import { useEffect, useState } from "react"
import Skeleton from "./components/Skeleton";
import Card from "./components/Card";

function App() {

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000)
  }, [])

  return (
    <div className="flex justify-center items-center h-screen">
      {loading
      ?<Skeleton />
      :<Card />}
    </div>
  )
}

export default App