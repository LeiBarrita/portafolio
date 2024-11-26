import React, { ReactNode } from "react";
import styles from "./skeleton.module.css";

function Skeleton({
  className,
  children,
  loading,
}: {
  className?: string;
  children: ReactNode;
  loading: boolean;
}) {
  return (
    <div className={`${loading && styles.skeleton} ${className}`}>
      {children}
    </div>
  );
}

export default Skeleton;
