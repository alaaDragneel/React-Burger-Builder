import React, {Component} from "react";

import classes from "./Model.css";
import Auxu from "../../../hoc/Auxu/Auxu";
import Backdrop from "../Backdrop/Backdrop";

class Model extends Component {

    shouldComponentUpdate(nextProps, nextState) {
        return nextProps.show !== this.props.show;
    }

    render() {
        return (
            <Auxu>
                <Backdrop show={this.props.show} clicked={this.props.modelClosed}/>
                <div
                    className={classes.Modal}
                    style={{
                        transform: this.props.show ? 'translateY(0)' : 'translateY(-100vh)',
                        opacity: this.props.show ? '1' : '0'
                    }}
                >
                    {this.props.children}
                </div>
            </Auxu>
        );
    }
}

export default Model;