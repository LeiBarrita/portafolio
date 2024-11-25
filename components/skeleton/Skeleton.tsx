import React, { ReactNode } from "react";
import styles from "./skeleton.module.css";

function Skeleton({
  children,
  loading,
}: {
  children: ReactNode;
  loading: boolean;
}) {
  return <div className={`${loading && styles.skeleton}`}>{children}</div>;
}

export default Skeleton;
