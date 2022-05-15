import s from "./Footer.module.css";

import { FC } from "react";

const Footer: FC = () => {
  return (
    <div className={s.footer}>
      <div className={s.footer__block}>
        <div className={s.footer__item}>
          Vyacheslav Kuznetsov ©️ 2022 год</div>
      </div>
    </div>
  );
};

export default Footer;
