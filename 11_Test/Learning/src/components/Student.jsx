import PropTypes from 'prop-types';
function Student({
    // Default property 
    name = "Guest",
    age = 0,
    isStudent = false,
}) {
    return (
        <div className="student">
            <p>Name: {name}</p>
            <p>Age: {age}</p>
            <p>Is Student: {isStudent ? "Yes" : "No"}</p>
        </div>
    );
}

// Define prop types
Student.propTypes = {
    name: PropTypes.string,
    age: PropTypes.number,
    isStudent: PropTypes.bool
}


export default Student;