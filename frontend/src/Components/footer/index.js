import styled from "styled-components";
import facebook from "../../Assets/svgs/facebook.svg"
import twitter from "../../Assets/svgs/twitter.svg"
import googleplus from "../../Assets/svgs/googleplus.svg"
import instagram from "../../Assets/svgs/instagram.svg"

const Footer = styled.div`
  width: 100%;
  height: 7vh;
  background: ${props => props.theme.backgroundWhite};
  position: fixed;
  bottom: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 10;  
`

const SocialMediaWrapper = styled.img`
  height: 3vh;
  width: auto;
  margin-right: 20px;
`
const NavigationSectionLeft = styled.div`
  width: 40%;
  display: flex;
  align-items: center;
  padding-left: 30px;
`
const NavigationSectionRight = styled.div`
  width: 20%;
  display: flex;
  justify-content: flex-end;
  margin-right: 10px;
`
const CopyrightWrapper = styled.div`
  border-top: ${(props) => props.theme.whisper} solid 1px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  height: 40%;
  width: 100%;
  font-size: ${(props) => props.theme.textSizeXS};
  color: ${(props) => props.theme.dimGrey};
  padding-left: 30px;
`
const NavWrapper = styled.div`
  height: 60%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  width: 100%;
`
const NavTitle = styled.p`
  color: ${(props) => props.theme.dimGrey};
  padding: 5px;
  margin-right: 10%;
  font-size: 20px;
  white-space: nowrap;
`


const NavFooter = () => {
    return (
        <Footer>
            <NavWrapper>
                <NavigationSectionLeft>
                    <NavTitle>
                        About Us
                    </NavTitle>
                    <NavTitle>
                        Press
                    </NavTitle>
                    <NavTitle>
                        Blog
                    </NavTitle>
                    <NavTitle>
                        iOS
                    </NavTitle>
                    <NavTitle>
                        Android
                    </NavTitle>
                </NavigationSectionLeft>
                <NavigationSectionRight>
                    <SocialMediaWrapper src={facebook}/>
                    <SocialMediaWrapper src={twitter}/>
                    <SocialMediaWrapper src={googleplus}/>
                    <SocialMediaWrapper src={instagram}/>
                </NavigationSectionRight>
            </NavWrapper>
            <CopyrightWrapper>
                © Copyright Luna 2021
            </CopyrightWrapper>
        </Footer>
    )
}

export default NavFooter