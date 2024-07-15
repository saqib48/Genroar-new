import PropTypes from 'prop-types';

const AnchorTag = ({ href, children, variant = '' }) => {
  let anchorStyle = "";

  switch (variant) {
    case 'footertag':
      anchorStyle = "text-[13px] cursor-pointer text-[#747474] hover:text-[#ff6a28] font-normal";
      break;
    case "productName":
      anchorStyle = "text-[12px] cursor-pointer text-[#747474] hover:text-[#ff6a28] font-normal";
      break;
    case "discover":
      anchorStyle = "text-[16px] cursor-pointer text-[#747474] hover:text-[#ff6a28] font-normal";
      break;
    case "success":
      anchorStyle = "text-[14px] cursor-pointer text-[#747474] hover:text-[#ff6a28]";
      break;
    case "login":
      anchorStyle = "text-[12px] hover:text-[#ff6a28] font-normal text-[#747474] cursor-pointer";
      break;
    case "Header":
      anchorStyle = "flex items-center leading-[50px] hover:text-[#ff6a28] cursor-pointer text-[#242424] text-[13px] font-semibold";
      break;
    case "Headerh":
      anchorStyle = "leading-[40px] hover:text-[#ff6a28] cursor-pointer text-[#747474] text-[14px] font-semibold";
      break;
    case "login Password":
      anchorStyle = "text-[15px] text-[#ff6a28] leading-[39px] font-normal";
      break;
    case "homeBanner":
      anchorStyle = "text-[16px] border-b-2 border-b-[#242424] text-[#242424] font-normal hover:text-[#ff6a28] hover:border-[#ff6a28] transition-all";
      break;
    case "MyAccount":
      anchorStyle = "text-[16px] border-b-2 border-b-[#242424] text-[#242424] font-normal hover:text-[#ff6a28] hover:border-[#ff6a28] transition-all";
      break;
    case "CheckCart":
      anchorStyle = "w-full py-[10px] justify-center flex text-[13px] font-normal bg-[#f1f1f1] border-[1px] border-[#747474] rounded-[7px] hover:text-white hover:bg-[#242424] transition-[0.5s]";
      break;
    case "check":
      anchorStyle = "leading-[30px] text-[#ff6a28] cursor-pointer text-[13px] font-normal";
      break;
    default:
      anchorStyle = "";
  }

  return (
    <a className={anchorStyle} href={href}>{children}</a>
  );
};

AnchorTag.propTypes = {
  href: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  variant: PropTypes.string
};

export default AnchorTag;
