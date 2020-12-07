import React from "react";
import { useRecoilValue } from "recoil";
import EventListener from "react-event-listener";
import * as Atoms from "../../../atoms";
import { HeaderContainer } from "../../../containers/molecules/header/container";
import { ModalContainer } from "../../../containers/molecules/modal";
import { FormContainer } from "../../../containers/organisms/form";
import { ListContainer } from "../../../containers/organisms/list";
import { Add } from "../../molecules/buttons/add";
import style from "./style.css";
import { Sort } from "../../molecules/buttons/sort";
import { Order } from "../../molecules/buttons/order";

/**
 * Page Component
 */
export const Page: React.FC = React.memo(function Page() {
  const [height, setHeight] = React.useState<number>(0);
  const [width, setWidth] = React.useState<number>(0);
  const page = useRecoilValue(Atoms.pageState);
  const isOpen = useRecoilValue(Atoms.openState);

  // set initial size
  React.useEffect(() => {
    setHeight(innerHeight);
    setWidth(innerWidth);
  }, []);
  // just in case for resize
  const onResize = () => {
    setHeight(innerHeight);
    setWidth(innerWidth);
  };

  return (
    <div style={{ width, height }} className={style.root}>
      <EventListener target={"window"} onResize={onResize} />
      {isOpen && <ModalContainer />}
      <HeaderContainer />

      {page === "list" ? (
        <>
          <div className={style.sort}>
            <Sort />
            <Order />
          </div>
          <div className={style.list}>
            <ListContainer />
            <Add />
          </div>
        </>
      ) : (
        <div className={style.form}>
          <FormContainer />
        </div>
      )}
    </div>
  );
});
