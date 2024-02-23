function FooterLegal() {
    return (
        <>
            <div className="footer-legal">
                <div className="container">
                    <div className="row justify-content-between">
                        <div className="col-md-6 text-center text-md-start mb-3 mb-md-0">
                            <div className="copyright">
                                © Copyright{" "}
                                <strong>
                                    <span>ZenBlog</span>
                                </strong>
                                . All Rights Reserved
                            </div>
                            <div className="credits">
                                {/* All the links in the footer should remain intact. */}
                                {/* You can delete the links only if you purchased the pro version. */}
                                {/* Licensing information: https://bootstrapmade.com/license/ */}
                                {/* Purchase the pro version with working PHP/AJAX contact form: https://bootstrapmade.com/herobiz-bootstrap-business-template/ */}
                                Designed by{" "}
                                <a href="https://bootstrapmade.com/">
                                    BootstrapMade
                                </a>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="social-links mb-3 mb-lg-0 text-center text-md-end">
                                <a href="#" className="twitter">
                                    <i className="bi bi-twitter" />
                                </a>
                                <a href="#" className="facebook">
                                    <i className="bi bi-facebook" />
                                </a>
                                <a href="#" className="instagram">
                                    <i className="bi bi-instagram" />
                                </a>
                                <a href="#" className="google-plus">
                                    <i className="bi bi-skype" />
                                </a>
                                <a href="#" className="linkedin">
                                    <i className="bi bi-linkedin" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default FooterLegal;
