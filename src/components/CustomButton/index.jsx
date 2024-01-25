import styles from "./styles.module.scss";

export default function CustomButton({
  children,
  type = "primary",
  className,
  padding = "10px 16px",
  ...props
}) {
  return (
    <a
      className={`${styles.button} ${className} ${styles[type]}`}
      style={{
        padding: padding,
      }}
      {...props}
    >
      {children}
    </a>
  );
}
