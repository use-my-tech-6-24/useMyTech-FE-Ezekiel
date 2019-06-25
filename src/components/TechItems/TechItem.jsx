import React from "react";

export default function TechItem({item}) {
  return (
    <div className="col-lg-4 col-md-4 col-sm-12 p-0">
      <div className="card mb-4">
        <div className="view overlay">
          <img
            className="card-img-top"
            src="https://mdbootstrap.com/img/Photos/Others/images/16.jpg"
            alt="Card  cap"
          />
          <a href="#!">
            <div className="mask rgba-white-slight" />
          </a>
        </div>

        <div className="card-body">
          <h4 className="card-title font-weight-bold">{item.name}</h4>

            <h6 className="text-muted">Downtown LA, 90017</h6>
          <p className="font-weight-bold">
            Daily Fee: ${item.price}
          </p>

          {/* <button type="button" className="btn btn-light-blue btn-md">
            Read more
          </button> */}
        </div>
      </div>
    </div>
  );
}
