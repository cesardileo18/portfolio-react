import { FidgetSpinner } from 'react-loader-spinner'
const Spinner = () => {

    return (
        <FidgetSpinner
            visible={true}
            height="100"
            width="100"
            ariaLabel="dna-loading"
            wrapperStyle={{}}
            wrapperClass="dna-wrapper"
            ballColors={['#F4442E', '#F4442E', '#F4442E']}
            backgroundColor="#e0e0e0"

        />
    );
}

export default Spinner;