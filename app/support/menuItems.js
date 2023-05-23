import {MdOutlineMobileFriendly} from "react-icons/md"
import {CgScreen} from "react-icons/cg"
import {HiCurrencyRupee} from "react-icons/hi"
import {HiSpeakerphone} from "react-icons/hi"
import {MdNewspaper} from "react-icons/md"
import {FaBloggerB} from "react-icons/fa"
import {MdOutlineEmojiPeople} from "react-icons/md"
import {FaEnvelopeOpen} from "react-icons/fa"
import {AiFillFire} from "react-icons/ai"
import {RiLightbulbFlashFill} from "react-icons/ri"
import {GiWaterDrop} from "react-icons/gi"
import {BsFillArrowRightCircleFill} from "react-icons/bs"

const menuItems = [
    [
        {icon:MdOutlineMobileFriendly,
        tag:"Prepaid Mobile Recharge",
        },
        {icon:CgScreen,
        tag:"DTH Recharge",
        },
        {icon:HiCurrencyRupee,
        tag:"Loans",
        },
        {icon:HiSpeakerphone,
        tag:"Promotion",
        },
    ],
    [
        {icon:MdNewspaper,
        tag:"News",
        },
        {icon:FaBloggerB,
        tag:"Blog",
        },
        {icon:MdOutlineEmojiPeople,
        tag:"Jobs",
        },
        {icon:FaEnvelopeOpen,
        tag:"Anonymous Feedback",
        },
    ],
    [
        {icon:AiFillFire,
        tag:"Gas Booking",
        },
        {icon:RiLightbulbFlashFill,
        tag:"Electricity Bill",
        },
        {icon:GiWaterDrop,
        tag:"Water Bill",
        },
        {icon:BsFillArrowRightCircleFill,
        tag:"See More",
        },
    ],
]

export {menuItems}