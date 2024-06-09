import React, { FC, ReactNode } from 'react'
import { CSSModuleClasses } from '../../interfaces/css_module.interface';

interface Props {
    _css: CSSModuleClasses
    children: ReactNode
}

export const Head: FC<Props> = ({ _css, children }) => {

    return (
        <div className={_css.robot_head}>
            {children}
        </div>
    )
}
