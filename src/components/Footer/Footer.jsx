

const Footer = () => {
    return (

       

        <footer className=" bg-white text-black p-10">

           
                <h2 className="text-black text-3xl font-bold text-center mt-10">Gadget Haven</h2>
                <p className="text-base font-medium text-center py-5 mb-10 text-gray-600">Leading the way in cutting-edge technology and innovation.</p>
            
                <div className="divider"></div>

            <div className="footer text-black font-medium">
            <nav>
                <h6 className="footer-title">Services</h6>
                <a className="link link-hover">Branding</a>
                <a className="link link-hover">Design</a>
                <a className="link link-hover">Marketing</a>
                <a className="link link-hover">Advertisement</a>
            </nav>
            <nav>
                <h6 className="footer-title">Company</h6>
                <a className="link link-hover">About us</a>
                <a className="link link-hover">Contact</a>
                <a className="link link-hover">Jobs</a>
                <a className="link link-hover">Press kit</a>
            </nav>
            <nav>
                <h6 className="footer-title">Legal</h6>
                <a className="link link-hover">Terms of use</a>
                <a className="link link-hover">Privacy policy</a>
                <a className="link link-hover">Cookie policy</a>
            </nav>
            </div>
        </footer>
    );
};

export default Footer;