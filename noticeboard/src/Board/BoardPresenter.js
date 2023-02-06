import React from 'react'
import Header from '../Component/Header'
import 'bootstrap/dist/css/bootstrap.min.css';


const BoardPresenter = ({
  data
}) =>(
  <div className='grey-bg'>
    <div className='white-bg'>
      <Header data={data}/>

    </div>
  </div>
)


export default BoardPresenter