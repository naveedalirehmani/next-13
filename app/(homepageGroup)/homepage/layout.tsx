import { ModeToggle } from "@/components/custom/themeToggle";
import styles from "./homepage.module.css";

export default function Layout(props: {
  children: React.ReactNode;
  user: React.ReactNode;
  admin: React.ReactNode;
}) {
  return (
    <div>
      <ModeToggle></ModeToggle>
      homePageLayout
      {props.children}
        below are parallel routes, the main purpose of parallel routes is to intercep other routes. but we can also render the page.tsx in these @user -> parallel routes to render them in layout
      <div className={styles.container_flex}>

        admin
        <div className={styles.container_flex_item}>{props.admin}</div>
        user details interceptor
        <div className={styles.container_flex_item}>{props.user}</div>
      </div>
    </div>
  );
}
 