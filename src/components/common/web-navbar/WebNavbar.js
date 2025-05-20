"use client";

import { useSession } from "@/hooks/useSession";
import styles from "./WebNavabr.module.css";
import { Button } from "../button/Button";
import { usePathname, useRouter } from "next/navigation";
import { arePathsEqual } from "@/lib/utils/CommonUtils";
import { appRouteList } from "@/lib/utils/PageRouteUtils";

const WebNavbar = () => {
  const { removeSession } = useSession();
  const pathname = usePathname();
  const router = useRouter();

  const handleLogout = () => {
    removeSession();
  };

  const handleRedirectionToUserPage = () => {
    router.push(appRouteList.user);
  };

  return (
    <nav className={styles["nav"]}>
      <div></div>
      <div className={styles["nav-right"]}>
        {!arePathsEqual(pathname, appRouteList.user) && (
          <Button
            className={styles["history"]}
            onClick={handleRedirectionToUserPage}
          >
            My porducts
          </Button>
        )}
        <Button className={styles["logout-button"]} onClick={handleLogout}>
          LOGOUT
        </Button>
      </div>
    </nav>
  );
};

export default WebNavbar;
