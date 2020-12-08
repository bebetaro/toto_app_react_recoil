import "reboot.css";
import React from "react";
import ReactDOM from "react-dom";
import ReactModal from "react-modal";
import { RecoilRoot } from "recoil";
import { Page } from "./components/page/page";

const App = () => {
  return (
    <RecoilRoot>
      <Page />
    </RecoilRoot>
  );
};

ReactModal.setAppElement("#root");
const target = document.querySelector("#root");
if ("serviceWorker" in navigator) {
  navigator.serviceWorker.register("service-worker.js").then(() => {
    if (target) {
      ReactDOM.render(<App />, target);
    }
  });
} else {
  ReactDOM.render(<App />, target);
}
