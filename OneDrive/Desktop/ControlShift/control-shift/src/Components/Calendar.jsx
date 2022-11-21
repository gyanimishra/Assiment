import React from 'react'

const Calendar = () => {
  return (
    <div className="div">
      <div className="calendly-inline-widget" data-url="https://calendly.com/rickeyrickey747?hide_landing_page_details=1&hide_gdpr_banner=1" style={{minWidth:"320px",height:"630px"}}></div>
      <script type="text/javascript" src="https://assets.calendly.com/assets/external/widget.js" async></script>
    </div>

  )
}

export default Calendar
