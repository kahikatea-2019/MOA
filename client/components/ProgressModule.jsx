import React from 'react'
import CircularProgressbar from 'react-circular-progressbar'

export default function ProgressModule (props) {
  const { progress } = props
  return (
    <div style={{ width: '200px' }}>
      <CircularProgressbar progress={progress}
        text={`${progress}%`}
        styles={{
          // Customize the root svg element
          root: {},
          // Customize the path, i.e. the "completed progress"
          path: {
            // Path color
            stroke: `rgba(62, 152, 199, ${progress / 100})`,
            // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
            strokeLinecap: 'butt',
            // Customize transition animation
            transition: 'stroke-dashoffset 0.5s ease 0s'
          },
          // Customize the circle behind the path, i.e. the "total progress"
          trail: {
            // Trail color
            stroke: '#d6d6d6'
          },
          // Customize the text
          text: {
            // Text color
            fill: '#f88',
            // Text size
            fontSize: '16px',
            textAlign: 'center'
          },
          // Customize background - only used when the `background` prop is true
          background: {
            fill: '#3e98c7'
          }
        }}/>
    </div>
  )
}
