import React from "react";
import { useRecoilValue } from "recoil";
import { pageState } from "../../../atoms";
import { Header } from "../../../components/molecules/header";

export const HeaderContainer = (): JSX.Element => {
  const page = useRecoilValue(pageState);
  switch (page) {
    case "add":
      return <Header page={page} title={"タスクを作成"} />;
    case "update":
      return <Header page={page} title={"タスクを更新"} />;
    default:
      return <Header page={page} title={"タスク一覧"} />;
  }
};
