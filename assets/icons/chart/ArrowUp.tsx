import * as React from 'react'
const SvgComponent = (props: React.JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={10} height={5.479} {...props}>
    <path
      fill="#072635"
      d="m5.636.279 4.178 4.176a.673.673 0 0 1 .136.192.532.532 0 0 1 .05.232.606.606 0 0 1-.165.42.56.56 0 0 1-.435.18H.6a.56.56 0 0 1-.434-.181A.611.611 0 0 1 0 4.879a1.85 1.85 0 0 1 .186-.421L4.364.279a.962.962 0 0 1 .3-.21.9.9 0 0 1 .677 0 .963.963 0 0 1 .295.21Z"
    />
  </svg>
)
export default SvgComponent
