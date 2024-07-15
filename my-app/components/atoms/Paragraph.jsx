import PropTypes from 'prop-types'

const Paragraph = ({ children }) => {
  return (
    <p className='text-[14px]  text-[#747474] font-[400] leading-[30px]' >{ children }</p>
  )
}

Paragraph.propTypes = {
      children: PropTypes.string.isRequired
}

export default Paragraph