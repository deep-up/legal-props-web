import React from 'react'
import { Button, Modal, Spinner } from 'react-bootstrap'
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";




function Loading() {
    const [t] = useTranslation("global");
    const isLoading = useSelector((Store) => Store.commonReducer.loading);

    return (
        <React.Fragment>
            {(isLoading === true) ?
                <Modal id="modal"  onHide={()=>{}} centered size="sm" show={true} animation={false} >
                    <Button variant="primary" disabled>
                        <Spinner
                            as="span"
                            animation="grow"
                            size="sm"
                            role="status"
                            aria-hidden="true"
                        />
                        {t("loading")}...
                    </Button>
                </Modal> : <React.Fragment />
            }




        </React.Fragment>

    );

}

export default Loading;


