import './SectionHeader.css'


const SectionHeader = (props) => {
  return (
      <div className='section-header'>
          <div className='red-block'>
              
          </div>
          <div className='text'>
             {props.headerContent}
              
          </div>
          
    </div>
  )
}

export default SectionHeader