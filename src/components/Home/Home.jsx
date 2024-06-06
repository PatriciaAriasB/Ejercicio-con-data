import { useSelector } from "react-redux"
import LinePlot from "../LinePlot/LinePlot"



const Home = () => {

  const {chart: data} = useSelector((state) => state.chart)

  return (
    <div>
      <LinePlot data={data}/>
    </div>
  )
}

export default Home