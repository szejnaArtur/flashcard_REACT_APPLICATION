import React from 'react';

import {AiOutlineCheck, AiOutlineClose} from 'react-icons/ai';

const SimpleToastSuccess = (props) => {
    return(

        <div id="toast-simple"
             className="absolute top-5 m-auto left-0 right-0 flex justify-between items-center p-4 space-x-4 w-full max-w-xs text-gray-500 bg-white rounded-lg shadow dark:text-gray-400 dark:divide-gray-700 space-x dark:bg-gray-800"
             role="alert">
            <div className='flex items-center'>
                <AiOutlineCheck className="w-6 h-6 text-blue-600 dark:text-blue-500"/>
                <div className="pl-4 text-sm font-normal">{props.message}</div>
            </div>
            <button
                onClick={() => props.click(false)}
                type="button"
                className="ml-auto -mx-1.5 -my-1.5 text-gray-400 hover:text-gray-900 rounded-lg p-1.5 hover:bg-gray-100 inline-flex h-8 w-8"
            >
                <AiOutlineClose className="w-6 h-6 text-gray-500"/>
            </button>
        </div>

    )
}

export default SimpleToastSuccess;