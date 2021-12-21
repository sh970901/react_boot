import React from 'react'
import { Nav } from 'react-bootstrap'


const Header = () => {
    return (
        <div className='header_part'>
            <Nav variant="tabs" defaultActiveKey="/home">
            <Nav.Item>
                <Nav.Link href="/home">Active</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link eventKey="link-1">Option 2</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link eventKey="link-2">Option 3</Nav.Link>
            </Nav.Item>
            
            </Nav>
        </div>
    )
}

export default Header
