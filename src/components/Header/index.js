import './index.css';
import { FaShoppingBasket } from 'react-icons/fa';
import { Container } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import { Link, Route } from 'react-router-dom';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BsChevronDown } from 'react-icons/bs';
import { signOut } from '../../actions/actionAuth';
import { toggleCart } from '../../actions/actionProducts';
const Menus = [
    {
        to: "/",
        exact: true,
        name: "HOME"
    },
    {
        to: '/Bookstore',
        exact: true,
        name: "BOOK STORE"
    },
    {
        to: "/Blog",
        exact: true,
        name: "BLOG"
    },
    {
        to: "/My-account",
        exact: true,
        name: "MY ACCOUNT"
    },
    {
        to: "/Contact",
        exact: true,
        name: "CONTACT"
    }
]
export const Header = () => {
    const dispatch = useDispatch();
    const user = useSelector(state => state.user);
    const [isClick, setIsClick] = useState(false);
    const [st, setSt] = useState(false);
    const [isClickMenu, setIsClickMenu] = useState(false);
    const carts = useSelector(state => state.cart);
    const history = useHistory();
    const CustomLinkActive = (({ label, to, activeOnlyWhenExact }) => {
        return (
            <Route
                path={to}
                key={to}
                exact={activeOnlyWhenExact}
                children={({ match }) => {
                    var active = match ? "active" : '';
                    return (
                        <li onClick={isClickFunc}
                            className={`navbar-item ${active}`}>
                            <Link to={to}>{label}</Link>
                        </li>
                    )
                }}
            />
        )
    })
    const isClickFunc = () => {
        setIsClick(!isClick);
    }
    return (
        <header
            style={{ backgroundColor: `${history.location.pathname !== "/" ? "#2F2B35" : ""}` }}
            className="header-wrap">
            <Container>
                <div className="navbar-wrap">
                    <h1 className="header-logo">
                        <a href="#" className="header-logo__link">
                            <div className="header-logo__text">Bookie</div>
                            <p className="header-logo-description">Đam mê sách</p>
                        </a>
                    </h1>
                    <nav className={`header-navbar ${isClickMenu ? "active" : ""}`}>
                        <ul className="navbar-list">
                            {Menus.map(menu => {
                                return (
                                    <CustomLinkActive
                                        key={menu.path}
                                        to={menu.to}
                                        label={menu.name}
                                        activeOnlyWhenExact={menu.exact}
                                        isClick={isClickFunc}
                                    />
                                )
                            })}
                            {!user ? <li className={`navbar-item navbar-auth`}>
                                <Link to={"/Auth"}>Đăng nhập</Link>
                            </li> : ""}
                        </ul>
                    </nav>
                    <div className="header-account-cart">
                        <div className="header-menu-mobile" onClick={() => setIsClickMenu(!isClickMenu)}>
                            <span className={`${isClickMenu ? "active" : ""}`}></span>
                            <span className={`${isClickMenu ? "active" : ""}`}></span>
                            <span className={`${isClickMenu ? "active" : ""}`}></span>
                        </div>
                        <div className="d-flex justify-content align-items">
                            <div className="header-cart" onClick={() => dispatch(toggleCart(true))}>
                                <FaShoppingBasket />
                                <div className="header-cart__amount">{carts?.length || 0}</div>
                            </div>
                            {Object.getOwnPropertyNames(user).length !== 0 ? <div onClick={() => setSt(!st)} className="header-account">
                                <img
                                    src={user.image || `https://thumbs.dreamstime.com/b/default-avatar-profile-image-vector-social-media-user-icon-potrait-182347582.jpg`}
                                />
                                <BsChevronDown
                                    fontWeight="bold"
                                    fontSize="1.2rem"
                                    color="white"
                                />
                                {st ? <ul className="header-account_settings">
                                    {user.role === "admin" ? <li><a href="">Dashboard</a></li> : ""}
                                    <li>
                                        <a href="#">
                                            Đơn hàng
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">Thông tin cá nhân</a>
                                    </li>
                                    <li>
                                        <a href="#">Đổi mật khẩu</a>
                                    </li>
                                    <li onClick={() => signOut(dispatch)}>
                                        <a href="#">Đăng xuất</a>
                                    </li>
                                </ul> : ""}
                            </div>
                                : ""}
                        </div>
                    </div>
                </div>
            </Container>
        </header >
    )
}
