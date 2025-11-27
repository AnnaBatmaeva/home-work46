import { useEffect} from 'react'
import { Outlet, NavLink } from "react-router-dom";

import { useSelector, useDispatch } from 'react-redux'

import './index.css'
import styled from "styled-components";

const Navigation = styled(NavLink)`
  padding-bottom: 5px;
  font-size: 20px;
  text-decoration: none;
  color: #808080;
  padding-top: 5px;
  padding-left: 10px;
`;

const NavStyled = styled.nav`
  display: flex;
  gap: 35px;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 100;
  background-color: #c0c0c0;

`;



function App() {
  const theme = useSelector((state) => state.theme)
  useEffect(() => {
  document.body.className = theme; 
}, [theme]);



  return (
    <>
      <NavStyled>
        <Navigation to="">Головна</Navigation>
        <Navigation to="Posts">Пости</Navigation>
        <Navigation to="Form">Форма</Navigation>
      </NavStyled>
      <Outlet />
    
      </>
    )
}

export default App
