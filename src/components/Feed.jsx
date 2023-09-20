import React from 'react'
import PostBox from './PostBox'
import Story from './Story'

const Feed = () => {
    return (
        <div className='flex-grow h-screen pb-44 pt-6'>
            <div>
                <Story></Story>
                <PostBox></PostBox>
            </div>
        </div>
    )
}

export default Feed