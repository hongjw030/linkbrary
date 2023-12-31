/*Nav 컴포넌트:
  페이지 상단에 위치하는 공통 컴포넌트.

  profile: 로그인 된 상태라면 profile 값을 받아 프로필을 띄움
  isSticky: 만약 true 값이라면 Nav 컴포넌트가 position sticky 상태가 되게 하고, false 값이라면 Nav 컴포넌트가 position:relative 상태가 되게 함.
*/

import Image from "next/image";
import Link from "next/link";
import styles from "./Nav.module.scss";

function Nav() {
  return (
    <nav className={styles["nav"]}>
      <div className={styles["gnb"]}>
        <Link href="/">
          <Image
            src="icons/logo.svg"
            priority={true}
            width={133}
            height={52}
            alt="로고 크기"
          />
        </Link>

        <button
          className={`${styles["link-button"]} ${styles["signin-button"]}`}
        >
          <Link href="/signin">로그인</Link>
        </button>
      </div>
    </nav>
  );
}

export default Nav;
