function Footer()
{
    return(
        <>
        <div className="container-fluid footer-back py-5">
            <div className="row d-flex justify-content-evenly">
                <div className="col-6 col-md-4 d-flex flex-column">
                        <a href="#"> <span id='hov-border'>Terms of Use</span></a>
                        <a href="#" className="my-2"><span id='hov-border'>Privacy Policy</span></a>
                        <a href="#"><span id='hov-border'>FAQs</span></a>
                </div>
                <div className="col-6 col-md-2 d-flex flex-column">
                    <p>Connect with us</p>
                    <div className="d-flex justify-content-between">
                    <a href="#"><i className="fa-brands fa-facebook"></i></a>
                    <a href="#"><i className="fa-brands fa-instagram"></i></a>
                    <a href="#"><i className="fa-brands fa-twitter"></i></a>
                    <a href="#"><i className="fa-brands fa-linkedin"></i></a>
                    </div>
                </div>
                <p className="text-center pt-5">© 2022 Epilogue Sequel Pvt. Ltd. All right reserved</p>
            </div>
        </div>
        </>
    )
}

export default Footer