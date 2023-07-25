// """loading buddies"""
function App() {

    const [showModal, setShowModal] = React.useState(false);

    const handleClose = () => {
        setShowModal(false);
    };
    const handleOpen = () => {
        setShowModal(true);
    };


    return (
        <div>
            <div className = "middle-headline">
            <h1> Jaclyn Louise Detweiler <br></br></h1>
            <h1> ✨ Software Engineer ✨</h1>
            </div>


        </div>
    );
}




{/* <div>Experience:</div>
<button type="button" className="btn btn-primary app" data-bs-toggle="modal" data-bs-target='#jackieinfo' data-bs-whatever='jackieinfo' onClick={handleOpen} >View More</button><br></br><br></br>
<div className={`modal fade ${showModal ? "show" : ""}`}
    id="exampleModal" aria-labelledby='modal-label-jackie-info' aria-hidden={!showModal} style={{ display: showModal ? "block" : "none" }} >
 <div className="modal-dialog">
                <div className="modal-content" style={{
                    fontSize: "large",
                    border: "1px solid rgba(14, 79, 79)",
                    backgroundColor: "rgba(245, 255, 245)",
                    textAlign: "center"
                }} >
                    <button type="button" className="btn-close" onClick={handleClose}></button>
                    <div className="modal-header">
                        <h5 className="modal-title" id='modal-label-jackieinfo'>More info</h5>
                    </div>
                    <div className="modal-body">
                    
                    <div className="modal-footer">
                    <div>Hello</div>

                    </div>
                    </div>
                </div>
            </div> */}