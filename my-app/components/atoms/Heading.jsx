import PropTypes from "prop-types";

const Heading = ({ level, children }) => {
  const HeadingTag = `h${level}`;

  const getHeadingStyles = (level) => {
    switch (level) {
      case "1":
        return " text-[48px] leading-[54px] font-semibold text-[#242424] s";
      case "2":
        return "text-[36px] leading-[38px] font-bold text-[#242424] ";
      case "3":
        return "text-[16px] leading-[24px] font-semibold text-[#242424] ";
      case "4":
        return "text-[20px] text-medium text-gray-700 ";
      case "5":
        return " text-medium text-gray-700 ";
      case "6":
        return "text-[13px] leading-[24px] font-normal text-[#242424]";
      case "7":
        return "text-[13px] leading-[24px] font-normal text-[#747474]";
      case "8":
        return "text-[18px] leading-[20px] font-normal text-[#747474]";
      case "9":
        return "text-[15px] leading-[30px] font-normal text-[#747474]";
      case "10":
        return "text-[40px] leading-[20px] font-normal text-[#242424]";
      case "11":
        return "text-[25px] leading-[30px] font-normal text-[#242424]";
      case "12":
        return "text-[14px] leading-[24px] font-[400] text-[#242424]";
      case "13":
        return "text-[18px] leading-[18px] font-[700] text-[#242424]";
      case "14": //you can use this style for color #ff6a28 ok:)
        return "text-[13px] leading-[24px] font-[500] text-[#ff6a28]";
      case "15"://this style for only 4o4 page
        return "text-[200px] leading-[160px] font-[700] text-[#ff6a28]";
      case "16":
        return "text-[17px] leading-[26px] font-[400] text-[#747474]";
      case "17":
        return "text-[20px] leading-[18px] font-[700] text-[#242424]";
      case "18":
        return "text-[15px] text-medium text-customGray1";

      default:
        return "text-lg";
    }
  };

  const headingStyles = getHeadingStyles(level);

  return <HeadingTag className={headingStyles}>{children}</HeadingTag>;
};

Heading.propTypes = {
  level: PropTypes.oneOf(["1", "2", "3", "4", "5", "6", "7", "8", "9 ", "10 ", " 11", "12 ", "13", "14", "15 ", "16 ", " 17"]).isRequired,
};

export default Heading;