import React, { useEffect } from 'react';
//import { Deck, Slide, Heading } from 'spectacle';
import AlloyEditor from 'alloyeditor';


function EditProps() {
            AlloyEditor.editable("editable"
            );
    return (
        <React.Fragment>
            <div
                id="editable"
                className="bg-white p-3 p-sm-5">
                <h2 className="h1">
                    This is a Live Demo
                            </h2>

                <h3 className="my-4">
                    Click/Tap here to edit
                            </h3>
                <p>
                    Muffin soufflé jelly beans macaroon
                    I love I love. Cheesecake brownie
                    sugar plum. Cookie donut carrot cake
                    gummies. Biscuit jelly sweet dessert
                    sesame snaps tiramisu I love ice
                    cream.
                            </p>
            </div>

        </React.Fragment>
    );
}
export default EditProps;