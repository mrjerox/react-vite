function HeaderSocial() {
    return (
        <>
            <div className="position-relative">
                <a href="#" className="mx-2">
                    <span className="bi-facebook" />
                </a>
                <a href="#" className="mx-2">
                    <span className="bi-twitter" />
                </a>
                <a href="#" className="mx-2">
                    <span className="bi-instagram" />
                </a>
                <a href="#" className="mx-2 js-search-open">
                    <span className="bi-search" />
                </a>
                <i className="bi bi-list mobile-nav-toggle" />
                <div className="search-form-wrap js-search-form-wrap">
                    <form action="search-result.html" className="search-form">
                        <span className="icon bi-search" />
                        <input
                            type="text"
                            placeholder="Search"
                            className="form-control"
                        />
                        <button className="btn js-search-close">
                            <span className="bi-x" />
                        </button>
                    </form>
                </div>
            </div>
        </>
    );
}

export default HeaderSocial;
