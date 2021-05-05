import React from 'react';
//import { Deck, Slide, Heading } from 'spectacle';
import AlloyEditor from 'alloyeditor';


class EditProps extends React.Component {
    componentDidMount() {
        AlloyEditor.editable('editable');
    }
    render() {

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
                        Cupcake ipsum dolor sit amet halvah.
                        Icing I love carrot cake cotton
                        candy danish brownie wafer I love.
                        Cake chocolate cake biscuit tiramisu
                        ice cream pudding pastry.
                        Gingerbread muffin candy canes tart
                        tootsie roll.
										</p>

                    <img
                        className="my-4 img-fluid"
                        src="images/home/cupcakes.jpg"
                        alt=""
                    />

                    <p>
                        Muffin cotton candy cotton candy
                        wafer lollipop cheesecake bear claw.
                        Pastry caramels toffee cake dragée
                        toffee chocolate cake cupcake.
                        Pastry lemon drops I love wafer
                        macaroon bonbon marzipan.
										</p>

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
}
export default EditProps;