import React from "react"; 
import PropTypes from "prop-types";
import "./profile component.css"

export default function ProfilAziz(props) {
    return (
    <div className="container_total">
        <div>{props.children}</div>
        <div className="informations">
            <h3>
                <span>Name :</span> {props.fullName}{" "}
            </h3>
            <p>
                {" "}
                <span>Profession :</span> {props.profession}{" "}
            </p>
            <p>
                {" "}
                <span>Bio :</span> {props.bio}{" "}
            </p>
            <button
                onClick={() => props.handleName(props.fullName)}
                className="btn btn-profile"
            >
                Profil User{" "}
            </button>
        </div>
    </div>
    );
}

    ProfilAziz.propTypes = {
        fullName: PropTypes.string,
        profession: PropTypes.string,
        bio: PropTypes.string,
        handleName: PropTypes.func
      };

    ProfilAziz.defaultProps = {
        fullName: "No Data",
        profession: "No Data",
        bio: "No Data",
        handleName: () => {
          alert("There is no Props");
        }
      };
