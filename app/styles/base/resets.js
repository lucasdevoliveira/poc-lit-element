import { css } from 'lit-element';

export const buttonStyles = css`
  :host {
    display: block;
    font-family: 'Open Sans', sans-serif;
  }
  h1 {
    margin: 20px 0 0 0;
    font-size: 18px;
  }
  p {
    margin: 5px 0 0 0;
    font-size: 12px;
    color: #50525f;
  }
  p > a {
    color: #0083ff;
    font-size: 12px;
  }
  a {
    text-decoration: none;
  }
  button {
    border: 0;
  }
  input {
    padding: 0;
  }
`;

