"use client"

import MeetingRoom from '@/components/MeetingRoom';
import MeetingSetup from '@/components/MeetingSetup';
import Loader from '@/components/ui/Loader';
import { useGetCallById } from '@/hooks/useGetCallById';
import { useUser } from '@clerk/nextjs'
import { StreamCall, StreamTheme } from '@stream-io/video-react-sdk';
import React, { useState } from 'react'

const Meeting = ({ params: {id} }: { params: { id: string } }) => {
  const {user, isLoaded} = useUser();
  const [isSetupComplete, setisSetupComplete] = useState(false);
  const { call, isCallLoading } = useGetCallById(id);

  if(!isLoaded || isCallLoading) return <Loader />

  return (
    <StreamCall call={call}>
      <StreamTheme>
        {!isSetupComplete ? (
          <MeetingSetup setIsSetupComplete={setisSetupComplete}/>
        ): (
          <MeetingRoom />
        )}
      </StreamTheme>
    </StreamCall>
  )
}

export default Meeting