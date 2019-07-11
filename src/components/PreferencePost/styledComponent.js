import styled from '@emotion/styled/macro';

export const PreferencePost = styled('div')`
  background: #fff;
  border-radius: 5px;
  box-shadow: #e6e6e6 1px 3px 7px;
  width: 33.33%;
  padding: 35px 24px;
  margin: 0 0 17px;
`;

export const RowLine = styled('div')`
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
`;

export const ColumnDesсription = styled('div')`
  width: 80%;
`;

export const ColumnCheckbox = styled('div')`
  width: 20%;
`;

export const H3Title = styled('h3')`
  font-size: 24px;
  font-family: 'Roboto', sans-serif;
  color: rgb(26, 25, 29);
  line-height: 1.2;
  text-align: left;
  margin: 0 0 10px;
`;

export const ParagraphComponent = styled('p')`
  font-family: 'Roboto', sans-serif;
  font-size: 16px;
  color: rgb(152, 152, 152);
  line-height: 1.2;
  margin: 0 0 20px;
`;

export const Column = styled('div')`
  width: 70%;
  & + div {
    width: 30%
  }
`;

export const ButtonLink = styled('a')`
  background: #fff;
  font-family: 'Roboto', sans-serif;
  font-size: 14px;
  color: rgb(56, 171, 237);
  line-height: 1.2;
  border: 1px solid rgb(56, 171, 237);
  border-radius: 4px;
  display: block;
  text-align: center;
  padding: 6px 0;
  cursor: pointer;
  text-decoration: none;
  &:hover {
    color: #fff;
    background: rgb(56, 171, 237);
  }
`;

export const SwitchInput = styled('label')`
  position: relative;
  display: inline-block;
  width: 63px;
  height: 25px;
  float:right;
  overflow: hidden;
  input {
    opacity: 0;
    width: 0;
    height: 0;
    &:checked + .switch-slider {
      
      &:before {
        background-color: #38abed;
        box-shadow: inset 0px 0px 7px 0px rgba(56,164,228,1);
        right: auto;
        left: 0;
      }
    }
  }
  .switch-slider {
    border: 1px solid #dedede;
    border-radius: 5px;
    background: #fff;
    box-shadow: inset 0px 0px 26px -4px rgba(245,245,245,1);
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #fff;
    transition: .4s;
    &:before {
      border-radius: 5px;
      position: absolute;
      content: "";
      height: 25px;
      width: 50%;
      right: 0px;
      top: -1px;
      bottom: -1px;
      background-color: #d3d3d3;
      transition: .4s;
    }
  }
`;

export const LineBlockRow = styled('label')`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  position: relative;
  cursor: pointer;
  width: 50%;
  height: 30px;
  font-size: 18px;
  font-family: 'Roboto', sans-serif;
  color: rgb(152, 152, 152);
  line-height: 1.2;
  text-align: left;
  
  input[type="checkbox"] {
    position: absolute;
    left: -999em;
    + span:before {
      content: "";
      display: inline-block;
      width: 18px;
      height: 18px;
      vertical-align: middle;
      border: 2px solid #9d9d9d;
      border-radius: 100%;
      font: bold 18px/7px Verdana, sans-serif;
      color: #339;
      position: absolute;
      right: 0;
      transition: .4s;
    }
    &:checked + span:before {
      background: red;
    }
  }
`;

