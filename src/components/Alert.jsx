const Alert = ({ type, text }) => {
    return (
        <div className="fixed bottom-5 right-5 flex justify-center items-center z-50 animate-slideInUp transition-transform duration-500">
            <div
                className={`p-2 ${
                    type === 'danger' ? 'bg-red-800' : 'bg-blue-800'
                } items-center text-indigo-100 leading-none lg:rounded-full flex lg:inline-flex rounded-lg p-5 shadow-lg`}
                role="alert">
                <p
                    className={`flex rounded-full ${
                        type === 'danger' ? 'bg-red-500' : 'bg-blue-500'
                    } uppercase px-2 py-1 text-xs font-semibold mr-3 text-white shadow-md`}>
                    {type === 'danger' ? 'Failed' : 'Success'}
                </p>
                <p className="mr-2 text-left font-medium tracking-wide">{text}</p>
            </div>
        </div>
    );
}

export default Alert;