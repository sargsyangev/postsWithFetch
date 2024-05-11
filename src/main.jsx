import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Posts from './Posts/posts'
import UsersPosts from './Posts/fackePosts/usersPost'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <Posts/> */}
    <UsersPosts/>
  </React.StrictMode>,
)
