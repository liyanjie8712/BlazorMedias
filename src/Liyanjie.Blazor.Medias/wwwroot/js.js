export var $blazor_media = {
    get(mediaId) {
        console.log(`media_get----------${mediaId}`);
        try {
            let m = document.getElementById(mediaId);
            return {
                autoplay: m.autoplay,
                controls: m.controls,
                crossorigin: m.crossorigin,
                currentTime: m.currentTime,
                duration: m.duration,
                fullscreen: document.fullscreen,
                loop: m.loop,
                muted: m.muted,
                preload: m.preload,
                volume: m.volume,
            };
        } catch (exception) { }
    },
    play(mediaId) {
        console.log(`media_play----------${mediaId}`);
        try {
            document.getElementById(mediaId)?.play();
        } catch (exception) { }
    },
    pause(mediaId) {
        console.log(`media_pause----------${mediaId}`);
        try {
            document.getElementById(mediaId)?.pause();
        } catch (exception) { }
    },
    setMuted(mediaId, muted) {
        console.log(`media_setMuted----------${mediaId}`);
        try {
            let m = document.getElementById(mediaId);
            m && (m.muted = muted);
        } catch (exception) { }
    },
    setVolume(mediaId, volume) {
        console.log(`media_setVolume----------${mediaId}`);
        try {
            let m = document.getElementById(mediaId);
            if (m) {
                m.muted = volume == 0;
                m.volume = volume;
            }
        } catch (exception) { }
    },
    setControls(mediaId, controls) {
        console.log(`media_setControls----------${mediaId}`);
        try {
            let m = document.getElementById(mediaId);
            m && (m.controls = controls);
        } catch (exception) { }
    },
    setLoop(mediaId, loop) {
        console.log(`media_setLoop----------${mediaId}`);
        try {
            let m = document.getElementById(mediaId);
            m && (m.loop = loop);
        } catch (exception) { }
    },
    setCurrentTime(mediaId, currentTime) {
        console.log(`media_setCurrentTime----------${mediaId}`);
        try {
            let m = document.getElementById(mediaId);
            m && (m.currentTime = currentTime);
        } catch (exception) { }
    },
    setFullscreen(mediaId, fullscreen) {
        console.log(`media_setFullscreen----------${mediaId}`);
        try {
            if (fullscreen)
                document.getElementById(mediaId)?.requestFullscreen();
            else
                document.exitFullscreen();
        } catch (exception) { }
    }
};
