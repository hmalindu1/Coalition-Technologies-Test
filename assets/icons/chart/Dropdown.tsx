import * as React from 'react'
const SvgComponent = (props: React.JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={10.646} height={6} {...props}>
    <path d="M5.321 6a.958.958 0 0 1-.335-.057.827.827 0 0 1-.3-.2L.208 1.264a.722.722 0 0 1-.212-.52.7.7 0 0 1 .212-.53.715.715 0 0 1 .525-.217.715.715 0 0 1 .525.217l4.059 4.059L9.376.214a.722.722 0 0 1 .52-.212.7.7 0 0 1 .53.212.715.715 0 0 1 .217.525.715.715 0 0 1-.217.525L5.948 5.743a.826.826 0 0 1-.3.2.958.958 0 0 1-.327.057Z" />
  </svg>
)
export default SvgComponent
