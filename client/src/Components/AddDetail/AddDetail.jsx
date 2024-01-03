/* eslint-disable react/prop-types */


const AddDetail = ({ add }) => {
    const { image } = add;
    return (
        <div className=" w-full border-solid border-2 border-indigo-600">

            <img className='h-full' src={image} alt="" />
        </div>
    );
};

export default AddDetail;