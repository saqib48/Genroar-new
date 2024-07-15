import AnchorTag from '../atoms/anchorTag'
import Container from '../atoms/Container'
import Span from '../atoms/Span'
import PortListing from '../organisms/PortListing'
import Portfoliobtns from './Portfoliobtns'



function Portfoli() {
  return (
    <div className=''>
      <Container>
        <div className='pt-[4%]'>
          <div className='flex gap-[5px]'>
            <AnchorTag variant="success">Home</AnchorTag>
            <span className='text-[#999] text-[12px]'>/</span>
            <Span>Portfolio</Span>
          </div>
        </div>
        <Portfoliobtns/>
        <PortListing />
      </Container>
    </div>
  )
}

export default Portfoli