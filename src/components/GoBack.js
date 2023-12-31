import React from 'react'
import { useLocation } from 'react-router-dom';

const GoBack = () => {
    const loc = useLocation();

    return (
        <>
            {loc.pathname !== '/' &&
                <a className="GoBack" href="/">
                    <svg fill="currentColor" className='GoBack__svg' xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 36 36">
                        <path d="M0 0h36v36h-36z" fill="none" />
                        <path d="M30 16.5h-18.26l8.38-8.38-2.12-2.12-12 12 12 12 2.12-2.12-8.38-8.38h18.26v-3z" />
                    </svg>
                    Go back
                </a>
            }
        </>

    )
}

export default GoBack