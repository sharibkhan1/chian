import { useOthers } from '@liveblocks/react/suspense'
import Image from 'next/image';
import React from 'react'

const ActiveCollaborator = () => {
    const other = useOthers();
    const collaborators = other.map((other)=> other.info);

  return (
    <ul className='collaborators-list'>
        {collaborators.map(({id , avatar,color ,name })=>(
            <li key={id} >
                <Image
                    src={avatar}
                    alt={name}
                    width={100}
                    height={100}
                    className='inline-block size-8 rounded-full ring-2 ring-dark-100'
                    style={{border:`3px solid ${color}`}}
                />
            </li>
        ))}
    </ul>
  )
}

export default ActiveCollaborator