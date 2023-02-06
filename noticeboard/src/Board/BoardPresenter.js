import React from 'react'
import Header from '../Component/Header'
import BoardTable from '../Component/BoardTable';



const BoardPresenter = ({
  data
}) =>(
  <div className='grey-bg'>
    <div className='white-bg'>
      <Header data={data}/>
      <BoardTable data={data}/>
    </div>
  </div>
)


export default BoardPresenter