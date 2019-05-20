
function getVideos (){
  let videos = []
  const count = 22
  for(let i=0;i<count;i++){
    videos.push(require(`../../video/others/${i+1}.mp4`))
  }
  return videos
}

export const videos = getVideos()