import ReactPlayer from "react-player"


const Vidio = ({item}) => {
  return (
    <ReactPlayer controls width={280} height={400}  url={item.video} />
  )
}

export default Vidio