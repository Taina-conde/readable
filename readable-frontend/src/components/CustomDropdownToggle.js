import React from 'react'

const CustomDropdownToggle = React.forwardRef(({ children, onClick }, ref) => (
    <button
    className = 'icon-btn'
      ref={ref}
      onClick={(e) => {
        e.preventDefault();
        onClick(e);
      }}
    >
      {children}
      
    </button>
  ));
  export default CustomDropdownToggle;