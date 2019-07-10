import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";


const tabs = [
	{title: "Basic Information", link: "basic", icon: "user"},
	{title: "Laboratory Results", link: "labs", icon: "flask"},
	{title: "Imaging Data", link: "imaging", icon: "image"},
	{title: "'Omics Data", link: "omics", icon: "dna"}
]

const Sidebar = ({match}) => {
	return (
    <ul className="sidebar navbar-nav">
    	{ tabs.map((tab) => SidebarTab({label: tab.title, to: tab.link, icon: tab.icon})) }
    </ul>
	)
};

function SidebarTab({ label, to, exact, icon}) {
  return (
    <Route
      path={ `/user-demo/${to}` }
      exact={exact}
      children={({ match }) => (
        <li className={match ? "nav-item active" : "nav-item"}>
          <Link to={ `/user-demo/${to}` } className="nav-link">
          	{ icon ?  <i className={`fas fa-fw fa-${icon}`}></i> : ''}
          	&nbsp;
          	{ label }
            { match ? <span className="sr-only">(current)</span> : '' }
          </Link>
        </li>
      )}
    />
  );
}

export default Sidebar;