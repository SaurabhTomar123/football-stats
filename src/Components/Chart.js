
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis} from 'recharts';
import "./Chart.css";

const data = [
    {
      Property: 'Pace',
      A: 86,
  
      full: 100,
    },
    {
      Property: 'Driblling',
      A: 90,
    
      full: 100,
    },
    {
      Property: 'Shooting',
      A: 95,
      full: 100,
    },
    {
      Property: 'Defending',
      A: 70,
     
      full: 100,
    },
    {
      Property: 'Passing',
      A: 90,

      full: 100,
    },
    {
      Property: 'Physicality',
      A: 94,

      full: 100,
    },
  ];
  
  export default function Charts () {
    
      return (<div className ="Player_Chart" >
    <RadarChart
      cx={250}
      cy={250}
      outerRadius={180}
      width={500}
      height={500}
      data={data}

    >
      <PolarGrid />
      <PolarAngleAxis dataKey="Property" />
      <PolarRadiusAxis />
      <Radar
        name="L.Messi"
        dataKey="A"
        stroke="#41d9e6ea"
        fill="#41d9e6ea"
        fillOpacity={0.6}
      />
    </RadarChart>
    </div>
      );
    
  }

