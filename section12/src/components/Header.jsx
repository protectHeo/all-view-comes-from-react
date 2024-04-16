import "Header.css"

const Header = ({title, leftChild, rightChild}) => {
    return <header className="Header">
        <div className="header_left"></div>
        <div className="header_center"></div>
        <div className="header_right"></div>
    </header>
}

export default Header;