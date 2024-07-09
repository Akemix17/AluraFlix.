import banner_video from"../assets/banner_video.mp4"
import styled from "styled-components";

const BannerStyle = styled.div`
    position: relative; 
    z-index: 2;
    height: 500px;

.title{ 
    margin-top: 150px;
    margin-left: 30px;
    padding: 10px;
    width: 40%;
    text-align: center;
    display: flex;
    flex-flow: column wrap;
    justify-content: center;
    position: absolute;
    z-index: 10;
    font-size: 50px;
    color: rgb(255, 255, 255);
    backdrop-filter: blur(15px);
    border: solid 5px rgb(9, 121, 196);
    box-shadow: 0px 0px 15px 10px rgb(3, 3, 3);
}
video {
    position: absolute;
    width: 100%;
    height: 100%;
    object-fit: cover;
    
}
.capa {
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: rgb(4, 0, 58);
    opacity: 0.5;
}
`
export const Banner = () => {
  return <BannerStyle>
    <video src={banner_video} muted autoPlay loop></video>
    <h1 className="title">Disfruta de todos los openings en un mismo sitio!</h1>
    <div className="capa"></div>
  </BannerStyle>
};
