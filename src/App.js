import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Carousel from "./Components/Carousel";
import Sidebar from "./Components/Sidebar";

function BasicExample() {
  return (
    <Router basename="zebra-net">
        <main role="main" className="flex-shrink-0">
          <Route exact path="/" component={Home} />
          <Route path="/user-demo" component={UserPage} />
          <Route path="/my-data" component={PlaceholderPage('My Data')} />
          <Route path="/my-care-team" component={PlaceholderPage('My Care Team')} />
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

const UserPage = ({match}) => {
  return (
    <React.Fragment>
      <MainMenu />
      <div id="wrapper" style={{paddingTop: '3.5rem'}} >
        <Sidebar match={ match } />
        <div id="content-wrapper">
          <div className="container-fluid">
            <Route path={`${match.path}/:topicId`} component={PlaceholderTab} />
          </div>
        </div>
      </div>
    </React.Fragment>
    );
};

const PlaceholderTab = ({match}) => {
  return (
    <div className="jumbotron giant-zebra">
      <div className="container">
        <h1 className="display-3">{ match.params.topicId }</h1>
        <p>This is a placeholder page, add things here</p>
      </div>
    </div>
  );
};

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
      <MenuItem to="/my-care-team" label="My Care Team" />
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
    <div className="media">
      <div style={{width: '200px', height: '200px'}} className="logo mr-4 align-self-start"></div>
      <div className="media-body">
        <h1 className="display-3">Zebra Health Net</h1>
        <p>Zebra (noun) /ˈzēbrə/ : the American medical slang for an exotic medical diagnosis, or patients with such rare disease.</p>

        <p>Zebras travel in packs at times of vulnerability, and so should you. The developers of ZHN believe that by creating an eco-system where patients freely communicate, yield collective data, and share ideas, our vulnerable patients will thrive. Join us in our efforts to overcome challenges we face as patients of rare disease.</p>
      </div>
    </div></div>
  </div>

  <div className="giant-zebra">
    <div className="container">
      <div className="row">
        <Card>
          <CardTitle title="Patients" />
          <p><a className="btn btn-success" href="#" role="button">Create a Profile &raquo;</a></p>
          <p><Link className="btn btn-link" to="/user-demo" role="button">Login &raquo;</Link></p>
          <p>Join the pack today. We believe in patient-centered approach. Your disease, your body, your data. Each and every patients will dictate how much data will be made available for sharing, and who will be able to access such data.</p>
        </Card>

        <Card>
        <CardTitle title="Providers" />
          <p><a className="btn btn-success" href="#" role="button">Connect to Patients &raquo;</a></p>
          <p><a className="btn btn-link" href="#" role="button">Login &raquo;</a></p>
          <p>Rare disease should go beyond “that cool case you saw in clinic yesterday”. Patients of rare disease rely on providers like yourself, the first point of contact, for early recognition of the underlying condition, and correct referral in a timely manner. ZHN is here to help. Join us to learn more about particular conditions, share your approach to managing unique conditions that lack official guidelines in treatment. Your patient asked you to become their co-pilot? ZHN is here to help. Become an advocate for your patients as they seek to communicate with fellow patients and clinical researchers. </p>
        </Card>

        <Card>
          <CardTitle title="Researchers" />
          <p><a className="btn btn-success" href="#" role="button">Recruit Patients &raquo;</a></p>
          <p><a className="btn btn-link" href="#" role="button">Login &raquo;</a></p>
          <p>Welcome to ZHN where scientific advances in rare conditions is achieved by patient-centered, patient-led efforts. With help of ZHN, one will no longer have to rely on sporadic local referrals to reach critical number of patients to engage in your clinical trial. ZHN offers accelerated patient recruitment, facilitated communications between providers and other researchers. Your research shouldn’t be confined within the wall of your institution. Help us break down the barriers we face when studying rare disease groups.</p>
        </Card>
      </div>
    </div>
  </div>

  <div className="container">

      <Carousel />
  </div>
</React.Fragment>
  );
}

const CardTitle = (props) => <React.Fragment><h3 className="mb-0">{ props.title }</h3><hr /></React.Fragment>

const Card = (props) => {
  return <div className="col-lg-4"> <div className="card" {...props} /></div>
}

const PlaceholderPage = (title) => () => {
  return (
    <div className="jumbotron giant-zebra">
      <div className="container">
        <h1 className="display-3">{ title }</h1>
        <p>This is a placeholder page, add things here</p>
      </div>
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
