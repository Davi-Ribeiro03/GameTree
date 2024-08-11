import React, { useState } from "react";
import Box from "./components/Box";
import Modal from "react-responsive-modal";
import "react-responsive-modal/styles.css";

const App = () => {
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  return (
    <>
      <div className="h-screen flex justify-center items-center flex-col gap-10">
        <div className="w-1/4 h-1/2 flex flex-col justify-center">
          <div className="flex h-auto flex-1">
            <Box>X</Box>
            <Box className="border-l-2 border-r-2">O</Box>
            <Box>X</Box>
          </div>
          <div className="flex h-auto flex-1">
            <Box className="border-t-2 border-b-2">X</Box>
            <Box className="border-l-2 border-r-2 border-b-2 border-t-2">O</Box>
            <Box className="border-t-2 border-b-2">X</Box>
          </div>
          <div className="flex h-auto flex-1">
            <Box>O</Box>
            <Box className="border-l-2 border-r-2">O</Box>
            <Box>X</Box>
          </div>
        </div>
        <button
          onClick={() => setModalOpen(true)}
          className="bg-sky-950 px-8 py-2 rounded-lg text-white"
        >
          Gerar árvore
        </button>
      </div>
      <Modal
        open={modalOpen}
        center
        onClose={() => setModalOpen(false)}
        classNames={{
          modal: "w-[1200px] h-[800px]",
        }}
      >
        <div className="flex justify-center items-center">
          <h2>Printa a árvore aqui</h2>
        </div>
      </Modal>
    </>
  );
};

export default App;
