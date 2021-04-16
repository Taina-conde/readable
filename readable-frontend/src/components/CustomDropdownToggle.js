import React from 'react'

const CustomDropdownToggle = React.forwardRef(({ children, onClick }, ref) => (
    <a
    className = 'icon-btn'
      ref={ref}
      onClick={(e) => {
        e.preventDefault();
        onClick(e);
      }}
    >
      {children}
      
    </a>
  ));
  export default CustomDropdownToggle;