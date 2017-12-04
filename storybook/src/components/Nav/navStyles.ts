import { css } from 'styled-components';

const navStyle = css`
  display: inline-block;
  background-color: #e5e5e5;
  
  & {
    ul {
      padding: 0;
      margin: 0;
    }
    
    a {
      display: block;
      padding: 30px;
      font-family: 'Inconsolata';
      font-size: 1.25rem;
      letter-spacing: 2px;
      color: #595959;
      text-decoration: none;
    }
    
    a:hover,
    a.selected {
      color: #fff;
      background-color: #b6c4d6;
    }
    
    li {
      display: block;
      padding: 0;
      margin: 0;
      list-style: none;
    }
    
    .route-expanded,
    .minify-nav-expanded {
      margin-left: 20px;
    }

    .hidden {
      display: none;
    }
  }
`;


export {
  navStyle
};
