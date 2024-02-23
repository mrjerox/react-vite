import HeaderLogo from "./HeaderLogo";
import HeaderNav from "./HeaderNav";
import HeaderSocial from "./HeaderSocial";

function Header() {
    return (
        <>
            <header id="header" className="header d-flex align-items-center fixed-top">
                <div className="container-fluid container-xl d-flex align-items-center justify-content-between">
                  <HeaderLogo/>
                  <HeaderNav/>
                  <HeaderSocial/>
                </div>
            </header>
        </>
    );
}

export default Header;
