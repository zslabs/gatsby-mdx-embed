/** @jsx jsx */
import { jsx, Flex } from "theme-ui"
import { Link } from "docz"

import * as styles from "./styles"

export const Logo = () => {
  return (
    <Flex aligmItems="center" data-testid="logo">
      <Link to="/" sx={styles.link}>
        <svg
          x="0px"
          y="0px"
          viewBox="0 0 275 188"
          width="90px"
          height="auto"
          sx={styles.logo}
        >
          <path
            d="M41.1,56.2h44.6c0.8,0,1.1,0.3,0.9,1l-7,22.7c-0.2,0.5-0.5,0.7-0.9,0.7H56.5l-7,23.8h20.6c0.8,0,1.1,0.3,0.9,1
	l-7,22.7c-0.2,0.5-0.5,0.7-0.9,0.7H42l-8.7,29.4H55c0.8,0,1.1,0.3,0.9,1.1L49,182.2c-0.2,0.5-0.5,0.7-0.9,0.7H3.5
	c-0.8,0-1.1-0.3-0.9-1.1L40.2,56.9C40.4,56.4,40.7,56.2,41.1,56.2z"
          />
          <path
            d="M120.6,94.3c0.1-0.2,0.3-0.4,0.6-0.4h24.1c0.6,0,0.8,0.2,0.6,0.7L119.6,182c-0.2,0.3-0.4,0.5-0.6,0.5h-14.3
	c-0.6,0-0.8-0.2-0.6-0.7l19.7-65.5l-28,65.9c-0.2,0.2-0.4,0.4-0.6,0.4H80c-0.6,0-0.8-0.2-0.6-0.7l11.8-66.2L71,182.1
	c-0.2,0.3-0.4,0.5-0.6,0.5H56.1c-0.6,0-0.8-0.2-0.6-0.7l26.3-87.4c0.2-0.3,0.4-0.5,0.6-0.5h24.1c0.6,0,0.8,0.2,0.6,0.7l-12.4,63.4
	L120.6,94.3z"
          />
          <path
            d="M143,127.6l20,0.1c0.7,0,1.4-0.1,2-0.3c0.6-0.2,1.1-0.6,1.6-1.2s1-1.4,1.4-2.5s0.9-2.5,1.4-4.3
	c0.8-1,1.2-1.9,1.2-2.8c0-0.2,0-0.3-0.1-0.5c0-0.2-0.1-0.3-0.1-0.5c0.2-0.5,0.2-0.9,0.2-1.2c0-0.4,0-0.8,0-1.1
	c0-0.9-0.2-1.5-0.6-1.8c-0.4-0.3-1-0.4-1.9-0.4h-0.5c-0.2,0-0.4,0-0.7-0.1c-0.3,0-1.1-0.1-2.3-0.1s-3-0.1-5.4-0.1s-5.7,0-10,0
	c-0.6,0-0.8-0.2-0.6-0.7l4.8-15.7c0.2-0.3,0.4-0.5,0.6-0.5h22.2c4.6,0,7.9,0.9,10,2.6c2.1,1.8,3.2,4.4,3.2,7.9
	c0,1.2-0.1,2.5-0.4,3.8c-0.2,1.3-0.6,2.7-1,4.3l-2.3,7.6c-0.9,3.3-2.3,6.3-4.3,9.2s-4.8,5.1-8.5,6.7c3.5,1.2,5.3,3.9,5.3,8.1
	c0,1.1-0.1,2.1-0.3,3.2c-0.2,1.1-0.5,2.3-0.9,3.7l-4,13.1c-1.9,6.1-4.6,10.7-8.1,13.8s-8.3,4.6-14.4,4.6h-22.7
	c-0.6,0-0.8-0.2-0.6-0.7l15.3-53.8C142.6,127.8,142.8,127.6,143,127.6z M148.5,165.5h2.7c1,0,1.8-0.1,2.5-0.3s1.3-0.7,1.9-1.4
	c0.6-0.7,1.1-1.8,1.7-3.2c0.6-1.4,1.2-3.3,2-5.6v0.1c0.6-2,1-3.7,1.3-5s0.4-2.3,0.4-3.1c0-0.9-0.3-1.5-0.8-1.7s-1.4-0.4-2.5-0.4
	h-3.1L148.5,165.5z"
          />
          <path
            d="M200.2,93.9h31.2c0.6,0,0.8,0.2,0.6,0.7l-4.9,15.9c-0.2,0.3-0.4,0.5-0.6,0.5H211l-4.9,16.7h14.4
	c0.6,0,0.8,0.2,0.6,0.7l-4.9,15.9c-0.2,0.3-0.4,0.5-0.6,0.5h-14.8l-6.1,20.6h15.2c0.6,0,0.8,0.2,0.6,0.7l-4.8,15.9
	c-0.2,0.3-0.4,0.5-0.6,0.5h-31.2c-0.6,0-0.8-0.2-0.6-0.7l26.3-87.4C199.8,94.1,200,93.9,200.2,93.9z"
          />
          <path
            d="M144,5.5c0.1-0.2,0.2-0.3,0.5-0.3h20.9c0.5,0,0.7,0.2,0.5,0.6l-22.8,75.9c-0.1,0.3-0.3,0.4-0.5,0.4h-12.4
	c-0.5,0-0.7-0.2-0.5-0.6l17.1-56.9l-24.3,57.2c-0.1,0.2-0.3,0.3-0.5,0.3h-13.2c-0.5,0-0.7-0.2-0.5-0.6L118.4,24L101,81.7
	c-0.1,0.3-0.3,0.4-0.5,0.4H88c-0.5,0-0.7-0.2-0.5-0.6l22.8-75.9c0.1-0.3,0.3-0.4,0.5-0.4h20.9c0.5,0,0.7,0.2,0.5,0.6l-10.7,55
	L144,5.5z"
          />
          <path
            d="M224,28.1h-9.8c-0.1,0-0.2,0-0.3,0.1l-8.6,14c-0.1-1.4-0.2-2.8-0.3-4.4c-0.1-2.7-0.3-5.8-0.5-9.3
	c0-0.3-0.2-0.4-0.4-0.4h-9.7c-0.3,0-0.4,0.2-0.4,0.4l1.4,25.3l-18.2,27.5c-0.2,0.4-0.1,0.6,0.3,0.6h9.8c0.1,0,0.2,0,0.3-0.1
	l9.4-15.3l0.2,15c0,0.3,0.2,0.4,0.4,0.4h9.8c0.3,0,0.4-0.2,0.4-0.4c-0.2-3.1-0.4-5.9-0.5-8.4c-0.1-2.4-0.3-4.7-0.4-6.6
	c-0.2-2-0.3-3.8-0.4-5.5c-0.1-1.7-0.2-3.3-0.3-5l0,0l18.1-27.3C224.5,28.3,224.4,28.1,224,28.1z"
          />
          <path
            d="M161.9,38l2.8-9.6c0.1-0.2,0.2-0.3,0.4-0.3h11.4c3.1,0,5.5,0.5,7.2,1.4s2.5,2.7,2.5,5.2c0,0.8-0.1,1.8-0.3,2.8
	s-0.5,2.2-0.9,3.5l-8.4,28.1c-0.8,2.5-1.7,4.6-2.7,6.3c-1,1.7-2.1,3-3.4,3.9s-2.8,1.6-4.4,2c-1.6,0.4-3.4,0.6-5.5,0.6h-9.7
	c-0.3,0-0.5-0.2-0.4-0.5l3.8-9.7c0-0.1,0.1-0.2,0.3-0.2c0,0,9.3,0,9.7,0c0.6-0.1,1-0.6,1.4-1.2s0.9-1.7,1.4-3.1v0.1
	c1.3-4.6,2.4-8.3,3.3-11.3c0.9-2.9,1.7-5.4,2.3-7.3c0.7-2.1,1.2-3.7,1.5-4.9s0.5-2.2,0.6-3c0-0.2,0.1-0.5,0.1-0.8
	c0-0.9-0.7-1.4-2-1.4l-10.6-0.1C161.9,38.5,161.8,38.3,161.9,38z"
          />
          <path
            d="M233.7,110.2l4.5-15.8c0.2-0.3,0.4-0.5,0.6-0.5h18.7c5.1,0,9.1,0.8,11.8,2.3c2.7,1.5,4.1,4.4,4.1,8.6
	c0,1.4-0.2,2.9-0.5,4.6s-0.8,3.6-1.5,5.7l-13.8,46.2c-1.3,4.2-2.8,7.6-4.4,10.3c-1.6,2.7-3.5,4.9-5.6,6.5s-4.5,2.7-7.2,3.3
	c-2.6,0.6-5.6,0.9-9,0.9c-0.1,0-15.9,0-16,0c-0.6,0-0.8-0.3-0.6-0.9l6.2-16c0-0.2,0.2-0.4,0.5-0.4c0.1,0,15.3,0.1,16,0
	c0.9-0.2,1.7-0.9,2.3-1.9c0.7-1.1,1.4-2.8,2.3-5.1v0.1c2.1-7.5,3.9-13.7,5.5-18.5c1.5-4.8,2.8-8.9,3.8-12c1.1-3.4,2-6.1,2.5-8
	s0.9-3.6,1-4.9c0.1-0.3,0.1-0.8,0.1-1.3c0-1.5-1.1-2.3-3.3-2.3l-17.5-0.1C233.7,110.9,233.5,110.7,233.7,110.2z"
          />
        </svg>
      </Link>
    </Flex>
  )
}
