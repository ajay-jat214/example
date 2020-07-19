import React from 'react';
import { useReactMediaRecorder } from "@dragan1810/use-media-recorder";

function Audio(props){

    
    const {status, error, startRecording, stopRecording, mediaBlobUrl, mediaBlob} = useReactMediaRecorder({audio:true})

	return(
        <div>
          <p>{status}</p>
          <button onClick={startRecording}>Start Recording</button>
          <button onClick={()=>{stopRecording();props.recorder(status);}} >Stop Recording</button>
          <video src={mediaBlobUrl} controls autoplay loop/>
        </div>
		);

}

export default Audio;