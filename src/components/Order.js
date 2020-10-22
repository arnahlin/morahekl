import React from "react";
import { Link } from "react-router-dom";

function Order() {
    return (
        <div>
            <form>
                <h1>Panta</h1>
                <p>Hér kemur form til að fylla út</p>
                <p>Nafn:</p>
                <input type="text" />  {/* onChange={this.myChangeHandler} */}
                <p>Símanúmer:</p>
                <input type="text" />
                <p>Email:</p>
                <input type="text" />
                <p>Skilaboð:</p>
                <input type="text" />
            </form>
            <button>Panta</button>
        </div>
    );
}

export default Order;
