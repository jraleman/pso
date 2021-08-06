import React from 'react';
import styled from 'styled-components'
import logo from './assets/logo.svg';

const AppHeader = () => {
    const content = 'Edit src/App.tsx and save to reload.';
    const footer = 'Learn React';
    return (
        <Header>
            <Logo src={logo} alt="logo" />
            <p>{content}</p>
            <Link href="https://github.com/jraleman" target="_blank" rel="noopener noreferrer">
                {footer}
            </Link>
        </Header>
    );
};

const Logo = styled.img`
    height: 40vmin;
    pointer-events: none;
    @media (prefers-reduced-motion: no-preference) {
        animation: App-logo-spin infinite 20s linear;
    }
`;

const Header = styled.header`
    background-color: #282c34;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: calc(10px + 2vmin);
    color: white;
`;

const Link = styled.a`
    color: #61dafb;
`;

export default AppHeader;
