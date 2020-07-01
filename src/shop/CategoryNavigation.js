import React, { Component } from "react";
import { ToggleLink } from "../ToggleLink";
//import { Link } from "react-router-dom";

export class CategoryNavigation extends Component {
    render() {
        return <React.Fragment>
            {/* <Link className="btn btn-secondary btn-block"
                  to={ this.props.baseUrl }>
                ALL
            </Link> */}

            <ToggleLink to = {this.props.baseUrl} exact={true}>ALL</ToggleLink>


            { this.props.categories && this.props.categories.map(cat => 
                // <Link className="btn btn-secondary btn-block"
                //       key={cat}
                //       to={`${this.props.baseUrl}/${cat.toLowerCase()}`}>
                //     { cat }
                // </Link>

                <ToggleLink key={cat}
                            to = {`${this.props.baseUrl}/${cat.toLowerCase()}`}>
                        { cat }
                </ToggleLink>
            )}
        </React.Fragment>
    }
}