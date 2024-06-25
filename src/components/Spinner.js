import React, { Component } from 'react'
import { DNA } from 'react-loader-spinner'


export class Spinner extends Component {
        render() {
            return (
                <div className="spinner-container text-center my-3">
                    {/* <DNA
                    type="BallTriangle"
                    color="#00BFFF"
                    height={100}
                    width={100}
                    /> */}

                    <DNA />

                    {/* <TailSpin /> */}
                </div>
            )
        }

}

export default Spinner
