import PropTypes from 'prop-types';
// import Image from '../Image/Image';

const Logo = ({ src, alt, href }) => {
  return (
    <div>
      {LogoData.map((item) => {
        return (
          <a className='w-[70px] block' key={item.href} href={item.href}>
            <img src={item.src} alt={item.alt} />
          </a>
        )
      })}
    </div>
  );
};

Logo.propTypes = {
  src: PropTypes.string,
  alt: PropTypes.string,
  href: PropTypes.string,
};

const LogoData = [
  {
    href: '#',
    src: '/assits/images/logo.png',
    alt: 'logo'
  }
]

export default Logo;