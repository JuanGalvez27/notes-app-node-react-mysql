import {Link} from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
      <h1>React MySql</h1>
      <ul>
        <li>
          <Link to='/'>Home</Link>
        </li>
        <li>
          <Link to='/new'>Create task</Link>
        </li>
      </ul>
    </div>
  )
}

export default Navbar