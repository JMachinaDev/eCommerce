import React from 'react';
import 'Navbar.js';
import { Link, Route } from 'react-router-dom';

const Navbar = () => {
  return (
    <main>
      <nav>
        <div>
          {/* brand name */}
          <a>El Supremo</a>
        </div>
        <div>
          <li>
            <Link to={'/signup'}>Sign Up</Link>
          </li>
          <li>
            <Link to={'/login'}>Login</Link>
          </li>
        </div>
      </nav>

      <div className="crud-container">
        <Switch>
          <Route exact path={['/', '/signup']} component={UserList} />
          <Route exact path='/add' component={AddUser} />
          <Route exact path='/users/:id' component={Users} />
        </Switch>
      </div>
    </main>
  )
}

export default Navbar;
