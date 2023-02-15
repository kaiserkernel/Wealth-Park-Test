/* eslint-disable react/require-default-props */
import { FC } from 'react'
import classNames from 'classnames'

import styles from './Loading.module.css'

interface Props {
  loadingText?: string
  className?: string
}

const Loading: FC<Props> = ({ loadingText, className }) => {
  return (
    <div className={classNames('flex-center space-x-4', className)} data-testid="loading">
      <div className={styles.loading} />
      {loadingText && <span> {loadingText} </span>}
    </div>
  )
}

export default Loading
