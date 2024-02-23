import FooterContent from "./FooterContent";
import FooterLegal from "./FooterLegal";

function Footer() {
    return (
        <>
            <footer id="footer" className="footer">
                <FooterContent />
                <FooterLegal />
            </footer>
            <a
                href="#"
                className="scroll-top d-flex align-items-center justify-content-center"
            >
                <i className="bi bi-arrow-up-short" />
            </a>
        </>
    );
}

export default Footer;
