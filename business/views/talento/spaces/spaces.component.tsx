import Image from "next/image";
import styles from "./spaces.module.css";
import ReactModal from "react-modal";
import Modal from "react-modal";
import React from "react";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)"
  },
};

// ReactModal.setAppElement("#__next");

export default function SpacesComponent(props: any) {
  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <>
      <div className={styles.container}>
        <div className={styles.grid}>
          <div></div>
          <div className={styles.title}>
            <h3>{props.translate("spaces.title1")}</h3>

            <p>{props.translate("talents.section2.description")}</p> 
            <button onClick={openModal}>
              {props.translate("spaces.button")}
            </button>
          </div>
          <div className={styles.sofa}>
            <img
              src="/images/talento/children.png"
              alt="children"
              title="children"
            />
          </div>
        </div>
      </div>
      <div className={styles.modal_view}>
        <Modal
          isOpen={modalIsOpen}
          onAfterOpen={afterOpenModal}
          onRequestClose={closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >
          <video
            src="/video/daniela.MP4"
            controls
            height={500}
            width={800}
            autoPlay
          ></video>
        </Modal>
      </div>
    </>
  );
}
