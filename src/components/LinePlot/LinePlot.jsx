import React from 'react'


const LinePlot = (data) => {
 
const lineplotData = {
    data,
    width: 640,
    height: 400,
    marginTop: 20,
    marginRight: 20,
    marginBottom: 20,
    marginLeft: 20
};

const {width,height,marginTop,marginRight,marginBottom,marginLeft} = lineplotData;

  return (
    <div>LinePlot
      <svg width={width} height={height}>
      <path fill="none" stroke="currentColor" strokeWidth="1.5" d={line(data)} />
      <g fill="white" stroke="currentColor" strokeWidth="1.5">
        {data.map((d, i) => (<circle key={i} cx={x(i)} cy={y(d)} r="2.5" />))}
      </g>
    </svg>

    </div>
  )
}

export default LinePlot