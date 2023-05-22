import React, {FC} from 'react';
import styles from "./Skeleton.module.scss"
import cn from "classnames";
interface ISkeleton {
    className?: string
}
export const Skeleton: FC<ISkeleton> = ({className}) => {
    return (
        <div className={cn(className, styles.total_skeletons)}/>
    );
};

