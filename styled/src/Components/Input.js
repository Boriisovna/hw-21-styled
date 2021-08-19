import styled from "styled-components";

export const Input = styled.input`
  color: white;
    width:400px;
    height:50px;
    margin:8px;
    border:1px solid rgba(120,120,120,0.7147233893557423);
    outline: none;
    border-radius: 5px;
    background:none;
    font-weight: 500;
    font-size: 14px;
    padding:10px;

`

export const InputCheckbox = styled.input`
    width:15px;
    height:15px;
    background:none;
    background-color:pink;
    margin-right:20px;
    margin-top:10px;

`
export const InputCheckboxText = styled.div`
  line-height: 1.5;
  color: #C8C8C8;
  margin-top: 10px;

`

export const InputSubmit = styled.input`
  color: white;
    width:400px;
    height:40px;
    margin:20px;
    outline: none;
    border-radius: 5px;
    background:none;
    background-color:#7faaff;
    cursor: pointer;
    box-shadow:none;
    font-weight: 400;
    font-size: 24px;
    border:none;
    text-align:center;
    &[value]{
        text-transform: uppercase;
        color:#162137;
        font-size: 16px;
        font-weight: 600;


      
    }


`