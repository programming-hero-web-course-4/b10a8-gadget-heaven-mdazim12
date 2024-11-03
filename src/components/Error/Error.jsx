import errorImg from '../../assets/eror.png';


const Error = () => {
    return (
        <div>
            <div className="mx-auto text-center">
                    <img className='w-[300px] mx-auto' src={errorImg} alt="" />
                    <h3 className='text-7xl font-bold'>Oops</h3>
                    <h3 className='text-3xl font-medium my-3'>404 error page not found</h3>
                    <button className='btn my-2'>Go Home</button>
                
            </div>
        </div>
    );
};

export default Error;