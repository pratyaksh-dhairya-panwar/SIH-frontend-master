import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from 'react-bootstrap/Card';
// import "https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200";
// import "./styles.css";

export default function Landing(){
    return(
<div>
    <div className="bg">
        <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="847" viewBox="0 0 1440 847" fill="none" >
            <path d="M1464 672.5H-24M1464 696.5H-24M1464 720.5H-24M1464 744.5H-24M1464 768.5H-24M1464 792.5H-24M1464 816.5H-24M1464 840.5H-24M1464 864.5H-24M1464 888.5H-24M1464 912.5H-24M1464 936.5H-24M1464 960.5H-24M1464 984.5H-24M1464 1008.5H-24M1464 1032.5H-24M1464 1056.5H-24M1464 1080.5H-24M1464 1104.5H-24M1464 1128.5H-24M1464 1152.5H-24M1464 1176.5H-24M1464 1200.5H-24M1464 1224.5H-24M1464 1248.5H-24M1464 1272.5H-24M1464 1296.5H-24M1464 1320.5H-24M1464 1344.5H-24M24.5 648L24.5 1368M48.5 648L48.5 1368M72.5 648L72.5 1368M96.5 648L96.5 1368M120.5 648L120.5 1368M144.5 648L144.5 1368M168.5 648L168.5 1368M192.5 648L192.5 1368M216.5 648L216.5 1368M240.5 648L240.5 1368M264.5 648L264.5 1368M288.5 648L288.5 1368M312.5 648L312.5 1368M336.5 648L336.5 1368M360.5 648L360.5 1368M384.5 648L384.5 1368M408.5 648L408.5 1368M432.5 648L432.5 1368M456.5 648L456.5 1368M480.5 648L480.5 1368M504.5 648L504.5 1368M528.5 648L528.5 1368M552.5 648L552.5 1368M576.5 648L576.5 1368M600.5 648L600.5 1368M624.5 648L624.5 1368M648.5 648L648.5 1368M672.5 648L672.5 1368M696.5 648L696.5 1368M720.5 648L720.5 1368M744.5 648L744.5 1368M768.5 648L768.5 1368M792.5 648L792.5 1368M816.5 648L816.5 1368M840.5 648L840.5 1368M864.5 648L864.5 1368M888.5 648L888.5 1368M912.5 648L912.5 1368M936.5 648L936.5 1368M960.5 648L960.5 1368M984.5 648L984.5 1368M1008.5 648V1368M1032.5 648V1368M1056.5 648V1368M1080.5 648V1368M1104.5 648V1368M1128.5 648V1368M1152.5 648V1368M1176.5 648V1368M1200.5 648V1368M1224.5 648V1368M1248.5 648V1368M1272.5 648V1368M1296.5 648V1368M1320.5 648V1368M1344.5 648V1368M1368.5 648V1368M1392.5 648V1368M1416.5 648V1368M1440.5 648V1368M0.5 -48L0.499968 672M1464 -23.5H-24M1464 0.5H-24M1464 24.5H-24M1464 48.5H-24M1464 72.5H-24M1464 96.5H-24M1464 120.5H-24M1464 144.5H-24M1464 168.5H-24M1464 192.5H-24M1464 216.5H-24M1464 240.5H-24M1464 264.5H-24M1464 288.5H-24M1464 312.5H-24M1464 336.5H-24M1464 360.5H-24M1464 384.5H-24M1464 408.5H-24M1464 432.5H-24M1464 456.5H-24M1464 480.5H-24M1464 504.5H-24M1464 528.5H-24M1464 552.5H-24M1464 576.5H-24M1464 600.5H-24M1464 624.5H-24M1464 648.5H-24M24.5 -48L24.5 672M48.5 -48L48.5 672M72.5 -48L72.5 672M96.5 -48L96.5 672M120.5 -48L120.5 672M144.5 -48L144.5 672M168.5 -48L168.5 672M192.5 -48L192.5 672M216.5 -48L216.5 672M240.5 -48L240.5 672M264.5 -48L264.5 672M288.5 -48L288.5 672M312.5 -48L312.5 672M336.5 -48L336.5 672M360.5 -48L360.5 672M384.5 -48L384.5 672M408.5 -48L408.5 672M432.5 -48L432.5 672M456.5 -48L456.5 672M480.5 -48L480.5 672M504.5 -48L504.5 672M528.5 -48L528.5 672M552.5 -48L552.5 672M576.5 -48L576.5 672M600.5 -48L600.5 672M624.5 -48L624.5 672M648.5 -48L648.5 672M672.5 -48L672.5 672M696.5 -48L696.5 672M720.5 -48L720.5 672M744.5 -48L744.5 672M768.5 -48L768.5 672M792.5 -48L792.5 672M816.5 -48L816.5 672M840.5 -48L840.5 672M864.5 -48L864.5 672M888.5 -48L888.5 672M912.5 -48L912.5 672M936.5 -48L936.5 672M960.5 -48L960.5 672M984.5 -48L984.5 672M1008.5 -48V672M1032.5 -48V672M1056.5 -48V672M1080.5 -48V672M1104.5 -48V672M1128.5 -48V672M1152.5 -48V672M1176.5 -48V672M1200.5 -48V672M1224.5 -48V672M1248.5 -48V672M1272.5 -48V672M1296.5 -48V672M1320.5 -48V672M1344.5 -48V672M1368.5 -48V672M1392.5 -48V672M1416.5 -48V672M1440.5 -48V672" stroke="#D5DAE1"/>
        </svg>
        <div></div>
    </div>
    {/* <div className="header">
        <div className="logo"></div>
        <div className="ele">
            <div className="heading">Home</div>
            <div className="heading">Work</div>
            <div className="heading">History</div>
            <div className="heading">Help &amp; Support</div>
            <div className="heading">Announcement</div>
        </div>
        <div className="profile">
            <div className="profile-img">
                <span className="material-symbols-outlined">
                    account_circle
                    </span>
            </div>
            <div className="profile-name">Pratyaksh</div>
        </div>
    </div> */}
    <div className="content">
        <h1 className="bname">Coal India Limited (CIL)</h1>
        <p> Welcome to India's top coal and petroleum extraction company. Your role here is crucial to our commitment to excellence and innovation in the energy sector. Let's achieve great things together.</p>
        <div className="button">
            <div className="sw">Start Working</div>
            <div className="vw">View Work</div>
        </div>
        <div className="trust">Follow us on our social media handle</div>
        <div className="brands">

        </div>
    </div>
    <div className="image"></div>
    <div className="footer">
        <div className="fitem" >
            <div className="fheading">Home</div>
            <div className="fheading">About</div>
            <div className="fheading">Services</div>
            <div className="fheading">Terms</div>
            <div className="fheading">Privacy Policy</div>
        </div>
        <p className="copyright" >Coal India Limited © 2023</p> 
    </div>
</div>
    );
}