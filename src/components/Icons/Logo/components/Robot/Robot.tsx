import React, { FC } from 'react';
import { Head, Eyes, Eye } from '../../.';
import { CSSModuleClasses } from '../../interfaces/css_module.interface';

interface Props {
    _css: CSSModuleClasses
}

export const Robot: FC<Props> = ({ _css }) => {
    return (
        <div className={_css.robot_container}>
            <Head _css={_css}>
                <Eyes _css={_css}>
                    <Eye _css={_css} />
                    <Eye _css={_css} />
                </Eyes>
            </Head >
        </div >
    )
}
