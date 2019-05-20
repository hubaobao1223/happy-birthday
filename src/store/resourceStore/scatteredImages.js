
function getPictures (){
  let pictures = []
  const count = 68
  for(let i=0;i<count;i++){
   pictures.push({
      des:'',
      url:require(`../../image/others/${i+1}.jpg`)
   })
  }
  return pictures
}

export const pictures = getPictures()