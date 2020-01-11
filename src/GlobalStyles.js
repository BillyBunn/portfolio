import React from 'react'
import { Global, css } from '@emotion/core'
import { normalize } from 'polished'

export default props => (
  <Global
    styles={css`
      ${normalize()};
      html {
        box-sizing: border-box;
        /* font-size: var(--baseFontSize); */
      }
      *,
      *:before,
      *:after {
        box-sizing: inherit;
      }
    `}
  />
)
