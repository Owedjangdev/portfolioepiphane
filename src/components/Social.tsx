

import Link from "next/link"

import { FaGithub, FaLinkedin, FaFacebook,FaYoutube } from "react-icons/fa";

type SocialProps = {
  containerStyle?: string;
  iconStyle?: string;
};

const socialLinks = [
  {
    icon: <FaGithub />,
    path: "https://github.com/Owedjangdev"      
    },


     {
    icon: <FaLinkedin />,
    path: "https://www.linkedin.com/in/epiphane-ow%C3%A9djangnon-houehanou-86b361322?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"      
    },
     {
    icon: <FaFacebook />,
    path: "https://www.facebook.com/profile.php?id=61573714992118"    
    },
     {
    icon: <FaYoutube />,
    path: "https://youtube.com/@epiphanehouehanou?si=r4_F11A_aj1KaR-t"     
    },
]

export default function Social({containerStyle, iconStyle}: SocialProps) {
  return (
    <div className={containerStyle}>

      
      {socialLinks.map((link, index) => (
        <Link
          key={index}
          href={link.path}
          
          className={iconStyle}
        >
          {link.icon}
        </Link>
      ))}
    </div>
  )
}
