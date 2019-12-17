import { css } from 'lit-element';

export const helpers = css`
  .text-center {
    text-align: center;
  }
  .separator {
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 10px 0 0 0;
  }
  .separator > p {
    margin: 0;
    padding: 0 15px;
    font-size: 18px;
  }
  .separator hr {
    width: 100%;
    border-color: #ccc;
    border-top: 1px;
  }
  .separator-2 {
    border: solid 1px #dddddd;
    margin: 15px 0 0 0;
  }
  .text-bold  {
    font-weight: bold;
    color: #50525f;
  }
  .text-privacity {
    margin: 15px 0 0 0;
  }
  .text-has-account {
    margin: 15px 0 0 0;
  }
`;