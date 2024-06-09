import React, { FC, ReactNode } from 'react'
import { CSSModuleClasses } from './interface/css_module.interface'

interface Props {
    _css: CSSModuleClasses
    children: ReactNode
}

export const Eyes: FC<Props> = ({ _css, children }) => {

    return (
        <div className={_css.eyes_wrapper}>
            {children}
        </div>
    )
}
