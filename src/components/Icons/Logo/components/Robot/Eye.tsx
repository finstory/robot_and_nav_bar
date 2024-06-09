import React, { FC } from 'react'
import { CSSModuleClasses } from '../../interfaces/css_module.interface';

interface Props {
    _css: CSSModuleClasses
}

export const Eye: FC<Props> = ({ _css }) => {
    return (
        <div className={_css.eye}>

            <div className={_css.closed} />

            <div className={_css.spark} />

            <div className={_css.small_spark} />
        </div>

    )
}
