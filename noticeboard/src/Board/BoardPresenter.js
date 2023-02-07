import React from 'react'
import Header from '../Component/Header'
import BoardTable from '../Component/BoardTable';
import PaginationBar from '../Component/PaginationBar';
import SearchBox from '../Component/SearchBox';


const BoardPresenter = ({
  data
}) =>(
  <div className='grey-bg'>
    <div className='white-bg'>
      <Header data={data}/>
      <BoardTable data={data}/>
      <PaginationBar/>
      <SearchBox/>
    </div>
  </div>
)


export default BoardPresenter