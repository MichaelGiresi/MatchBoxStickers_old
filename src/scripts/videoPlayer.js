import { useState, useEffect } from 'react'
import video from '../assets/video.mp4'



const VideoPlayer = (videoElement) => {
    const [playerState, setPlayerState] = useState({
        isPlaying: true,
        progress: 0,
        speed: 1, 
        isMuted: true,

    })

    const togglePlay = () => {
        setPlayerState({
            ...playerState,
            isPlaying: !playerState.isPlaying,
        })
    }

    useEffect(() => {
        playerState.isPlaying
        ? videoElement.current.play()
        : videoElement.current.pause()
    }, [playerState.isPlaying, videoElement])

    const handleOnTimeUpdate = () => {
        const progress = (videoElement.current.currentTime / videoElement.current.duration) * 100;
        setPlayerState({
            ...playerState,
            progress,
        })
    }

    const handleVideoProgress = (event) => {
        const manualChange = Number(event.target.value)
        videoElement.current.currentTime = (videoElement.current.duration / 100) * manualChange;
        setPlayerState({
            ...playerState,
            progress: manualChange,
        })
    }

    const heroButtonOneTime = (event) => {
        videoElement.current.currentTime = (videoElement.current.currentTime = 0)
    }

    const heroButtonTwoTime = (event) => {
        videoElement.current.currentTime = (videoElement.current.currentTime = 50)
    }
    
    const heroButtonThreeTime = (event) => {
        videoElement.current.currentTime = (videoElement.current.currentTime = 100)
    }

    const heroButtonFourTime = (event) => {
        videoElement.current.currentTime = (videoElement.current.currentTime = 150)
    }

    const heroButtonFiveTime = (event) => {
        videoElement.current.currentTime = (videoElement.current.currentTime = 200)
    }

    const heroButtonSixTime = (event) => {
        videoElement.current.currentTime = (videoElement.current.currentTime = 250)
    }

    const handleVideoSpeed = (event) => {
        const speed = Number(event.target.value)
        videoElement.current.playbackRate = speed
        setPlayerState({
            ...playerState,
            speed,
        })
    }

    const toggleMute = () => {
        setPlayerState({
            ...playerState,
            isMuted: !playerState.isMuted
        })
    }

    useEffect(() => {
        playerState.isMuted
        ? (videoElement.current.muted = true)
        : (videoElement.current.muted = false)
    }, [playerState.isMuted, videoElement])

    return {
        playerState,
        togglePlay,
        handleOnTimeUpdate,
        handleVideoProgress,
        handleVideoSpeed,
        toggleMute,
        heroButtonOneTime,
        heroButtonTwoTime,
        heroButtonThreeTime,
        heroButtonFourTime,
        heroButtonFiveTime,
        heroButtonSixTime,
    }

}

export default VideoPlayer