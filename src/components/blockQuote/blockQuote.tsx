import React from 'react'

export interface IBlockQuoteProps {
  children: React.ReactNode;
  classes?: string;
}

const BlockQuote = (props: IBlockQuoteProps) => {
  const { children, classes } = props;
  return (
    <div className={'border-l-8 border-red-500 flex items-center ' + classes}>
      {children}
    </div>
  )
}

BlockQuote.defaultProps = {
  classes: 'my-8'
}

export default BlockQuote