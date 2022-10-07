import react, { ReactNode } from 'react';
import { Container } from './Style';
import NavBar from '../navBar';
import Body from '../Body';
import Post from '../Post';

interface LayoutProps {
    children: ReactNode;
}

const Layout = ({children}: LayoutProps) => {
    
    return (
        <Container>
            <NavBar/>
            <Body/>
            {children}
        </Container>
    );
}

export default Layout;