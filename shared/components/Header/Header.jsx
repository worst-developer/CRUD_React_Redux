import React, { PropTypes } from 'react';
import { Link } from 'react-router';


Header.propTypes = {
  onClick: PropTypes.func.isRequired,
  handleLogoClick: PropTypes.func,
};

function Header(props, context) {
  return (
    <div className="header">
      <div className="header-content">
        <h1 className="site-title">
          <Link to="/" onClick={props.handleLogoClick}> CRUD App</Link>
        </h1>
        {
          context.router.isActive('/', true)
            ? <a className="add-post-button" href="#" onClick={props.onClick}>Add Post</a>
            : null
        }
      </div>
    </div>
  );
}

Header.contextTypes = {
  router: React.PropTypes.object,
};

export default Header;
