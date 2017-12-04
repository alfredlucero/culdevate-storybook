/**
*
* Nav
*
*/

import * as React from 'react';
import {
  StyledNav,
} from './StyledNav';


// This Nav is just for storybook purposes; modify it more to handle Links/Routes later on
// in the real application
class Nav extends React.Component<any, any> {
  constructor(props) {
    super(props);

    this.state = {
      isNavExpanded: true,
      isRouteSelected: {
        home: true,
        readme: false,
        careerhax: false,
        osrecommends: false,
        menthorz: false,
        howtos: false,
        sillyconvallwee: false,
        techjargon: false,
        codereviewstdd: false,
        shamelessplugins: false,
      }
    };

    this.expandNav = this.expandNav.bind(this);
    this.minifyNav = this.minifyNav.bind(this);
  }

  expandNav(e) {
    e.preventDefault();
    this.setState({ isNavExpanded: true });
  }

  minifyNav(e) {
    e.preventDefault();
    this.setState({ isNavExpanded: false });
  }

  selectRoute(route, e) {
    e.preventDefault();
    
    const currentRoutes = {
      ...this.state.isRouteSelected
    };

    for (const currentRoute in currentRoutes) {
      if (currentRoutes.hasOwnProperty(currentRoute)) {
        currentRoutes[currentRoute] = false;
      }
    }

    currentRoutes[route] = true;

    this.setState({ isRouteSelected: currentRoutes });
  }

  public render() {
    return (
      <StyledNav>
        <ul>
          <li>
            <a className={`route ${this.state.isRouteSelected["home"] ? "selected" : ""}`} href=""
              onClick={this.selectRoute.bind(this, "home")}>
              <i className="fa fa-home"></i>
              <span className={`route-expanded ${this.state.isNavExpanded ? "" : "hidden"}`}>home</span>
            </a>
          </li>
          <li>
            <a className={`route ${this.state.isRouteSelected["readme"] ? "selected" : ""}`} href=""
              onClick={this.selectRoute.bind(this, "readme")}>
              <i className="fa fa-file"></i> 
              <span className={`route-expanded ${this.state.isNavExpanded ? "" : "hidden"}`}>readme</span>
            </a>
          </li>
          <li>
            <a className={`route ${this.state.isRouteSelected["careerhax"] ? "selected" : ""}`} href=""
              onClick={this.selectRoute.bind(this, "careerhax")}>
              <i className="fa fa-suitcase"></i> 
              <span className={`route-expanded ${this.state.isNavExpanded ? "" : "hidden"}`}>careerhax</span>
            </a>
          </li>
          <li>
            <a className={`route ${this.state.isRouteSelected["osrecommends"] ? "selected" : ""}`} href=""
              onClick={this.selectRoute.bind(this, "osrecommends")}>
              <i className="fa fa-users"></i> 
              <span className={`route-expanded ${this.state.isNavExpanded ? "" : "hidden"}`}>osrecommends</span>
            </a>
          </li>
          <li>
            <a className={`route ${this.state.isRouteSelected["menthorz"] ? "selected" : ""}`} href=""
              onClick={this.selectRoute.bind(this, "menthorz")}>
              <i className="fa fa-superpowers"></i>
              <span className={`route-expanded ${this.state.isNavExpanded ? "" : "hidden"}`}>menthorz</span>
            </a>
          </li>
          <li>
            <a className={`route ${this.state.isRouteSelected["howtos"] ? "selected" : ""}`} href=""
              onClick={this.selectRoute.bind(this, "howtos")}>
              <i className="fa fa-life-buoy"></i> 
              <span className={`route-expanded ${this.state.isNavExpanded ? "" : "hidden"}`}>howtos</span>
            </a>
          </li>
          <li>
            <a className={`route ${this.state.isRouteSelected["sillyconvallwee"] ? "selected" : ""}`} href=""
              onClick={this.selectRoute.bind(this, "sillyconvallwee")}>
              <i className="fa fa-smile-o"></i> 
              <span className={`route-expanded ${this.state.isNavExpanded ? "" : "hidden"}`}>sillyconvallwee</span>
            </a>
          </li>
          <li>
            <a className={`route ${this.state.isRouteSelected["techjargon"] ? "selected" : ""}`} href=""
              onClick={this.selectRoute.bind(this, "techjargon")}>
              <i className="fa fa-industry"></i> 
              <span className={`route-expanded ${this.state.isNavExpanded ? "" : "hidden"}`}>techjargon</span>
            </a>
          </li>
          <li>
            <a className={`route ${this.state.isRouteSelected["codereviewstdd"] ? "selected" : ""}`} href=""
              onClick={this.selectRoute.bind(this, "codereviewstdd")}>
              <i className="fa fa-code"></i> 
              <span className={`route-expanded ${this.state.isNavExpanded ? "" : "hidden"}`}>
                codereviewstdd
              </span>
            </a>
          </li>
          <li>
            <a className={`route ${this.state.isRouteSelected["shamelessplugins"] ? "selected" : ""}`} href=""
              onClick={this.selectRoute.bind(this, "shamelessplugins")}>
              <i className="fa fa-bullhorn"></i> 
              <span className={`route-expanded ${this.state.isNavExpanded ? "" : "hidden"}`}>
                shamelessplugins
              </span>
            </a>
          </li>
          <li>
            <a className={`minify-nav ${this.state.isNavExpanded ? "" : "hidden"}`} 
              href=""
              onClick={this.minifyNav}>
              <i className="fa fa-chevron-left"></i> <span className="minify-nav-expanded">minifynav</span>
            </a>
            <a className={`expand-nav ${this.state.isNavExpanded ? "hidden" : ""}`} 
              href=""
              onClick={this.expandNav}>
              <i className="fa fa-chevron-right"></i>
            </a>
          </li>
        </ul>
      </StyledNav>
    );
  }
}

export default Nav;
