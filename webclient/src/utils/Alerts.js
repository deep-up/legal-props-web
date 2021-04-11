import SweetAlert from 'react-bootstrap-sweetalert';


function showAlert(typeinput, titleToShow, textToShow, clearAlert,timeout = 0) {
    /*console.log({typeinput, titleToShow, textToShow});*/
    return (
        <SweetAlert
            type={typeinput}
            title={titleToShow}
            onConfirm={clearAlert}
            timeout={timeout}
        >
            {textToShow}
        </SweetAlert>);
};


export function showInfoAlert(titleToShow, textToShow, clearAlert,timeout) {
    return showAlert("info", titleToShow, textToShow, clearAlert,timeout);
};
export function showSuccessAlert(titleToShow, textToShow, clearAlert,timeout) {
    return showAlert("success", titleToShow, textToShow, clearAlert,timeout);
};
export function showErrorAlert(titleToShow, textToShow, clearAlert,timeout) {
    return showAlert("error", titleToShow, textToShow, clearAlert,timeout);
};

