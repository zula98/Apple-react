//import data from 'query'
import React, { useState, useEffect } from 'react'
import "./Youtube.css"

function Youtube() {
    const [youTubeVideos, addVideos] = useState([])
    useEffect(() => {
        fetch("https://www.googleapis.com/youtube/v3/search?key=AIzaSyCQ3DLVWxVvR6NDQkaiM_0f_Mgji3NOJQ4&channelId=UCE_M8A5yxnLfW0KghEeajjw&part=snippet,id&order=date&maxResults=6")

            .then((respons) => respons.json())
            .then((data) => {
                const abebe = data.items;
                addVideos(abebe)
            });
    }, []);
    console.log(youTubeVideos)
    return (
        <div className="allVideoWrapper">
            <div className="container">
                <div className="row justify-content-center text-center">
                    <div className="col-12">
                        <div className="title-wrapper">
                            <h1> Latest Videos</h1>
                            <br />
                            <br />
                        </div>
                    </div>
                    {youTubeVideos.map((singleVideo) => {
                        let vidId = singleVideo.id.videoId;
                        let vidLink = `https://www.youtube.com/watch?v=${vidId}`;
                        let videoWrapper = (
                            <div key={vidId} className="col-sm-12 col-md-6 col-lg-4">
                                <div className="singleNewsWrapper">
                                    <div className="videoThumbnail">
                                        <a href={vidLink} target="_blank">
                                            <img src={singleVideo.snippet.thumbnails.high.url} />
                                        </a>
                                    </div>
                                    <div className="videoInfoWrapper">
                                        <div className="videoTitle">
                                            <a href={vidLink} target="_blank">
                                                {singleVideo.snippet.title}
                                            </a>
                                        </div>
                                        <div className="videoDesc">
                                            {/* {singleVideo.snippet.description} */}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        );
                        return videoWrapper;
                    })}
                </div>
            </div>
        </div>
    );
}

export default Youtube;