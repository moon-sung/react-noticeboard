import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

const Header=({
  data
})=>(
  <div>
    <h2>게시판</h2>
    <p style={{color:'grey'}}>총 게시물:{data.length}</p>
    
  </div>
)

export default Header