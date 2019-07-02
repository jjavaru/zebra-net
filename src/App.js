import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

function BasicExample() {
  return (
    <Router>
      <MainMenu />

        <main role="main" class="flex-shrink-0">
          <Route exact path="/" component={Home} />
          <Route path="/my-data" component={PlaceholderPage('My Data')} />
          <Route path="/my-physician" component={PlaceholderPage('My Physician')} />
          <Route path="/patient-groups" component={PlaceholderPage('Patient Groups')} />
        </main>
    </Router>
  );
}

function MenuItem({ label, to, exact }) {
  return (
    <Route
      path={to}
      exact={exact}
      children={({ match }) => (
        <li className={match ? "nav-item active" : "nav-item"}>
          <Link to={to} className="nav-link">{label}
            { match ? <span className="sr-only">(current)</span> : '' }
          </Link>
        </li>
      )}
    />
  );
}

const MainMenu = () => {
  return (
  <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
  <a className="navbar-brand" href="#">Zebra Health Net</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExampleDefault" aria-controls="navbarsExampleDefault" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarsExampleDefault">
    <ul className="navbar-nav mr-auto">
      <MenuItem to="/" label="Home" exact />
      <MenuItem to="/my-physician" label="My Physician" />
      <MenuItem to="/my-data" label="My Data" />
      <MenuItem to="/patient-groups" label="Patient Groups" />
    </ul>

            <ul className="nav navbar-nav navbar-right">
                <li className="dropdown">
                    <a href="#" className="dropdown-toggle" data-toggle="dropdown">
                        <span data-feather="user"></span>
                        <strong>Patient One</strong>

                    </a>
                    <div className="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenu2">
                      <button className="dropdown-item" type="button">Action</button>
                      <button className="dropdown-item" type="button">Another action</button>
                      <button className="dropdown-item" type="button">Logout</button>
                    </div>
                </li>
            </ul>
  </div>
</nav>
);
}

function Home() {
  return (
    <React.Fragment>
  <div className="jumbotron">
    <div className="container">
      <h1 className="display-3">Zebra Health Net</h1>
      <p>This is a template for a simple marketing or informational website. It includes a large callout called a jumbotron and three supporting pieces of content. Use it as a starting point to create something more unique.</p>
      <p><a className="btn btn-primary btn-lg" href="#" role="button">Learn more &raquo;</a></p>
    </div>
  </div>

  <div className="container">
    <div className="row">
      <div className="col-md-4">
        <h2>Patients</h2>
        <p>Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui. </p>
        <p><a className="btn btn-success" href="#" role="button">Create a Profile &raquo;</a></p>
      </div>
      <div className="col-md-4">
        <h2>Providers</h2>
        <p>Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui. </p>
        <p><a className="btn btn-success" href="#" role="button">Connect to Patients &raquo;</a></p>
      </div>
      <div className="col-md-4">
        <h2>Specialists</h2>
        <p>Donec sed odio dui. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Vestibulum id ligula porta felis euismod semper. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.</p>
        <p><a className="btn btn-success" href="#" role="button">Recruit Participants &raquo;</a></p>
      </div>
    </div>

    <hr/>

  </div>
</React.Fragment>
  );
}

const PlaceholderPage = (title) => () => {
  return (
    <div>
      <h1>{ title }</h1>
      <p>This is a placeholder page, add things here</p>
    </div>
  );
};

function MyData() {
  return (
    <div>
      <h2>My Data</h2>
    </div>
  );
}

function Topics({ match }) {
  return (
    <div>
      <h2>Topics</h2>
      <ul>
        <li>
          <Link to={`${match.url}/rendering`}>Rendering with React</Link>
        </li>
        <li>
          <Link to={`${match.url}/components`}>Components</Link>
        </li>
        <li>
          <Link to={`${match.url}/props-v-state`}>Props v. State</Link>
        </li>
      </ul>

      <Route path={`${match.path}/:topicId`} component={Topic} />
      <Route
        exact
        path={match.path}
        render={() => <h3>Please select a topic.</h3>}
      />
    </div>
  );
}

function Topic({ match }) {
  return (
    <div>
      <h3>{match.params.topicId}</h3>
    </div>
  );
}

export default BasicExample;
