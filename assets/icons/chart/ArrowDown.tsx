import * as React from 'react'
const SvgComponent = (props: React.JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={9.999}
    height={5.479}
    {...props}
  >
    <path
      fill="#072635"
      d="M4.363 5.199.186 1.021A.673.673 0 0 1 .05.828.532.532 0 0 1 0 .6.606.606 0 0 1 .165.176a.56.56 0 0 1 .434-.18h8.8a.56.56 0 0 1 .434.181.611.611 0 0 1 .165.423 1.85 1.85 0 0 1-.186.421L5.635 5.198a.962.962 0 0 1-.3.21.851.851 0 0 1-.338.066.851.851 0 0 1-.339-.066.963.963 0 0 1-.295-.209Z"
    />
  </svg>
)
export default SvgComponent
