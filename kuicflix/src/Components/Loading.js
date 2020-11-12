import React from 'react';
import Loader from "react-loading";

export default function Loading() {
    return (
        <div className="container">
          <div className="row text-center">
              <div className="col-sm-12 mx-auto loader">
                <Loader type="spin" color="#023e8a" width={30} height={30} />
                <h5 className="text-center">Loading...</h5> 
              </div>
          </div>
        </div>
    )
}
